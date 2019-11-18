const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

//Get groups
router.get('/', async (req,res)=>{
    try {
        const groups = await loadGroupsCollection();
        res.send(await groups.find({}).toArray());
    } catch (error) {
        console.log(error);
    }
    
});

//add group
router.post('/', async (req,res)=>{
    try {
        const groups = await loadGroupsCollection();
        await groups.insertOne({
        direction: req.body.direction,
        type: req.body.type,
        course: req.body.course
    });
    res.status(201).send();
    } catch (error) {
        console.log(error);
    }
    
})
//del group
router.delete('/:id', async(req,res) => {
    try {
        const groups = await loadGroupsCollection();
        await groups.deleteOne({_id: new mongodb.ObjectID( req.params.id)});
        res.status(200).send();
    } catch (error) {
        console.log(error);        
    }
  
})
//update group
//router.groups.update()

async function loadGroupsCollection() {
    const client = await mongodb.MongoClient.connect ('mongodb+srv://1234:1234@vue-spa-k3gqe.mongodb.net',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return client.db('vue-spa').collection('groups')
}

module.exports = router;