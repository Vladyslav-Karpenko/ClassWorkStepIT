some_text = '''Alex Korp,3000
Nikita Borisenko,2000
Sitarama Raju,1000'''
new_list = some_text.split('\n')
sum_of_money = 0
count = 0
names_lst = []
values_lst = []
for i in new_list:
    count += 1
    names_lst.append(i.split(',')[0])
    values_lst.append(int(i.split(',')[1]))
    sum_of_money += int(i.split(',')[1])

print(
    f'Total salary of employees is {sum_of_money} and average employee salary is {sum_of_money/count} and richest employee is {names_lst[int(values_lst.index(int(max(values_lst))))]}')
my_lst = ['2223', 500, 200, 600]
