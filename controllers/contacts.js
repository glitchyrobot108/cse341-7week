const { ObjectId } = require("mongodb")
const client = require("../db/connect")
const json = require("json")

async function getAll(req, res){
    const result = await client.db("test").collection("contacts").find().toArray()
    res.json(result)
}

async function getSingle(req, res){
    const id = req.params.id
    const id_obj = new ObjectId(id)
    const result = await client.db("test").collection("contacts").findOne({_id: id_obj})
    res.json(result)
}

async function createSingle(req, res){
    const contact = req.body
    const result = await client.db("test").collection("contacts").insertOne(contact)
    res.send("ID of created contact: " + contact._id)
}

async function updateSingle(req, res){
    const id = req.params.id
    const id_obj = new ObjectId(id)
    const updated_contact = {
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthday: req.body.birthday
        }
    }
    const result = await client.db("test").collection("contacts").updateOne({_id: id_obj}, updated_contact)
    res.status(200).send("Updated contact: " + id + "\n" + JSON.stringify(result))
}

async function deleteSingle(req, res){
    const id = req.params.id
    const id_obj = new ObjectId(id)
    const result = await client.db("test").collection("contacts").deleteOne({_id: id_obj})
    res.status(200).json(result)
}

module.exports = {
    getAll,
    getSingle,
    createSingle,
    updateSingle,
    deleteSingle
}