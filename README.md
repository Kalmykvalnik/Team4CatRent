**Для запуска Backend необходимо:** 
1. Установить Node.js по ссылке https://nodejs.org/en/download/current
2. Установить RabbitMQ по ссылке https://www.rabbitmq.com/. Стандартный логин и пароль для входа в rabbitmq guest/guest. Адрес - http://localhost:15672/
3. Перезагрузить компьютер
4. В терминале перейти в папку .\Backend (команда `cd .\Backend`)
5. Выполнить команды
- npm ci
- npx nx serve api
5. Добавить в корень папки `Backend` файл `.env` и в нём указать значения для переменных:

   DATABASE_URL= (пример - DATABASE_URL=postgres://postgres:123@localhost:5432/delivery)

   JWT_SECRET=

   NODE_ENV=

6. Для запуска **Basket** сервиса необходимо зайти в папку Backend/service/basket и выполнить там команды:
   - `npm ci`
   - `npx nx serve basket-api`

**Миграции:**
1. После изменения схемы `schema.prisma` необходимо выполнить `npx prisma migrate dev --name [наименование_миграции]`
2. Для публикации миграции в бд необходимо выполнить `npx prisma migrate deploy`

**Для запуска Frontend необходимо:**
1. Установить необходимые компоненты командой 'npm install' в папке Frontend
2. Выполнить команду 'npm run dev' в папке Frontend
3. Приложение будет доступно в dev режиме по localhost:3000

**Для создания БД необходимо:**
1. Установить Docker
2. Запустить контейнер PostgreSQL используя dockerfile в папке DB
???
-. Наслаждаться
