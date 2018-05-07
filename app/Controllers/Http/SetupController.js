'use strict'
const Env = use('Env')
const User = use('App/Models/User')
const UserFriend = use('App/Models/UserFriend')

class SetupController {

  setup ({ request, response }) {

    var data = JSON.parse(require('fs').readFileSync('./database/data/data.json', 'utf8'))
    var users = []

    for (var x in data) {
      const user = new User()
      user.id = data[x].id
      user.first_name = data[x].firstName
      user.surname = data[x].surname
      user.age = data[x].age
      user.gender = data[x].gender

      for (var y in data[x].friends) {
        const userFriend = new UserFriend()
        userFriend.user_id = data[x].id
        userFriend.friend_id = data[x].friends[y]
        userFriend.save()
      }

      user.save()
    }

    response.send('Setup Database')
  }

}

module.exports = SetupController
