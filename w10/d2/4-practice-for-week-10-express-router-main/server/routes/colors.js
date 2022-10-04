const express = require('express');
const router = express.Router();
// /colors/
router.get('/', (req, res) => {
    res.json("GET /colors")
})

// /colors/anything
router.get('/:name', (req, res) => {
    res.json("GET /colors/:name")
})

module.exports = router;