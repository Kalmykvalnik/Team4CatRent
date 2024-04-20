**Для запуска Backend необходимо:** 
1. Установить Node.js по ссылке https://nodejs.org/en/download/current
2. Перезагрузить компьютер
3. В терминале перейти в папку .\Backend (команда `cd .\Backend`)
4. Выполнить команды
- npm ci
- npx nx serve api
5. Добавить в корень папки `Backend` файл `.env` и в нём указать значения для переменных:

   DATABASE_URL=

   JWT_SECRET=

   NODE_ENV=

6. Для запуска **Basket** сервиса необходимо зайти в папку Backend/service/basket и выполнить там команды:
   - `npm ci`
   - `npx nx serve basket-api`

**Для запуска Frontend необходимо:**
1. Установить необходимые компоненты командой 'npm install' в папке Frontend
2. Выполнить команду 'npm run dev' в папке Frontend
3. Приложение будет доступно в dev режиме по localhost:3000

**Для создания БД необходимо:**
1. Установить Docker
2. Запустить контейнер PostgreSQL используя dockerfile в папке DB
???
-. Наслаждаться
