'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/').render('index')

Route.get('/setup-database', 'SetupController.setup')

Route
  .group(() => {
    Route.get('users', 'ApiController.users')
    Route.get('friends/:userId', 'ApiController.friends')
    Route.get('friends-of-friends/:userId', 'ApiController.friendsOfFriends')
    Route.get('suggested-friends/:userId', 'ApiController.suggestedFriends')
  })
  .prefix('api/v1')