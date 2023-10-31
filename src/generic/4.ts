// Так ви парві.У мене вже є конкретний тип ComponentProps для параметрів класу
// Component.Тому, якщо всі об'єкти, які я передю в клас Component, мають тип
// ComponentProps, то не потрібно додатково вказувати T extends ComponentProps.Я
// можу оголосити клас Component без вказівки генерика, і він буде користуватися
// типом ComponentProps за замовчуванням:

interface ComponentProps {
  title: string;
}

class Component {
  constructor(public props: ComponentProps) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}

// Приклад використання:
const page = new Page({ title: 'Sample Page' });
page.pageInfo(); // Виведе "Sample Page"

// Це спростить мій код, і він все одно працюватиме правильно, оскільки всі об'єкти, які я передаю, мають тип ComponentProps.