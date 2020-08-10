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

    //  Consultar dados de todos os proffys
    const selectedProffys = await db.all(`SELECT * FROM proffys;`)
    // console.log(selectedProffys)

    //  Consultar as classes de um determinado professor e trazer junto os dados do professor
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys 
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys)

    //  
    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 2
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "620"
        AND class_schedule.time_to > "520";
    `)
    // console.log(selectedClassesSchedules)

})