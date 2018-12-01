import Chance from 'chance'
const chance = new Chance()

export default class Registry {
  constructor (props) {
    this.id = chance.guid()
    this.dateCreated = new Date()
    this.balance = props.balance || 0 // Number
    this.transactions = props.transactions || [] // [Transaction]
  }
}
