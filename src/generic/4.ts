// Для виправлення помилки та використання generics та інтерфейсів я переписав класи наступним чином:

interface ComponentProps {
  title: string;
}

class Component<T extends ComponentProps> {
  constructor(public props: T) {}
}

class Page extends Component<ComponentProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

// Приклад використання:
const page = new Page({ title: 'Sample Page' });
page.pageInfo(); // Виведе "Sample Page"


// У цьому прикладі я створив інтерфейс "ComponentProps", що містить властивості, які 
// очікуються для об'єкта "props". Клас "Component" тепер приймає generics "T", який 
// обмежується типом "ComponentProps", забезпечуючи, що "props" буде мати правильну
// структуру.Клас "Page" наслідується від "Component" та передає "ComponentProps" як параметр для generics.