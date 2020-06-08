DROP TABLE IF EXISTS crimes_reported;

create table crimes_reported (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    neighborhood VARCHAR(100) NOT NULL,
    date TEXT,
    police_called VARCHAR(10),
    type VARCHAR(100) NOT NULL,
    notes VARCHAR(300)    
)
