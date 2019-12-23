const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get students
router.get('/', async (req,res)=>{
    try {
        const students = await loadStudentsCollection();
        res.send(await students.find({}).toArray());
    } catch (error) {
        console.log(error);
    }
    
});

//add group
router.post('/', async (req,res)=>{
    try {
        const students = await loadStudentsCollection();
        await students.insertOne({
        name: req.body.name,
        avg: req.body.avg,
        typest: req.body.typest,
        age: req.body.age,
        academ: req.body.academ,
        group: req.body.group

    });
    res.status(201).send();
    } catch (error) {
        console.log(error);
    }
    
})
//del group
router.delete('/:id', async(req,res) => {
    try {
        const students = await loadStudentsCollection();

        let result = await students.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
        res.status(200).send();
        console.log(result);

    } catch (error) {
        console.log(error);        
    }
  
})
//update group
router.put('/:id', async(req,res)=>{
    try {
        const students = await loadStudentsCollection();
        console.log(req.params.id);
        await students.updateOne({_id:new mongodb.ObjectId(req.params.id)},
        {$set: {
            "name": req.body.name,
            "avg": req.body.avg,
            "typest": req.body.typest,
            "age": req.body.age,
            "academ": req.body.academ,
            "group": req.body.group
            }})
            res.status(200).send();

    } catch (error) {
        console.log(error);        
    }
})

async function loadStudentsCollection() {
    // const client = await mongodb.MongoClient.connect ('mongodb+srv://1234:1234@vue-spa-k3gqe.mongodb.net',
    // {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // })
    const client = await mongodb.MongoClient.connect('mongodb://localhost:27017',
    {
         useNewUrlParser: true,
         useUnifiedTopology: true
    })
    //return client.db('vue-spa').collection('students')
    return client.db('studs').collection('students')
}

module.exports = router;