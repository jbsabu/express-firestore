import { credentials } from "./credentials.js";
import express, { json } from 'express';
import cors from 'cors';
import { addNewAnimal,getAllAnimals  } from "./src/animals.js";
const PORT = 3747

const functions = {
  '/animals' : {
 //  get:  app.get('/animals',getNewAnimal),
   post: addNewAnimal
  }
}



const app = express()
app.use(cors()) // This tells express that our POSTS will be JSON
app.use(express.json())


// function test (){
//   const key0 = Object.keys(functions)
//   key0.forEach((element)=>{
//     console.log("????")
//     if (typeof(functions[element])==="object"){
//       const key1 = Object.keys(functions[element])
//       console.log(key1)
//       key1.forEach((elem)=>{
//         console.log(elem,element)
//         app[elem](element[elem])

//       })
//     }
//   })
// }
// test()

app.post('/animals',addNewAnimal)
app.get('/animals',getAllAnimals)

app.listen(PORT,()=>{
  console.log(`Listening on http://localhost:${PORT}...`)
})