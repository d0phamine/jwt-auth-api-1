'use strict'

const Services = use("App/Models/Services");

class ServiceController {
    async index({response}){
        // const services = [
        //     {
        //         serviceName: 'exif',
        //         serviceIp: 'http://127.0.0.1:5000',
        //         serviceData: '',
        //         serviceLastUsage: '',
        //         serviceAllUsage: '0',
        //     },
        //     {
        //         serviceName: 'textan',
        //         serviceIp: 'http://127.0.0.1:5001',
        //         serviceData: '',
        //         serviceLastUsage: '',
        //         serviceAllUsage: '0',
        //     }
        // ]
        // console.log(await Services.first())
        const services = await Services.all()
        console.log(services)
        const servicesJson = services.rows.map((service) => service.toJSON())
        return await response.status(200).json({
            success: true,
            data: servicesJson
            // count: services.length,
            // data: services
        })
    }
}

module.exports = ServiceController
