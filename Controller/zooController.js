import {Animal} from "./models/animal.js";

const tempAnimal = [
  new Animal('Alligator', 'male' ,'green', 200, 'large', 7 ),
  new Animal('Bear', 'male' ,'brown', 400, 'large', 9 ),
  new Animal('Cheetah', 'female' ,'blonde', 120, 'large', 10 ),
  new Animal('Dingo', 'male' ,'brown', 60, 'medium', 6 ),
  new Animal('Eagle', 'male' ,'Red,Blue, And White', 28, 'Beak', 100 ),
  new Animal('Ferret', 'male' ,'brown', 15, 'small', 2 ),
  new Animal('Groundhog', 'female' ,'brown', 10, 'small', 2 ),
  new Animal('Falcon', 'male' ,'black', 10, 'beak', 10 ),
  new Animal('Goat', 'female' ,'white', 80, 'small', 2 ),
  new Animal('Hawk', 'female' ,'red', 12, 'beak', 9),
  new Animal('Iguana', 'male' ,'green', 5, 'small', 8 ),
  new Animal('Jaguar', 'female' ,'golden', 145, 'large', 7 ),
  new Animal('Kangaroo', 'male' ,'blonde', 12, 'small', 10 ),
  new Animal('Lion', 'female' ,'orange', 345, 'large', 9 ),
  new Animal('Mammoth', 'male' ,'brown', 1550, 'medium', 7 ),
  new Animal('Nighthawk', 'male' ,'black', 5, 'beak', 3 ),
  new Animal('Otter', 'male' ,'black', 15, 'large', 7 ),
  new Animal('Panda', 'female' ,'black and white', 500, 'large', 10 ),
  new Animal('Quail', 'female' ,'white', 6, 'beak', 1 ),
  new Animal('Rabbit', 'male' ,'white', 12, 'small', 9 ),
  new Animal('Scorpion', 'male' ,'red', 12, 'large', 7 ),
  new Animal('Turtle', 'female' ,'green', 100, 'small', 8 ),
  new Animal('Urchin', 'male' ,'red', 2, 'large', 1 ),
  new Animal('Viper', 'male' ,'green', 35, 'large', 9 ),
  new Animal('Wolf', 'female' ,'black', 90, 'large', 8 ),
  new Animal('Xerus', 'male' ,'brown', 5, 'large', 2 ),
  new Animal('Yak', 'female' ,'brown', 750, 'large', 3 ),
  new Animal('Zebra', 'male' ,'black and white', 200, 'large', 9),
]

function drawAnimals(){
  let template = ''
  tempAnimal.forEach(A => template += A.printListItem())
  document.getElementById('animalList').innerHTML = template
}

export class ZooController {
  constructor(){
    _drawAnimals()  
  }
}



drawAnimals()