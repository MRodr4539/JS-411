-- Create a new database called 'DatabaseName'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT name
        FROM sys.databases
        WHERE name = 'FinalProject'
)
CREATE DATABASE FinalProject;

DROP TABLE IF EXISTS incidentReport;

CREATE TABLE incidentReport (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    comments VARCHAR(255),
    lat FLOAT( 10, 6 ) NOT NULL,
    lng FLOAT( 10, 6 ) NOT NULL,
    type MARKER,
    TIMESTAMP,
        ON DELETE CASCADE
);