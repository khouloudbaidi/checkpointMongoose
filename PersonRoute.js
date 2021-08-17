const express = require("express");
const router = express.Router();

//  Post one person 
router.post("/", async (req, res) => {
    try {
        const { name, age, favoriteFoods } = req.body;
        const Person = new PersonModel({ name, age, favoriteFoods });
        await Person.save();
        res.status(200).send({ msg: "New Person is added", Person });
    } catch (error) {
        res.status(500).send({ msg: "Person is not added", error });
    }
});

// Get one person
router.get("/PersonId/:Id", async (req, res) => {
    try {
        const { Id } = req.params;
        const Person = await PersonModel.findById(Id);
        res.status(200).send({ msg: `Person with ID = ${Id}`, Person });
    } catch (error) {
        res.status(500).send({
            msg: "ther are not any Person with this ID",
            error,
        });
    }
});

// Post many persons
router.post("/ManyRecords", async (req, res) => {
    try {
        const Persons = req.body;
        await PersonModel.create(Persons);
        res.status(200).send({ msg: "New Persons are added", Persons });
    } catch (error) {
        res.status(500).send({ msg: "Persons are not added", error });
    }
});

// Get all persons 
router.get("/", async (req, res) => {
    try {
        const Persons = await PersonModel.find();
        res.status(200).send({ msg: "Any Persons are finded", Persons });
    } catch (error) {
        res.status(500).send({ msg: "Any Persons are finded", error });
    }
});

// Delet Person 
router.delete("/:Id", async (req, res) => {
    try {
        const { Id } = req.params;
        const Person = await PersonModel.findOneAndDelete(Id);
        res.status(200).send({ msg: "person deleted", Person });
    } catch (error) {
        res.status(500).send({ msg: "person is not deleted", error });
    }
});

// Remove Person ------------------------------
router.delete("/personRemove/:Name", async (req, res) => {
    try {
        const { Name } = req.params;
        const Persons = await PersonModel.remove({ name: Name });
        res.status(200).send({ msg: "persons removed", Persons });
    } catch (error) {
        res.status(200).send({ msg: "persons are not removed", error });
    }
});

module.exports = router;
