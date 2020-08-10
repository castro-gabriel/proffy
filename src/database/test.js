//  Importando o database
const Database = require('./db')
const createProffy = require('./createProffy')


Database.then( async (db) => {
    //  Inserir dados
    proffyValue = {
        name: 'Gabriel Castro',
        avatar: 'https://avatars1.githubusercontent.com/u/39020837?s=460&u=b0effb4a69d0d53979f5e357fdc9a67db8e13d0c&v=4',
        whatsapp: '74988591670',
        bio: 'Eu sou o cara!',
    }

    classValue = {
        subject: "Química",
        cost: "20",
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1520
        },
    ]

    await createProffy(db, { proffyValue, classValue, classScheduleValues })

    //  Consultar dados
})