-- Step 1
SELECT * FROM puppies;

-- Step 2
SELECT name, age_yrs, weight_lbs FROM puppies;

-- Step 3
-- /puppies/:id
SELECT name, age_yrs, weight_lbs FROM puppies
WHERE id = 5;

-- Step 4
SELECT name, age_yrs, weight_lbs, microchipped FROM puppies
WHERE microchipped = 1;

-- Step 5
SELECT name, age_yrs, weight_lbs FROM puppies
WHERE weight_lbs > 25;

-- Step 6
SELECT name, age_yrs, weight_lbs, microchipped FROM puppies
WHERE weight_lbs > 25 AND NOT microchipped = 1;