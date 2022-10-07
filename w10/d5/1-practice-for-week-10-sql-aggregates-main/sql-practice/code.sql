-- COUNT
SELECT COUNT(*)
FROM cats;


-- MIN/MAX
SELECT cats.name, MIN(cats.birth_year) AS birth_year 
FROM cats;
SELECT cats.name, AVG(cats.birth_year) AS birth_year 
FROM cats;

SELECT cats.name, MIN(cats.birth_year) AS youngestCat,
cats.name, MAX(cats.birth_year) AS oldestCat
FROM cats;


-- Grouping/Having
SELECT cats.id, cats.name, toys.name, COUNT(toys.id)
FROM toys 
JOIN cats ON (toys.cat_id = cats.id)
GROUP BY cats.id
HAVING COUNT(toys.id) >= 2;