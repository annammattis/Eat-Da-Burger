CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Avocali Burger", TRUE);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Texmex Burger", FALSE);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Bacon and Bleu Burger", TRUE);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Teryaki Chili Burger", TRUE);

use burgers;