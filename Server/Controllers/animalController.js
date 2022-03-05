 
const animals = require('../Models/animalModel');

const GetAllAnimals = async (request,response)=>{
    await animals.find()
    .then((result) => response.send(result))
    .catch((err)=> response.status(404).json({err}))
};

const GetById = async (request,response)=>{
    await animals.findById({_id:request.params.id})
    .then((data)=> response.send(data))
    .catch((err)=> response.send({massege:err}))
}

const AddAnimal = async (request,response)=>{
    await animals.create(request.body)
    .then((data)=> response.send(data))
    .catch((err)=> response.send({massege:err}))
}

const EditAnimal = async (request,response)=>{
    await findByIdAndUpdate({_id:request.params.id},request.body)
    .then((data)=> response.send(data))
    .catch((err)=> request.send({massege:err}))
}

const DeleteAnimal = async (request,response)=>{
    await findByIdAndRemove({_id:request.params.id})
    .then(()=> response.send({massege:"succses"}))
    .catch((err)=> response.send({message:err}))
}

module.exports = {GetAllAnimals, GetById, AddAnimal, EditAnimal, DeleteAnimal};