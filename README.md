# verifikasiin-backend
## Back-end Services for Bangkit's Capstone Project, Verifikasiin

Setup :

1. Clone this repository
2. Install all dependencies by running `npm install`
3. Create a new file called `.env` in the root directory of the project and fill it with these variables:

    ```
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_HOST=your_database_host
    DB_PORT=your_database_port
    PORT=your_port
    ACCESS_TOKEN_SECRET=your_access_token
    REFRESH_TOKEN_SECRET=your_refresh_token
    ```
    To get your `ACCESS_TOKEN_SECRET` and `REFRESH_TOKEN_SECRET`, run this following code in your terminal using node two times to get each of them :
    ```
    require('crypto').randomBytes(64).toSting('hex')
    ```
4. Run `npm run dev` and the Backend services should be running on localhost:your_port
