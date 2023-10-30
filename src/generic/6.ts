// Для того, щоб уникнути помилок типу при виклику функції "createOrUpdateUser", мені
// потрібно оновити тип аргументу "initialValues" так, щоб всі поля були
// необов'язковими. я можу зробити це, додавши ? після імені поля.

type User = {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
}

function createOrUpdateUser(initialValues: User) {
  // Оновлення користувача
}

createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });

// Таким чином, всі поля стали необов'язковими, і я можу викликати функцію
// "createOrUpdateUser" з будь-яким піднабором полів, які мені потрібні для оновлення користувача.
