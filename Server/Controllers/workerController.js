 
const workers = require('../Models/workerModel');

const GetAllWorkers = async (request,response)=>{
    await workers.find()
    .then((result) => response.send(result))
    .catch((err)=> response.status(404).json({err}))
};

const GetById = async (request,response)=>{
    await workers.findById({_id:request.params.id})
    .then((data)=> response.send(data))
    .catch((err)=> response.send({massege:err}))
}

const AddWorker = async (request,response)=>{
    await workers.create(request.body)
    .then((data)=> response.send(data))
    .catch((err)=> response.send({massege:err}))
}

const EditWorker = async (request,response)=>{
    await findByIdAndUpdate({_id:request.params.id},request.body)
    .then((data)=> response.send(data))
    .catch((err)=> request.send({massege:err}))
}

const DeleteWorker = async (request,response)=>{
    await findByIdAndRemove({_id:request.params.id})
    .then(()=> response.send({massege:"succses"}))
    .catch((err)=> response.send({message:err}))
}

module.exports = {GetAllWorkers, GetById, AddWorker, EditWorker, DeleteWorker};