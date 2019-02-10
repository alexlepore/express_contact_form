CREATE DATABASE express_db;

USE express_db;

CREATE TABLE basic_form_info(
    id int NOT NULL AUTO_INCREMENT,
    user_name varchar(255) NOT NULL,
    email_address varchar(255) NOT NULL,
    user_message text NOT NULL,
    PRIMARY KEY (id)
);

