const { ObjectId } = require("mongodb")
const client = require("../db/connect")

async function getAll(req, res){
    const result = await client.db("test").collection("contacts").find().toArray()
    res.json(result)
}

async function getSingle(req, res){
    const id = req.params.id
    const obj = new ObjectId(id)
    const result = await client.db("test").collection("contacts").findOne({_id: obj})
    res.json(result)
}

module.exports = {
    getAll,
    getSingle
}