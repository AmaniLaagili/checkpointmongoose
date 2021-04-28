const express = require("express");
const { deleteOne } = require("../models/PersonneOne");
const router = express.Router();
const PersonneOne = require("../models/PersonneOne");
/*router.get('/test',(req,res)=>{
    res.send("this is test")
})*/
//create api avec mongoose
//create personne
/*const newPerson = new PersonneOne({
    name: "Lajili",
    age: 20,
    favoriteFoods: ["makrouna", "slata"],
});

newPerson.save((err) => {
    if (err) console.log(err);
});*/
//create plusieur personne
// PersonneOne.create([
//     {
//         name: "Haroune",
//         age: 23,
//         favoriteFoods: ["makrouna", "ojja marguez", "burritos"],
//     },
//     { name: "johne", age: 25, favoriteFoods: ["mlo5ia", "slata", "burritos"] },
//     {
//         name: "julioe",
//         age: 20,
//         favoriteFoods: ["omok houria", "lasagnes", "burritos"],
//     },

//     { name: "Mary", age: 22, favoriteFoods: ["mmmm", "lkkk"] },
//     { name: "Mary", age: 23, favoriteFoods: ["mmmm", "lkkk"] },
//     { name: "Mary", age: 24, favoriteFoods: ["mmmm", "lkkk"] },
//     { name: "Mary", age: 25, favoriteFoods: ["mmmm", "lkkk"] },

//     {
//         name: "roua",
//         prenon: "rawa",
//         age: 20,
//         favoriteFoods: ["omok houria", "lasagnes"],
//     },
//     {
//         name: "ibtissem",
//         prenon: "basouma",
//         age: 20,
//         favoriteFoods: ["omok houria", "lasagnes"],
//     },
// ]);
// utilisez modele.find()
//PersonneOne.find({ prenon: { $exists: true } }).then((doc) => console.log(doc));
//utilisez model.findOne ()
//PersonneOne.findOne({ favoriteFoods: "mlo5ia" }).then((doc) =>
//   console.log(doc)
//);
//utilisez model.findById ()
// PersonneOne.findById("60858e14d16d532364e6bf34").then((doc) =>
//     console.log(doc)
// );
//update
//PersonneOne.findOneAndUpdate(
//   { name: "john" },
//   { $set: { name: "amal" } }
//).then((doc) => console.log(doc));
//delete
//PersonneOne.findByIdAndRemove({ _id: "60858e14d16d532364e6bf36" }).then((doc) =>
//   console.log(doc)
//);
//delete tt le personne avec nom Mary
//PersonneOne.deleteMany({ name: "Mary" }).then((doc) => console.log(doc));
//Perform Classic Updates by Running Find, Edit, then Save
// PersonneOne.findById("60858aba1edec82cd835a143")
//     .then((user) => {
//         user.favoriteFoods.push("humberger");
//         user.save();
//     })
//     .catch((err) => console.log(err));

// PersonneOne.find({ favoriteFoods: "burritos" })
//     .sort({ name: "asc" })
//     .limit(2)
//     .select({ age: 0 })
//     .exec()
//     .then((doc) => console.log(doc));

//create api avec router
{
    /*router.post("/", async (req, res) => {
    try {
        const { name, favoriteFoods, age, prenom } = req.body;

        // if (!name || !favoriteFoods) {
        //     return res.status(400).send("name and favoriteFoods are required");
        // }
        const personne = new Personne({ name, favoriteFoods, age, prenom });
        await personne.save();
        //    console.log(personne)
        res.status(200).send({ msg: "contact added", personne });
    } catch (error) {
        console.log(error);
        res.status(500).send("impossible to add contact");
    }
});
router.get("/", async (req, res) => {
    try {
        const personne = await Personne.find();
        res.status(200).send({ msg: "all personne", personne });
    } catch (error) {
        res.status(500).send("impossible to get personne");
    }
});

router.get("/name", async (req, res) => {
    try {
        const personne = await Personne.find({ name: { $exists: true } });
        res.status(200).send({ msg: "all personne", personne });
    } catch (error) {
        res.status(500).send("impossible to get personne");
    }
});
router.get("/personneparID/:Id", async (req, res) => {
    try {
        const id = req.params.Id;
        const personne = await Personne.findOne({ _id: id });
        res.status(200).send({ msg: "all personne", personne });
    } catch (error) {
        res.status(500).send("impossible to get personne");
    }
});
router.get("/:personId", async (req, res) => {
    try {
        const id = req.params.personId;
        const personne = await Personne.findById(id);
        res.status(200).send({ msg: "selected personnef", personne });
    } catch (error) {
        res.status(500).send("impossible to get personne");
    }
});

router.put("/:personName", async (req, res) => {
    try {
        const name = req.params.personName;
        const personne = await Personne.findOneAndUpdate(
            { name: name },
            { $set: { ...req.body } }
        );
        res.status(200).send({ msg: "personne edited", personne });
    } catch (error) {
        res.status(500).send("impossible to put personne");
    }
});
router.delete("/:personId", async (req, res) => {
    console.log(req.params);
    try {
        const id = req.params.personId;
        await Personne.findByIdAndRemove(id, (error, deletedRecord) => {
            if (error) {
                console.log(error);
            } else {
                console.log("deleted object:", deletedRecord);
            }
        });
        res.status(200).send("user deleted");
    } catch (error) {
        res.status(500).send("impossible to deleted personne");
    }
});
router.delete("/", async (req, res) => {
    try {
        await Personne.deleteMany({ name: "amani" });
        res.status(200).send({ msg: "personne deleted" });
    } catch (error) {
        console.log(error);
        res.status(500).send("impossible to deleted personne");
    }
});*/
}
module.exports = router;
