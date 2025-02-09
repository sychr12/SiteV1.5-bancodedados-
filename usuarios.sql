-- Use the existing database
USE usuario;

-- Create the table with the correct charset (only if it doesn't already exist)
CREATE TABLE IF NOT EXISTS usuario (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL,
    senha VARCHAR(10) NOT NULL,
    PRIMARY KEY(id)
) DEFAULT CHARSET=utf8;

-- Insert a record into the usuario table
INSERT INTO usuario (nome, senha) VALUES ('adimin', 'Wtc1902crc');

-- Select all records from the usuario table
SELECT * FROM usuario LIMIT 0, 1000
