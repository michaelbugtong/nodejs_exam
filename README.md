# nodejs_exam

database used mysql:
Please run this sql:

CREATE DATABASE users_db;

CREATE TABLE `users_db`.`users_table` ( 
    `id` INT NOT NULL AUTO_INCREMENT , 
    `username` VARCHAR(100) NULL , 
    `first_name` VARCHAR(100) NULL , 
    `last_name` VARCHAR(100) NULL , 
    `pass` VARCHAR(100) NULL , 
    `date_added` VARCHAR(100) NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;


npm dependency:

sudo npm install mysql2-promise
npm install express-async-errors --save
npm i express jsonwebtoken dotenv

the 2 servers are :
server.js 
serverData.js


to run the application please go to the requests.rest

