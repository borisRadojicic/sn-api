'use strict'

const Schema = use('Schema')

class UserFriendSchema extends Schema {
  up () {
    this.create('user_friends', (table) => {
      table.increments()
      table.integer('user_id', 11).notNullable()
      table.integer('friend_id', 11).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('user_friends')
  }
}

module.exports = UserFriendSchema
