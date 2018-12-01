import Chance from 'chance'
const chance = new Chance()

export default class Transaction {
  constructor (props) {
    this.id = chance.guid()
    this.dateCreated = new Date()
    this.amount = props.amount // Number
    this.description = props.description // String
  }
}
