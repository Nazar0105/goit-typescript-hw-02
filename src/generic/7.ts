// Для створення об'єкта "RoleDescription" зіставлення ролей користувача із їх описами використовую "Record":

export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};

// Такий підхід використовує "Record", щоб визначити об'єкт, де ключами є ролі
// користувача з переліку "UserRole", а значеннями є їх описи.

