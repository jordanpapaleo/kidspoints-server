import Chance from 'chance'
const chance = new Chance()

// just a group of users
export default class Family {
  constructor (props) {
    this.id = chance.guid()
    this.dateCreated = new Date()
    this.name = props.name
    this.members = props.members || [] // [member.id]
  }
}
