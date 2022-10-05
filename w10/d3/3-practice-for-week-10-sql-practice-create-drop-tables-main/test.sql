DROP TABLE IF EXISTS puppies;

CREATE TABLE puppies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50) NOT NULL,
    age_yrs NUMERIC(3,1), -- 10.5, 1.7, ! 4.89
    breed VARCHAR(100),
    weight_lbs INTEGER,
    microchipped BOOLEAN DEFAULT 0
);

-- INSERT INTO puppies (name, age_yrs, breed, weight_lbs, microchipped)
-- VALUES
-- (DEFAULT),
-- (1)