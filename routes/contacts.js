const express = require("express")
const router = express.Router()
const contacts = require("../controllers/contacts")

//Get contacts
router.get("/", contacts.getAll)

//Get contact
router.get("/:id", contacts.getSingle)

//Create contact
router.post("/", contacts.createSingle)

//Update contact
router.put("/:id", contacts.updateSingle)

//Delete contact
router.delete("/:id", contacts.deleteSingle)

module.exports = router