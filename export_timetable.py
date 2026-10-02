import csv
import json

def parse_sheet_group(csv_path, target_group):
    with open(csv_path, mode='r', encoding='utf-8') as f:
        reader = list(csv.reader(f))

    days_row = reader[0]
    time_row = reader[2]

    # Map column index to (day, time_slot, slot_number, start_time, end_time)
    slots = {}
    current_day = ""
    for c in range(1, len(time_row)):
        if c < len(days_row) and days_row[c].strip():
            current_day = days_row[c].strip()
        t = time_row[c].strip()
        # Parse slot number and times
        # format like '1. 08:00 - 09:20'
        slot_num = ""
        start_t = ""
        end_t = ""
        if t:
            parts = t.split('. ')
            if len(parts) == 2:
                slot_num = parts[0]
                times = parts[1].split(' - ')
                if len(times) == 2:
                    start_t = times[0]
                    end_t = times[1]
            elif '-' in t:
                times = t.split(' - ')
                start_t = times[0]
                end_t = times[1]
        slots[c] = {
            'col': c,
            'day': current_day,
            'slot_raw': t,
            'slot_num': slot_num,
            'start_time': start_t,
            'end_time': end_t
        }

    # Find the target group row
    group_row_idx = None
    for r_idx, row in enumerate(reader):
        if len(row) > 0 and row[0].strip() == target_group:
            group_row_idx = r_idx
            break

    if group_row_idx is None:
        print(f"Group {target_group} not found in {csv_path}")
        return []

    # In these sheets:
    # row group_row_idx: Subject
    # row group_row_idx + 1: Empty (or teacher)
    # Let's find exactly which rows have teachers, rooms, groups
    # Usually:
    # +0: Subject
    # +1: Empty or Teacher
    # Let's search down up to 5 rows for non-empty
    sub_rows = []
    for offset in range(1, 8):
        r = group_row_idx + offset
        if r < len(reader):
            if len(reader[r]) == 0:
                continue
            if len(reader[r][0].strip()) == 0 or '24-' in reader[r][0] or '23-' in reader[r][0]:
                sub_rows.append(r)

    print(f"Group {target_group} at row {group_row_idx}, sub_rows: {sub_rows}")

    # Let's identify which sub-row is teachers, rooms, groups
    # Teacher row has person names
    # Room row has 'Room' or 'Lecture Room' or numbers
    # Groups row has '24-...' or '23-...'
    subj_row = reader[group_row_idx]
    teacher_row = None
    room_row = None
    groups_row = None

    for r in sub_rows:
        row_text = " ".join(reader[r])
        if 'Room' in row_text:
            room_row = reader[r]
        elif target_group in row_text or '24-' in row_text or '23-' in row_text:
            groups_row = reader[r]
        elif any(c.strip() for c in reader[r][1:]):
            teacher_row = reader[r]

    print(f"Found rows -> Teacher: {'Yes' if teacher_row else 'No'}, Room: {'Yes' if room_row else 'No'}, Groups: {'Yes' if groups_row else 'No'}")

    lessons = []
    for c in range(1, len(time_row)):
        subj = subj_row[c].strip() if c < len(subj_row) else ''
        teacher = teacher_row[c].strip() if teacher_row and c < len(teacher_row) else ''
        room = room_row[c].strip() if room_row and c < len(room_row) else ''
        grp = groups_row[c].strip() if groups_row and c < len(groups_row) else ''

        if subj or teacher or room:
            # Determine type (Lecture, Practice, Lab)
            l_type = "Lecture"
            subj_lower = subj.lower()
            if "(practice)" in subj_lower or "amaliy" in subj_lower:
                l_type = "Practice"
            elif "(lecture)" in subj_lower or "ma'ruza" in subj_lower:
                l_type = "Lecture"
            elif "(lab)" in subj_lower or "laboratoriya" in subj_lower:
                l_type = "Lab"
            elif "room" in room.lower() and "lecture" not in room.lower():
                l_type = "Practice"
            else:
                l_type = "Lecture"

            clean_subj = subj.replace("(Practice)", "").replace("(Lecture)", "").replace("(Lab)", "").strip()

            lessons.append({
                'day': slots[c]['day'],
                'slot_num': slots[c]['slot_num'],
                'time': f"{slots[c]['start_time']} - {slots[c]['end_time']}",
                'start_time': slots[c]['start_time'],
                'end_time': slots[c]['end_time'],
                'raw_subject': subj,
                'subject': clean_subj if clean_subj else subj,
                'type': l_type,
                'teacher': teacher,
                'room': room,
                'groups': grp
            })

    return lessons

# Parse 3-kurs
lessons_310_3kurs = parse_sheet_group('sheet_3kurs.csv', '24-310 (EN)')
print(f"3-kurs 24-310 lessons count: {len(lessons_310_3kurs)}")

# Download 4-kurs if not saved
import urllib.request
url_4kurs = 'https://docs.google.com/spreadsheets/d/15WaaKu0J5bfssa3Z5whWSCl1tJ7HeQlz3xa6AgyM0ic/export?format=csv&gid=1864354632'
req = urllib.request.Request(url_4kurs, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    with open('sheet_4kurs.csv', 'w', encoding='utf-8') as f:
        f.write(resp.read().decode('utf-8', errors='ignore'))

lessons_310_4kurs = parse_sheet_group('sheet_4kurs.csv', '23-310 (EN)')
print(f"4-kurs 23-310 lessons count: {len(lessons_310_4kurs)}")

data = {
    'primary_group': '24-310 (EN)',
    'course_3': {
        'name': '3-kurs (24-310 EN)',
        'gid': '1515179202',
        'lessons': lessons_310_3kurs
    },
    'course_4': {
        'name': '4-kurs (23-310 EN)',
        'gid': '1864354632',
        'lessons': lessons_310_4kurs
    }
}

with open('timetable_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Saved timetable_data.json successfully!")
