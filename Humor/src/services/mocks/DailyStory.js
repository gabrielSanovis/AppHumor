const monthName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "outubro", "novembro", "dezembro")
const now = new Date;

const mock = {
    header: {
        title: 'Como você está?',
        date: `Hoje, ${now.getDate()} de ${monthName[now.getMonth()]}`,
        hour: `${now.getHours()}:${now.getMinutes()}`
    },
    mood: [
        {
            id: 1,
            name: 'radiante',
            emoji: require('../../../assets/humores/radiant.png'),
            nameId: 'radiant'
        },
        {
            id: 2,
            name: 'feliz',
            emoji: require('../../../assets/humores/happy.png'),
            nameId: 'happy'
        },
        {
            id: 3,
            name: 'ok',
            emoji: require('../../../assets/humores/ok.png'),
            nameId: 'ok'
        },
        {
            id: 4,
            name: 'triste',
            emoji: require('../../../assets/humores/sad.png'),
            nameId: 'sad'
        },
        {
            id: 5,
            name: 'acabado',
            emoji: require('../../../assets/humores/terrible.png'),
            nameId: 'terrible'
        },
    ],
    activity: [
        {
            id:1,
            name: 'esporte',
            icone: 'soccer-field'
        },
        {
            id:2, 
            name: 'compras',
            icone: 'cart'
        },
        {
            id:3,
            name: 'descanso',
            icone: 'bed'  
        },
        {
            id:4,
            name: 'festa',
            icone: 'party-popper'
        },
        {
            id:5,
            name: 'filmes e séries',
            icone: 'popcorn',
        },
        {
            id:6,
            name: 'boa refeição',
            icone: 'noodles'
        },
        {
            id:7,
            name: 'jogos',
            icone: 'google-controller'
        },
        {
            id:8,
            name: 'encontro',
            icone: 'cards-playing-heart-multiple-outline'
        },
        {
            id:9,
            name: 'cozinhar',
            icone: 'egg-fried'
        },
    ]
}

export default mock;