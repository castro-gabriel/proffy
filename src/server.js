const express = require('express')
const server = express()    

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//  Configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',
    {
        express: server,
        noCache: true,

    }
)

//  Starting server configuration
server.use(express.static('public'))

//  Receber os dados de req.body
server.use(express.urlencoded({ extended: true }))

server.get('/', pageLanding)
server.get('/study', pageStudy)
server.get('/give-classes', pageGiveClasses)
server.post('/save-classes', saveClasses)


server.listen(5500)