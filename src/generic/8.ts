
type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Для визначення типу "Params" так, щоб унеможливити наявність поля 'errors' у "Form",
// можна використати вбудований тип "Omit".Ось як це можна зробити:

type Params = Omit<Form, 'errors'>;

// Цей код створить новий тип "Params", який включає всі поля з Form, за винятком поля 'errors'.

export {};