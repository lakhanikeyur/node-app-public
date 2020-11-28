const axios = require('axios')
require('dotenv').config();

let hostname = process.env.HOSTNAME || 'localhost'
let port = process.env.PORT || 3000

describe('Checking Endpoint and Returned JSON',()=>{
    it(`Testing the server running & returning object as expected on ${hostname}:${port}`,async()=>{
        const result = await axios.get(`http://${hostname}:${port}/version`)
        expect(result.status).toEqual(200)
        expect(result.data).toMatchObject({
            "myapplication":{}
        })
    })
})