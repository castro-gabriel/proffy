const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: 89224992,
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através da experiência. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: 20,
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Daniel Evangelista",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: 89224992,
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através da experiência. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Matemática",
        cost: 20,
        weekday: [2],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects =[
    "Arts",
    "Math",
    "Science",
    "Phisic",
    "History",
    "Portuguese",
    "English",
    "Quimic",
]

const weekdays =[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",

]

const express = require('express')
const server = express()    


//  Configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',
    {
        express: server,
        noCache: true,

    }
)


server.use(express.static('public'))

server.get('/', (req, res) => {
    return res.render('index.html')
})

server.get('/study', (req, res) => {
    const filters = req.query
    return res.render('study.html', { proffys, filters, subjects, weekdays })
})

server.get('/give-classes', (req, res) => {
    const data = req.query
    // Add data to proffys list

    return res.render('give-classes.html', { subjects, weekdays })
})

server.listen(5500)

