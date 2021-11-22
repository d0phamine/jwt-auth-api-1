'use strict'

const Route = use('Route')
const axios = use("axios")
const got = use("got")

Route.post('upload', async ({ request, response }) => {
  let filedata = request.files('filedata');

  // console.log(filedata)
  try {
    if (!filedata) {
      response.send("Ошибка при загрузке файла");
    } else {
      var data = await axios.post('http://127.0.0.1:5000/exif', {
        body: filedata,
      }).then(result => response.send(JSON.parse((result.data + "").replace(/'(.+?)'/g, '"$1"').replace(/(\d+?): /g, '"a$1": ').replace(/\(([0-9., ]+)\)/g, '[$1]').replace(/: b' ', /g, ': "aaaaaaaaaaa", ').replace(/b".+?"/g, '"no Data"'))));

      //  var data = await got.post('http://127.0.0.1:5000/exif',{
      //     json: {body: filedata},
      //   }).then(res => response.send(
      //         JSON.parse((res.body).replace(/'(.+?)'/g, '"$1"')
      //           .replace(/(\d+?): /g, '"a$1": ')
      //           .replace(/\(([0-9., ]+)\)/g, '[$1]')
      //           .replace(/: b' ', /g, ': "aaaaaaaaaaa", ')
      //           .replace(/b".+?"/g, '"no Data"')
      //         )
      //       ))
    }
  }
  catch (e) {
    console.log(e)
  }
})

Route.post('textan', async ({ request, response }) => {
  let textan = request.body;
  // console.log(textan)
  try {
    if (!textan) {
      response.send("Error text")
    } else {
      var textToAnalyse = await axios.post('http://127.0.0.1:5001/textan', {
        body: textan,
      }).then(result => response.send(result.data))
    }
  }
  catch (e) {
    console.log(e)
  }
})

Route.group(() => {
  // Route.post('exifPhotoUpload', 'ServiceRequests/ServiceRequestsController.exifPhotoUpload')
  Route.post('login', 'Auth/AuthenticationController.login')
  Route.post('register', 'Auth/AuthenticationController.register')
  Route.get('me', 'Auth/AuthenticationController.me').middleware(['auth'])
}).prefix('api')
