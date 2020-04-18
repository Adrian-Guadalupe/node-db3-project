const db = require('../data/db-config.js')

const find = () => {
   return db('schemes')
}

const findById = (id) => {
   return db('schemes')
      .where({ id })
      .first()
}

const findSteps = (id) => {
   return db('steps')
      .where({ id })
}

const add = (scheme) => {
   return db('schemes')
      .insert(scheme, 'id')
}

const update = (changes, id) => {
   return db('schemes')
      .where({ id })
      .update(changes)
}

const remove = (id) => {
   return db('schemes')
      .where({ id })
      .del()
}

module.exports = {
   find,
   findById,
   findSteps,
   add,
   update,
   remove
}