const workerRout = require('express').Router();
const workerController = require('../Controllers/workerController');

workerRout.get('/',workerController.GetAllWorkers)

workerRout.get('/:id',workerController.GetById)

workerRout.post('/',workerController.AddWorker)

workerRout.put('/:id',workerController.EditWorker)

workerRout.delete('/:id',workerController.DeleteWorker)

module.exports = workerRout;