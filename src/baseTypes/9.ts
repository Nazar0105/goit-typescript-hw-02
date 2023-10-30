// Для цього завдання я можу визначити і використовувати інтерфейс TypeScript,
// оскільки я маю об'єкти з однаковою структурою. Ось, як виглядає визначення інтерфейсу для цих об'єктів:

interface Page {
  title: string;
  likes: number;
  accounts: string[];
  status: 'open' | 'close';
  details?: {
    createAt: Date;
    updateAt: Date;
  };
}

// Цей інтерфейс "Page" визначає тип об'єкта, який включає рядок "title", числове
// значення "likes", масив рядків "accounts" та рядок "status", який може бути або
// 'open', або 'close'.Опціонально, об'єкт "details" містить додаткову інформацію, включаючи дати "createAt" та "updateAt".