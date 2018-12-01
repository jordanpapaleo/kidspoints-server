import Family from '../models/Family'
import Member from '../models/Member'
import Registry from '../models/Registry'
import Transaction from '../models/Transaction'

import Chance from 'chance'
const chance = new Chance()

export default function generateMockData () {
  const me = makeMember()
  me.registry = makeRegistry()
  const families = new Array(2)
    .fill('')
    .map(() => makeFamily(me.id))

  me.families = families.map(family => family.id)

  return {me, families}
}

function makeMember () {
  return new Member({
    firstName: chance.first(),
    lastName: chance.last(),
    email: chance.email(),
    dob: chance.birthday()
  })
}

function makeFamily (memberId) {
  return new Family({
    name: chance.last(),
    members: [memberId]
  })
}

function makeRegistry () {
  return new Registry({
    balance: 1000,
    transactions: new Array(10)
      .fill('')
      .map(() => makeTransaction())
  })
}

function makeTransaction () {
  return new Transaction({
    amount: chance.integer({min: -20, max: 20}),
    description: chance.sentence({ words: 5 })
  })
}
