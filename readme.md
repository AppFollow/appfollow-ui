
---

## Разработка

`yarn` - установить npm зависимости

`yarn dev` - дев сборка стайлбука http://localhost:6060/

`yarn js:fix` - исправить js

`yarn css:fix` - исправить css

[Плагин для настройки VS code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

---

## Деплой

[http://stylebook.appfollow.io/](http://stylebook.appfollow.io/)

Выполняется автоматически при пуше в master

---

## Публикация в npm

1. Полное ревью ПРа и тесты

2. `npm version patch`

3. Пуш коммита из п.2 в ветку

4. Мердж ПР в мастер

5. `npm publish`

---

## Импорт

`import 'appfollow-ui/lib/css/index.css';` - импортировать стили

`import {Button} from 'appfollow-ui/lib/app/components/Button` - импортировать компонент

---

## Ссылки
[Документация компонентов](https://jsdoc.app/)

[Styleguidist](https://react-styleguidist.js.org)
