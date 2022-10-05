-- Step 1
DELETE FROM puppies
WHERE id = 9;

-- Step 2
DELETE FROM puppies
WHERE microchipped = 0;

INSERT INTO puppies (name, age_yrs, breed, weight_lbs, microchipped)
VALUES
('spot', 0.5, 'bassethound', 10, 1);