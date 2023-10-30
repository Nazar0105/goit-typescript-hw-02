// Переробив функцію compare використовуючи generics:

type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
}

function compare<T extends AllType, U extends AllType>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

// В цьому прикладі я використав generics<T extends AllType, U extends
// AllType>, щоб вказати, що обидва аргументи "top" і "bottom" мають відповідати типу
// AllType.Тепер функція "compare" приймає два об'єкти з полями типу "AllType" і 
// повертає об'єкт типу "AllType".