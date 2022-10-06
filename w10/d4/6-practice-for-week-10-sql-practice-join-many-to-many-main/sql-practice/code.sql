-- Step 1
-- SELECT musicians.first_name, instruments.type
-- FROM musician_instruments
-- JOIN instruments ON (musician_instruments.instrument_id = instruments.id)
-- JOIN musicians ON (musician_instruments.musician_id = musicians.id);


SELECT musicians.first_name, musicians.last_name, instruments.type
FROM instruments
JOIN musician_instruments ON (instruments.id = musician_instruments.instrument_id)
JOIN musicians ON (musician_instruments.musician_id = musicians.id)
WHERE instruments.type = 'piano';

