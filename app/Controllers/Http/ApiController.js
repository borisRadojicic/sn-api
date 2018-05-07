'use strict'
const User = use('App/Models/User')
const UserFriend = use('App/Models/UserFriend')
const Database = use('Database')

class ApiController {

    users ({ request, response, params }) {
      const query = Database.table('users')

      return query
    }

    friends ({ request, response, params }) {
      const userId = params.userId

      const query = Database.table('users')
        .innerJoin('user_friends', 'users.id', 'user_friends.friend_id')
        .where('user_friends.user_id', userId)

      return query
    }

    friendsOfFriends ({ request, response, params }) {
      const userId = params.userId

      const subquery = Database.table('users')
        .innerJoin('user_friends', 'users.id', 'user_friends.friend_id')
        .where('user_friends.user_id', userId)
        .select('users.id')

      const query = Database.table('users')
        
        .innerJoin('user_friends', 'users.id', 'user_friends.friend_id')
        .whereIn('user_friends.user_id', subquery)
        .whereNot('user_friends.friend_id', userId)
        .distinct('user_friends.friend_id')
        .select('users.id')
        .select('users.first_name')
        .select('users.surname')

      return query
    }

    suggestedFriends ({ request, response, params }) {
      const userId = params.userId

      const subquery = Database.table('users')
        .innerJoin('user_friends', 'users.id', 'user_friends.friend_id')
        .where('user_friends.user_id', userId)
        .select('users.id')

      const suggestedIdQuery = Database.table('users')
        .select('users.id')
        .innerJoin('user_friends', 'users.id', 'user_friends.friend_id')
        .whereIn('user_friends.user_id', subquery)
        .whereNot('user_friends.friend_id', userId)
        .groupBy('users.id')
        .havingRaw('count(*) > ?', [1])

      const query = Database.table('users')
        .whereIn('users.id', suggestedIdQuery)

      return query
    }

}

module.exports = ApiController