DROP TABLE IF EXISTS w10_relation;
DROP TABLE IF EXISTS w10_person;

CREATE TABLE w10_person (
   ID          SERIAL         NOT NULL PRIMARY KEY,
   First_Name  VARCHAR(100)   NOT NULL,
   Last_Name   VARCHAR(100),
   Birthday    DATE
);

CREATE TABLE w10_relation (
   ID          SERIAL   NOT NULL PRIMARY KEY,
   Parent_ID   INT      NOT NULL REFERENCES w10_person(id),
   Child_ID    INT      NOT NULL REFERENCES w10_person(id)
);

-- People
INSERT INTO w10_person(First_Name, Last_Name, Birthday)
VALUES ('Debi', 'Reed', '1958-07-07');

INSERT INTO w10_person(First_Name, Last_Name, Birthday)
VALUES ('Curtis', 'Reed', '1954-12-11');

INSERT INTO w10_person(First_Name, Last_Name)
VALUES ('Becky', 'Dzierson');

INSERT INTO w10_person(First_Name, Last_Name)
VALUES ('Melody', 'Richards');

INSERT INTO w10_person(First_Name, Last_Name)
VALUES ('Michael', 'Reed');

INSERT INTO w10_person(First_Name, Last_Name)
VALUES ('Lisa', 'Dzierson');

INSERT INTO w10_person(First_Name, Last_Name)
VALUES ('Tiffany', 'Reed');

INSERT INTO w10_person(First_Name, Last_Name)
VALUES ('Natalie', 'Horn');

INSERT INTO w10_person(First_Name, Last_Name)
VALUES ('Harmony', 'Enright');

INSERT INTO w10_person(First_Name, Last_Name)
VALUES ('Joey', 'Reed');

INSERT INTO w10_person(First_Name, Last_Name)
VALUES ('Hyrum', 'Reed');

INSERT INTO w10_person(First_Name, Last_Name, Birthday)
VALUES ('Matthew', 'Reed', '2000-06-30');

-- Relations

-- Mom
INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (1, 3);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (1, 4);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (1, 5);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (1, 6);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (1, 7);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (1, 8);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (1, 9);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (1, 10);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (1, 11);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (1, 12);

-- Dad
INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (2, 3);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (2, 4);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (2, 5);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (2, 6);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (2, 7);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (2, 8);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (2, 9);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (2, 10);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (2, 11);

INSERT INTO w10_relation(Parent_ID, Child_ID)
VALUES (2, 12);