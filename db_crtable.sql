CREATE TABLE grusskarten (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    card LONGTEXT,
    lastModified  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

/*
Bevor man den GrußkartenEditor startet, muss man eine Datenbank anlegen:
- XAMPP Conrtrol Panel öffnen --> Webserver & MySQL starten
 --> Auf Admin bei MySQL klicken oder http://localhost:8080/phpmyadmin/ in Browser eingeben
  -->  auf Datenbanken klicken
   --> DB mit dem Namen "grußkarten" anlegen
    --> auf SQL klicken & den oben stehenden Code einfügen
     --> auf ok klicken, dann kann's los gehen
*/