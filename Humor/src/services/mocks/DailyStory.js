const monthName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "outubro", "novembro", "dezembro")
const now = new Date;

const mock = {
    header: {
        title: 'Como você está?',
        date: `Hoje, ${now.getDate()} de ${monthName[now.getMonth()]}`,
        hour: `${now.getHours()}:${now.getMinutes()}`
    },
    mood: {
        happy: {
            id: 1,
            name: 'feliz',
            emoji: require('../../../assets/humores/happy.png'),
        },
        ok: {
            id: 2,
            name: 'ok',
            emoji: require('../../../assets/humores/ok.png'),
        },
        radiant: {
            id: 3,
            name: 'radiante',
            emoji: require('../../../assets/humores/radiant.png'),
        },
        sad: {
            id: 4,
            name: 'triste',
            emoji: require('../../../assets/humores/sad.png'),
        },
        terrible: {
            id: 5,
            name: 'acabado',
            emoji: require('../../../assets/humores/terrible.png'),
        },
    },
    activity: {
        descanso: {
            name: 'descanso',
            icone: 'bed'
        },
        encontro: {
            name: 'encontro',
            icone: 'cards-playing-heart-multiple-outline'
        },
        filmes: {
            name: 'filmes e séries',
            icone: 'popcorn'
        },
        compras: {
            name: 'compras',
            icone: 'cart'
        },
        refeicao: {
            name: 'boa refeição',
            icone: 'noodles'
        },
        festa: {
            name: 'festa',
            icone: 'party-popper'
        },
        esporte: {
            name: 'esporte',
            icone: 'soccer-field'
        },
        cozinhar: {
            name: 'cozinhar',
            icone: 'egg-fried'
        },
        jogos: {
            name: 'jogos',
            icone: 'google-controller'
        },
    }
}

export default mock;