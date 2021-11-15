'use strict'

class ServiceRequestsController {
    async exifPhotoUpload({ request, response }) {
        const filedata = request.file;
        console.log(filedata);
        if (!filedata)
            response.send("Ошибка при загрузке файла");
        else
            await filedata.move(Application.tmpPath('uploads'))
            // res.send("Файл загружен");
            // var exif = await sendImageToGroupMe(req, res, filedata);
            // console.log("exif");
        // console.log(exif);
        // res.send(exif)
        request('http://127.0.0.1:5000/exif', {
            body: filedata,
        }).then(result => response.send(JSON.parse((result.data + "").replace(/'(.+?)'/g, '"$1"').replace(/(\d+?): /g, '"a$1": ').replace(/\(([0-9., ]+)\)/g, '[$1]').replace(/: b' ', /g, ': "aaaaaaaaaaa", ').replace(/b".+?"/g, '"no Data"'))));
        // res.send(exif)
    }
}

module.exports = ServiceRequestsController