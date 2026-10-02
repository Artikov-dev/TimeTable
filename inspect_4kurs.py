import urllib.request
import csv

url = 'https://docs.google.com/spreadsheets/d/15WaaKu0J5bfssa3Z5whWSCl1tJ7HeQlz3xa6AgyM0ic/export?format=csv&gid=1864354632'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as resp:
    content = resp.read().decode('utf-8', errors='ignore')

lines = list(csv.reader(content.splitlines()))

days = lines[0]
times = lines[2]

current_day = ''
day_map = {}
for c in range(1, len(times)):
    if c < len(days) and days[c].strip():
        current_day = days[c].strip()
    day_map[c] = current_day

for r_idx, row in enumerate(lines):
    if len(row) > 0 and '23-310' in row[0]:
        print(f"4-kurs Row {r_idx}: {row[0]}")
        # print subjects, teachers, rooms
        for r_sub in range(r_idx, min(r_idx+6, len(lines))):
            items = [(c, day_map[c], times[c], lines[r_sub][c]) for c in range(1, len(times)) if c < len(lines[r_sub]) and lines[r_sub][c].strip()]
            print(f"  Sub-row {r_sub} ({lines[r_sub][0]}): {items}")
