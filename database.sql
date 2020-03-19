
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

--creates a table for registration info. Make sure that required feilds are marked the same here and in input form 
CREATE TABLE "user_info" (
"id" SERIAL Primary Key,
"user_id" INT REFERENCES "user"("id"),
"firstName" VARCHAR(50),
"lastName"VARCHAR(50),
"email" VARCHAR(100),
"phoneNumber" VARCHAR(15),
"age" VARCHAR(30),
"gender" VARCHAR (30),
"yearsAtCamp" VARCHAR(50) ,
"favoriteActivity" VARCHAR(250),
"favoriteMemory" VARCHAR(250),
"annualFund"VARCHAR(50),
"volunteerWork"VARCHAR(50),
"newsList"VARCHAR(50),
"willingToBeContacted"VARCHAR(50)
);
