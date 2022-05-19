const mongoose   = require('mongoose');

//Requiring DB Models
const Faculty = require('./models/faculty');
const Course = require('./models/course');

//DB Configurations
mongoose.connect('mongodb://localhost:27017/deptWebApp')
    .then(() => {
        console.log("Connected to 'deptWebApp' DB!")
    })
    .catch(err => {
        console.log("Connection to DB failed!")
        console.log(err)
    })


const fData = [
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

const cData = [
    {
        cid: 'CC1101',
        cname: 'XYZ1',
        credits: 3,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'I',
        category: 'subject'
    },
    {
        cid: 'CC1201',
        cname: 'XYZ2',
        credits: 3,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'II',
        category: 'subject'
    },
    {
        cid: 'CC2101',
        cname: 'XYZ3',
        credits: 4,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'III',
        category: 'subject'
    },
    {
        cid: 'CC2201',
        cname: 'XYZ4',
        credits: 4,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'IV',
        category: 'subject'
    },
    {
        cid: 'CC2120',
        cname: '1XYZ',
        credits: 1,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'III',
        category: 'lab'
    },
    {
        cid: 'CC2220',
        cname: '2XYZ',
        credits: 1,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'IV',
        category: 'lab'
    },
    {
        cid: 'CC3132',
        cname: '3XYZ',
        credits: 1,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'V',
        category: 'lab'
    },
    {
        cid: 'CC3140',
        cname: '1 1 XYZ',
        credits: 4,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'V',
        category: 'pe'
    },
    {
        cid: 'CC3240',
        cname: '1 2 XYZ',
        credits: 4,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'VI',
        category: 'pe'
    },
    {
        cid: 'CC4140',
        cname: '1 3 XYZ',
        credits: 4,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'VII',
        category: 'pe'
    },
    {
        cid: 'CC4141',
        cname: '1 4 XYZ1',
        credits: 4,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'VII',
        category: 'pe'
    },
    {
        cid: 'CC3141',
        cname: '2 1 XYZ',
        credits: 4,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'V',
        category: 'pe'
    },
    {
        cid: 'CC3241',
        cname: '2 2 XYZ',
        credits: 4,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'VI',
        category: 'pe'
    },
    {
        cid: 'CC4142',
        cname: '2 3 XYZ',
        credits: 4,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'VII',
        category: 'pe'
    },
    {
        cid: 'CC4143',
        cname: '2 4 XYZ1',
        credits: 4,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'VII',
        category: 'pe'
    },
    {
        cid: 'CC3142',
        cname: '3 1 XYZ',
        credits: 4,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'V',
        category: 'pe'
    },
    {
        cid: 'CC3242',
        cname: '3 2 XYZ',
        credits: 4,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'VI',
        category: 'pe'
    },
    {
        cid: 'CC4144',
        cname: '3 3 XYZ',
        credits: 4,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'VII',
        category: 'pe'
    },
    {
        cid: 'CC4145',
        cname: '3 4 XYZ1',
        credits: 4,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, excepturi.',
        sem: 'VII',
        category: 'pe'
    }
]

const fDB = async () => {
    await Faculty.deleteMany({})
    Faculty.insertMany(fData)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

const cDB = async () => {
    await Course.deleteMany({})
    Course.insertMany(cData)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}

fDB();
cDB();