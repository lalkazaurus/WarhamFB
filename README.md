# WarhamFB

## Опис проекту

Цей проект є веб-додатком, створеним на базі React з використанням MobX для управління станом, React Query для взаємодії з даними, Axios для HTTP-запитів, а також CSS для стилізації інтерфейсу.

### Основні можливості:

- Реєстрація, авторизація та вихід з акаунту.
- Управління записами рас, ігор та персонажів.
- Динамічне оновлення стану без перезавантаження сторінки.
- Захист ресурсів за допомогою JWT-токенів.

---

## Встановлення та запуск

### Клонування репозиторію

```bash
git clone [<URL репозиторію>](https://github.com/lalkazaurus/WarhamFB.git)
git switch master # перехід на гілку з проектом із завданнями ІЗ СТАНДАРТИЗАЦІЇ
```

### Встановлення залежностей

```bash
npm install
```

### Запуск додатку у режимі розробки

```bash
npm start
```

### Збірка для продакшну

```bash
npm run build
```

### Запуск Tailwind CSS у режимі спостереження

```bash
npm run build:css
```

---

## Використані технології

- **React** 18.3.1
- **MobX** 6.13.5
- **React Query** 5.51.23
- **Axios** 1.7.4
- **React Router Dom** 6.26.1
- **React Hook Form** 7.54.0
- **TypeScript** 5.7.2

---

## Архітектура проекту

```plaintext
my-app/
  ├── src/
      ├── components/    # UI-компоненти
      ├── screens/       # Сторінки додатку
      ├── services/      # API-сервіси
      ├── stores/        # MobX стори
      ├── types/         # Типи TypeScript
      ├── hooks/         # Кастомні хуки
      ├── http/          # Налаштування Axios
      ├── index.tsx      # Точка входу
  ├── public/
  ├── package.json
  └── README.md
```

---

## Основні команди

```bash
npm start     # запуск у режимі розробки
npm run build # створення збірки для продакшну
npm run build:css # запуск Tailwind CSS
npm test      # запуск тестів
node run docs # генерує файли документації через jsdoc, ВСІ ФАЙЛИ В ПАПЦІ DOCS НЕ ПРОПУСТІТЬ!!!
npm run storybook # запуск Storybook
node swagger.js # запуск Swagger
```

---

## API взаємодія

Додаток взаємодіє з сервером через `http://localhost:5000/auth` для дій пов'язаних з акаунтом користувача, інші дії використовують відповідні шляхи.

- `/login` — логін користувача.
- `/register` — реєстрація користувача.
- `/refresh` — оновлення токена.
- `/logout` — вихід з акаунту.

---

## Безпека

- Використовується `localStorage` для збереження JWT-токена.
- Axios інтерцептори для автоматичного оновлення токена.

---

# Розподілення по компонентам

Компоненти розподіляються по сторінкам, в розділі components/screens і далі папки кожної сторінки і їхні компоненти.
Використання пропсів відбувається за допомогою TypeScript.

---

## Кастомний хук

Кастомний хук useFullscreen використовується для розгортання елементів раси на весь екран.

---

## Форми

Форми написані за допомогою react-hook-form, валідація також з цього модуля.

---

## Роутер

Роутер створений через createBrowserRouter і має 9 основних шляхів та шлях для відображення помилки 404.

## Менеджмент стану

Для менеджменту стану використано Tanstack, який здебільшого застосовується при отриманні даних із серверу.

---

## Ліцензія

Проект розповсюджується за ліцензією **MIT**.

Ліцензія MIT була обрана, оскільки вона дозволяє користувачам вільно використовувати, змінювати та поширювати код без значних юридичних обмежень. Це дає змогу легко інтегрувати цей проєкт у інші проєкти, включаючи комерційні застосування, що сприяє його популяризації та розвитку. Вибір цієї ліцензії забезпечує спрощення роботи з проєктом та підтримує відкритий підхід до розробки програмного забезпечення.

[LICENSE](./LICENSE)

---

## Автор

**lalkazaurus**

[GitHub профіль](https://github.com/lalkazaurus)

© 2025. Усі права захищені.
