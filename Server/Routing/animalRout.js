const animalRout = require('express').Router();
const animalController = require('../Controllers/animalController');

animalRout.get('/',animalController.GetAllAnimals)

animalRout.get('/:id',animalController.GetById)

animalRout.post('/',animalController.AddAnimal)

animalRout.put('/:id',animalController.EditAnimal)

animalRout.delete('/:id',animalController.DeleteAnimal)

module.exports = animalRout;