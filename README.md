# Розподілення по компонентам
Компоненти розподіляються по сторінкам, в розділі components/screens і далі папки кожної сторінки і їхні компоненти
Використання пропсів відбувається за допомогою Typescript
Приклад:
https://github.com/lalkazaurus/WarhamFB/blob/fca07274d659453a88c41c8961d558cb24a67048/src/components/screens/races/RacesMenu/RacesMenu.tsx#L5C1-L9C61

# Кастомний хук
Кастомний хук тільки 1 і він потрібен, щоб елемент раси міг рорзкриватись на весь екран
https://github.com/lalkazaurus/WarhamFB/blob/fca07274d659453a88c41c8961d558cb24a67048/src/hooks/useFullScreen.tsx#L3C1-L33C3

# Форма
Форма написана за допомогою react-hook-form, валідація також з цього модуля
https://github.com/lalkazaurus/WarhamFB/blob/fca07274d659453a88c41c8961d558cb24a67048/src/components/screens/addRace/elements/addForm/AddForm.tsx#L5C1-L71C2

# Роутер
Роутер має всього 4 шляхи, створений через createBrowserRouter, дочірні шляхи не використовувались

# Менеджмент стану
Для менеджменту стану використано Tanstack і він в основному використовується при отриманні даних із серверу
https://github.com/lalkazaurus/WarhamFB/blob/fca07274d659453a88c41c8961d558cb24a67048/src/components/screens/races/Races.tsx#L9C2-L16C1