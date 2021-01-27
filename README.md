# - ChallengeJS -

**Description**


> "Wallet app" is an application made in React.js for the Frontend and
> Node.js using Express.js for the backend. The database is made in
> mySql and connected with Express.js through the Sequelize ORM.
> 
> The authentication is done with JWT.


## How to use
  
**`First, you need to clone the repository. Afterward go to the "API" folder and run the "npm install" command. Once installed, repeat it in the "my-app" folder.`**

**`Secondly, go to the "Public" folder on the root of the repository and Execute the Sql of the database.`**

**`After everything is installed, go to the "API" folder and execute the command "Npm run api". This command starts the API and the React application.`**


**User Test - Log In**

- **email: admin@admin.com** 
- **password: 1admin1** 

## Content Page

**Log In**

>   Form to login

**Sign In**

>   Form to Register

**Home Page**
>- Account balance
>- Recent Activity (10 operations max. Sorted by date)
>- Option buttons:
>- - Edit balance
> - - Create new operation: Deposit
>  - - Create new operation: Withdraw
>  - - Log Out

**Activity Page**

>- All activities (all  the operations. sorted by date, can be filtered by type and category)
>- Option buttons:
> - - Edit activity
> - - Delete activity
>  - - Log Out
>  
**Activity Detail**
> Detailed information of the operation



## React Flowchart 
![enter image description here](https://i.imgur.com/hhZkXBd.png)

## API Endpoints 

**User**

- **POST - /api.users/SignIn**  - *register a user* 
- **POST - /api.users/LogIn** - *Login as user and get JWT*


**Public content**
- **GET - /api.public/categorys** - *get all categories for operations* 


**Operations:  needs authorization**
- **GET - /api.operations/:op?**  - *get all operations or fetch operations by type* 
- **GET- /api.operations/detail/:id** - *get the detail of an operation* 
- **POST- /api.operations/new/:type** -  *create a new operation depending on the type*  
- **PUT- /api.operations/edit/:id** - *edit an operation*
- **DELETE - /api.operations/delete/:id** - *delete an operation*

**Account:  needs authorization**
- **POST - /api.account/balance** - *get all the information of the account with its operations*
- **POST - /api.account/new/balance** - *set the balance of the new account*
- **POST - /api.account/balance** - *update your account balance*


##   EER diagram of the database

![ingrese la descripción de la imagen aquí](https://i.imgur.com/jyMNQyO.png)

  

  




