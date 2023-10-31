// Я розумію.Для того, щоб всі властивості об'єкта стали обов'язковими і використати
// Partial, я можу визначити тип User зі всіма обов'язковими властивостями, а
// потім використовувати Partial на цьому типі:

type RequiredUser = {
  name: string;
  surname: string;
  email: string;
  password: string;
}

function createOrUpdateUser(initialValues: Partial<RequiredUser>) {
  // Оновлення користувача
}

createOrUpdateUser({ email: 'user@mail.com', password: 'password123' });

// Таким чином, RequiredUser містить всі обов'язкові властивості, і я можу 
// використовувати Partial для зроблення деяких з них необов'язковими.