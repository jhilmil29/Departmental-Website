const mongoose   = require('mongoose');

//Requiring DB Models
const Faculty = require('./models/faculty');

//DB Configurations
mongoose.connect('mongodb://localhost:27017/deptWebApp')
    .then(() => {
        console.log("Connected to 'deptWebApp' DB!")
    })
    .catch(err => {
        console.log("Connection to DB failed!")
        console.log(err)
    })


const seedData = [
    {
        uid: 'muj00001',
        suffix: 'Mrs.',
        fName: 'ABC01',
        lName: 'XYZ01',
        post: 'Associate Professor',
        email: 'abc_xyz01@muj.edu',
        phone: 8978455631,
        workStn: 'AB1 3F 018'
    },
    {
        uid: 'muj00002',
        suffix: 'Dr.',
        fName: 'ABC02',
        lName: 'XYZ02',
        post: 'Assistant Professor',
        email: 'abc_xyz02@muj.edu',
        phone: 7412589635,
        workStn: 'AB1 3F 002'
    },
    {
        uid: 'muj00003',
        suffix: 'Mr.',
        fName: 'ABC03',
        lName: 'XYZ03',
        post: 'Associate Professor',
        email: 'abc_xyz03@muj.edu',
        phone: 8956231245,
        workStn: 'AB1 3F 008'
    },
    {
        uid: 'muj00004',
        suffix: 'Mrs.',
        fName: 'ABC04',
        lName: 'XYZ04',
        post: 'Associate Professor',
        email: 'abc_xyz04@muj.edu',
        phone: 8954786512,
        workStn: 'AB1 3F 022'
    },
    {
        uid: 'muj00005',
        suffix: 'Ms.',
        fName: 'ABC05',
        lName: 'XYZ05',
        post: 'Associate Professor',
        email: 'abc_xyz05@muj.edu',
        phone: 8754568925,
        workStn: 'AB1 3F 015'
    },
    {
        uid: 'muj00006',
        suffix: 'Mr.',
        fName: 'ABC06',
        lName: 'XYZ06',
        post: 'Associate Professor',
        email: 'abc_xyz06@muj.edu',
        phone: 6698547125,
        workStn: 'AB1 3F 010'
    }
]

const seedDB = async () => {
    await Faculty.deleteMany({})
    Faculty.insertMany(seedData)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

seedDB();