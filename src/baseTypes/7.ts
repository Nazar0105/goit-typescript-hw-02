// Для створення функції isWeekend я можу використовувати enum, який містить дні
// тижня, і перевіряти, чи день є робочим чи вихідним. Ось приклад реалізації цієї функції:

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: DayOfWeek): boolean {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
}

// Приклад використання
const today = DayOfWeek.Sunday;
const isTodayWeekend = isWeekend(today);
console.log(`Сьогодні вихідний? ${isTodayWeekend}`);


// У цьому прикладі я визначив enum "DayOfWeek", де п'ять перших значень
// відповідають робочим дням, а два останні - вихідним.Функція "isWeekend" приймає
// день тижня (як параметр "day") і повертає "true", якщо це вихідний, або "false", якщо це робочий день.

// В прикладі використання я перевіряю, чи сьогодні (представлено значенням today)
// вихідний день і виводжу відповідне повідомлення у консоль.