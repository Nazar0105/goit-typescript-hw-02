function merge<T, U>(objA: T, objB: U): T & U {
  return { ...objA, ...objB };
}


// У цьому прикладі використовуються generics<T, U>, що вказують, що функція "merge"
// приймає два об'єкти різних типів T і U. Вона повертає об'єкт, який є 
// об'єднанням T і U за допомогою оператора &. Таким чином, ця функція може 
// працювати з будь - якими об'єктами, незалежно від їх типу.