// У даному коді, потрібно внести зміни для безпечного використання змінних.
// Оскільки "some" має тип "unknown", ми не можемо просто присвоїти його змінній "str",
// оскільки "unknown" є більш загальним типом, і ми повинні впевнитися, що значення, яке ми
// намагаємося привласнити, справді є рядком.

// Одним зі способів зробити це є перевірка типу та приведення типу, наприклад:

let some: unknown;
some = 'Text';

let str: string;
if (typeof some === 'string') {
  str = some; // Приведення до string, оскільки ми впевнені, що `some` є рядком
} else {
  // Обробка ситуації, коли `some` не є рядком
}


// Це гарантує, що ми використовуємо "some" тільки тоді, коли впевнені в його типі.


