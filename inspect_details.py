import csv
import json

with open('sheet_3kurs.csv', mode='r', encoding='utf-8') as f:
    reader = list(csv.reader(f))

days_row = reader[0]
time_row = reader[2]

current_day = ''
day_map = {}
for c in range(1, len(time_row)):
    if c < len(days_row) and days_row[c].strip():
        current_day = days_row[c].strip()
    day_map[c] = current_day

print("Available days and slots in row 2:")
for c in range(1, len(time_row)):
    print(f"Col {c}: Day={day_map[c]} Time={time_row[c]}")

print("\n--- Rows 76, 78, 80, 82 ---")
for r in [76, 78, 80, 82]:
    print(f"\nRow {r}: {reader[r][0]}")
    for c in range(1, len(time_row)):
        val = reader[r][c].strip() if c < len(reader[r]) else ''
        if val:
            print(f"  Col {c:2d} ({day_map[c]} {time_row[c]}): {val}")
