let age: number = 50;
let personName: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined;
let callback: (a: number) => number = (a) => { return 100 + a };

//В даному випадку:

// age має тип number, оскільки це числове значення.
// name(personName) має тип string, оскільки це рядок.
// toggle має тип boolean, оскільки це логічне значення.
// empty має тип null, оскільки це спеціальне значення null.
// notInitialize має тип undefined, оскільки це змінна, яка не має значення за замовчуванням.
// callback має тип (a: number) => number, оскільки це функція, яка приймає аргумент типу number і повертає значення типу number.