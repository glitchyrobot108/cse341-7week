const express = require("express")
const router = express.Router()
const contacts = require("../controllers/contacts")

//Get contacts
router.get("/", contacts.getAll)

//Get contact
router.get("/:id", contacts.getSingle)

module.exports = router