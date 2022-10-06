-- Step 1
SELECT bands.name, albums.title FROM bands
JOIN albums ON (albums.band_id = bands.id );

-- Step 2
SELECT albums.name, albums.num_sold FROM bands
JOIN albums ON (bands.id = albums.band_id)
WHERE albums.num_sold < 20000;