CREATE TABLE year_2015 (
	country VARCHAR(255) PRIMARY KEY,
	happiness_rank INT,
	happiness_score FLOAT,
	economy FLOAT,
	health FLOAT,
	freedom FLOAT,
	corruption FLOAT,
	generosity FLOAT

);

CREATE TABLE year_2016 (
	country VARCHAR(255) PRIMARY KEY,
	happiness_rank INT,
	happiness_score FLOAT,
	economy FLOAT,
	health FLOAT,
	freedom FLOAT,
	corruption FLOAT,
	generosity FLOAT

);

CREATE TABLE year_2017 (
	country VARCHAR(255) PRIMARY KEY,
	happiness_rank INT,
	happiness_score FLOAT,
	economy FLOAT,
	health FLOAT,
	freedom FLOAT,
	corruption FLOAT,
	generosity FLOAT

);

CREATE TABLE year_2018 (
	happiness_rank INT,
	country VARCHAR(255) PRIMARY KEY,
	happiness_score FLOAT,
	economy FLOAT,
	health FLOAT,
	freedom FLOAT,
	generosity FLOAT,
	corruption FLOAT
	

);

CREATE TABLE year_2019 (
	happiness_rank INT,
	country VARCHAR(255) PRIMARY KEY,
	happiness_score FLOAT,
	economy FLOAT,
	health FLOAT,
	freedom FLOAT,
	generosity FLOAT,
	corruption FLOAT
	

);

-- test tables 
SELECT * FROM year_2019;