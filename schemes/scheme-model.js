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
   return db('schemes as s')
      .join('steps as st', 's.id', 'st.scheme_id')
      .select('s.scheme_name as SchemeName', 'st.step_number as StepNumber', 'st.instructions')
      .where({ 's.id': id })
      .orderBy('step_number');
}

const add = (scheme) => {
   return db('schemes')
      .insert(scheme, 'id')
}

// const addStep = (step, id) => {
//    const newStep = {
//       ...step,
//       'scheme_id': id
//    }

//    return db('steps')
//       .insert(newStep, 'id')
//       .then(id => {
//          return db('steps')
//             .where({ id: id[0] })
//       })
// }

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
   // addStep,
   update,
   remove
}