-- Step 1
UPDATE friends
SET first_name = 'Ryder', last_name = 'Test'
WHERE first_name = 'Ryder' AND last_name = 'Pond';

UPDATE friends
SET first_name = ''
WHERE id = 5;