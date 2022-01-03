export class Animal  {
  constructor( name, color, gender, weight, tailLengthInch, teethSize) {
      this.name = name
      this.color = color
      this.gender = gender
      this.weight = weight
      this.teethSize = teethSize
      this.coolFactor = coolFactor
  }
  printListItem() {
   return '<li> ${this.name}":"${this.color} </li>'
  }


  }


