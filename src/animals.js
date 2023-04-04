import { db } from "./dbConnect.js";

export const addNewAnimal = (req, res) => {
  const newAnimal = req.body;
  db.collection("animals")
    .add(newAnimal)
    .then((doc) => res.status(201).send("New animal Added: " + doc.id))
    .catch((err) => res.status(500).send(err));
  };
  
  export async function getAllAnimals(req, res) {
    const collection = await db.collection("animals").get();
    const animalList = collection.docs.map(animal => animal.data()); // only data
    // const animalList = collection.docs.map(animal => ({...animal.data(), id:animal.id})); // data and ID
    res.send(animalList)
    .catch((err) => res.status(500).send(err));
}
