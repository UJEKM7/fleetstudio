const express = require('express');
const router = express();

const { gitIdController, gitCommitController } = require("../controllers/gitController")


//Get commit by ID
router.get("/repos/:owner/:repository/commits/:oid", gitIdController);

//Get commit diff
router.get("/repos/:owner/:repository/commits/:base/:head/diff", gitCommitController)

module.exports = router;