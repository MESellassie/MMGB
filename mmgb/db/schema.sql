DROP DATABASE IF EXISTS mmgb_db;

CREATE DATABASE mmgb_db;

USE mmgb_db;

CREATE TABLE mood
(
    id INT AUTO_INCREMENT,
    PRIMARY KEY(id),
    mood VARCHAR (10,1)

CREATE TABLE searches
(
    id INT AUTO_INCREMENT,
    PRIMARY KEY (id),
    searches VARCHAR (200,1)
);

CREATE TABLE movies
(
    id INT AUTO_INCREMENT,
    PRIMARY KEY (id),
);

CREATE TABLE games
(
    id INT AUTO_INCREMENT,
    PRIMARY KEY (id),
);

CREATE TABLE music
(
    id INT AUTO_INCREMENT,
    PRIMARY KEY (id),
);

CREATE TABLE books
(
    id INT AUTO_INCREMENT,
    PRIMARY KEY (id),
);