// Для використання generics із функцією "getPromise()"", потрібно вказати тип даних, які
// можуть бути в масиві, що повертається.Ось як це можна зробити:

function getPromise<T>() {
  return new Promise<T[]>((resolve) => {
    resolve(['Text', 50]);
  });
}

getPromise<string | number>()
  .then((data) => {
    console.log(data);
  });

// У цьому випадку я використовую generics < T > для вказівки, що функція повертає
// проміс, в якому масив містить дані типу T.В функції "getPromise<string | number>()""
// я конкретезую тип "T" як "string | number", оскільки масив містить як рядки, так і числа.  