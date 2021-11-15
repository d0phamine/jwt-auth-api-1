'use strict'

// async function sendImageToGroupMe(req, res, filedata) {

//   // const options = {
//   //     url: "http://127.0.0.1:5000/exif",
//   //     body: filedata,
//   //     method: "POST",
//   //     headers : {
//   //       "content-type": "application/json",
//   //   },
//   //     json: true
//   // }
//   // var content ="000000000"
//   // request(options, (err, response, body) => {
//   //     console.log("Request complete: Response: ",body);
//   //     content = body
//   // });
//   // return content
  
//   return await axios.post('http://127.0.0.1:5000/exif',{
//     body: filedata,
//   })
// }

/*
|--------------------------------------------------------------------------
| Providers
|--------------------------------------------------------------------------
|
| Providers are building blocks for your Adonis app. Anytime you install
| a new Adonis specific package, chances are you will register the
| provider here.
|
*/
const providers = [
  '@adonisjs/framework/providers/AppProvider',
  '@adonisjs/auth/providers/AuthProvider',
  '@adonisjs/bodyparser/providers/BodyParserProvider',
  '@adonisjs/cors/providers/CorsProvider',
  '@adonisjs/lucid/providers/LucidProvider'
]

/*
|--------------------------------------------------------------------------
| Ace Providers
|--------------------------------------------------------------------------
|
| Ace providers are required only when running ace commands. For example
| Providers for migrations, tests etc.
|
*/
const aceProviders = [
  '@adonisjs/lucid/providers/MigrationsProvider'
]

/*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
|
| Aliases are short unique names for IoC container bindings. You are free
| to create your own aliases.
|
| For example:
|   { Route: 'Adonis/Src/Route' }
|
*/
const aliases = {}

/*
|--------------------------------------------------------------------------
| Commands
|--------------------------------------------------------------------------
|
| Here you store ace commands for your package
|
*/
const commands = []

module.exports = { providers, aceProviders, aliases, commands }

