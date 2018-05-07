'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', table => {
      table.integer('id', 11)
      table.string('first_name', 64)
      table.string('surname', 64)
      table.integer('age', 8)
      table.string('gender', 16)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
