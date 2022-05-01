# Dungeon-online
Площадка для проведения онлайн партий в настольные ролевые игры.
Позволяет создавать карты местности и разыгрывать сценарии с помощью любых ролевых систем.
[Dungeon-online](https://dnd-deploy.herokuapp.com)

### Описание
- В игре присутствуют гейммастер (далее ГМ) и игроки.
- ГМ является главным в игре. Он создает игровое поле, создает комнаты, придумывает сценарии и управляет игрой.
- ГМ может ставить ловушки, ставить врагов, перемещать их и удалять. Для этого нужно открыть панель ГМ в нижней части экрана.
- Игроки могут взаимодействовать только со своим персонажем, и кидать кубы. Делается это с панели игрока из нижней части экрана.
- Все спорные или неясные игровые ситуации выносятся на решения ГМ.
- Более подробное описание можно посмотреть на сайте в разделе GamePlay.

## Начало

### Установка

- `cd client` для перехода в директорию проекта
- `npm install` для установки npm-зависимостей проекта
- `cd ..` для перехода главную директорию проекта
- `cd server` для перехода в директорию проекта
- `npm install` для установки npm-зависимостей проекта
- `npm run migrate` для создания таблиц в БД
- `npm run seed` для засеивания БД ассетами
- `cd ..` для перехода главную директорию проекта
- `cd videochat` для перехода в директорию проекта
- `npm install` для установки npm-зависимостей проекта

### Запуск проекта локально

1. `npm start` для старта сервера (client, server, videochat)

### Управление
![alt](./DnD%20-control.gif)
- Double click - Для расположения предмета
- Alt+click - Для удаления предмета
- Shift+click - Для выделения предмета
- Ctrl+click - Для перемещения выделенного предмета

### Команда

- https://github.com/SergeyRomanovv
- https://github.com/AntonAtnagulov
- https://github.com/arturohanyan1
- https://github.com/Woodygarryson
