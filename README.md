# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.

### Steps

- file .env.example sould be renamed into .env and all database parameters
  should be set according to local database settings
  
- the following command should be executed in mySql: create database sn_api;

- in bash or command prompt in root project directory, the following 
  commands should be executed:
  - npm install 
  - npm i -g @adonisjs/cli
  - adonis migration:run
  - adonis serve --dev
