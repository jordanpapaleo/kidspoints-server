import Chance from 'chance'
const chance = new Chance()

export default class Member {
  constructor (props) {
    this.id = chance.guid()
    this.dateCreated = new Date()
    this.password = props.password
    this.restricted = false
    this.families = []
    this.profile = {
      firstName: props.firstName,
      lastName: props.lastName,
      email: props.email,
      dob: props.dob
    }
    this.registry = props.registry
  }
}

