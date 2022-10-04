const { application } = require('express');
const express = require('express');

const router = express.Router();

// For demo
// router.use((req, res, next) => {
//   if (req.url.startsWith('/people')) {
//     next()
//   } else {
//     const err = new Error('Not authorized')
//     next(err)
//   }
// })

// /people/
router.get("/", (req, res) => {
  res.json("Number 1");
});

router.post("/:personId/likes", (req, res) => {
  res.json("Number 2");
});

router.delete("/:personId", (req, res) => {
  res.json("Number 3");
});

router.get("/best-dressed/comments", (req, res) => {
  res.json("Number 4");
});

router.get("/people/:name/lookup", (req, res) => {
  res.json("Number 5");
});

module.exports = router;