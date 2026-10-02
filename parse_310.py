import csv
import json

with open('sheet_3kurs.csv', mode='r', encoding='utf-8') as f:
    reader = list(csv.reader(f))

days = reader[0]
times = reader[2]
subjects = reader[76]
teachers = reader[78]
rooms = reader[80]
groups = reader[82]

# Map col to day
current_day = ''
day_map = {}
for i in range(1, 50):
    if i < len(days) and days[i].strip():
        current_day = days[i].strip()
    day_map[i] = current_day

lessons = []
for c in range(1, 50):
    subj = subjects[c].strip() if c < len(subjects) else ''
    teach = teachers[c].strip() if c < len(teachers) else ''
    room = rooms[c].strip() if c < len(rooms) else ''
    grp = groups[c].strip() if c < len(groups) else ''
    t_slot = times[c].strip() if c < len(times) else ''
    d = day_map.get(c, '')
    
    if subj or teach or room:
        lessons.append({
            'col': c,
            'day': d,
            'time_slot': t_slot,
            'subject': subj,
            'teacher': teach,
            'room': room,
            'groups': grp
        })

print(f"Total lessons found for row 76 (24-310 EN): {len(lessons)}")
for l in lessons:
    print(f"{l['day']:10} | {l['time_slot']:18} | {l['subject']:35} | {l['teacher']:22} | {l['room']:18} | {l['groups']}")

# Also let's check if 24-310 appears in ANY other row in the spreadsheet!
print("\nChecking if 24-310 appears in other rows:")
for r_idx in range(len(reader)):
    if r_idx in (76, 78, 80, 82):
        continue
    for c_idx in range(len(reader[r_idx])):
        if '310' in reader[r_idx][c_idx]:
            print(f"Row {r_idx} Col {c_idx}: {reader[r_idx][c_idx]}")
