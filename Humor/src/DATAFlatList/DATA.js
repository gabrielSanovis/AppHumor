const DATA = [
    {
        id: 495,
        created_at: "2022-07-21T21:18:48.580Z",
        mood: "happy",
        short_description: "Hoje foi m...",
        activities: [
            {
                id: 1,
                name: "sports"
            },
            {
                id: 2,
                name: "shopping"
            },
            {
                id: 3,
                name: "rest"
            }
        ]
    },
    {
        id: 496,
        created_at: "2022-07-22T00:11:38.860Z",
        mood: "sad",
        short_description: "Hoje foi m...",
        activities: [
            {
                id: 4,
                name: "party"
            },
            {
                id: 6,
                name: "good_meal"
            },
            {
                id: 9,
                name: "cooking"
            }
        ]

    },
    {
        id: 497,
        created_at: "2022-07-22T00:12:03.370Z",
        mood: "terrible",
        short_description: "Hoje foi m...",
        activities: [
            {
                id: 5,
                name: "movies"
            },
            {
                id: 7,
                name: "games"
            },
            {
                id: 8,
                name: "date"
            }
        ]

    },
    
];

export const icones = {
    sports: {
        id: 1,
        name: 'esporte',
        icone: 'soccer-field'
    },
    shopping: {
        id: 2,
        name: 'compras',
        icone: 'cart'
    },
    rest: {
        id: 3,
        name: 'descanso',
        icone: 'bed'
    },
    party: {
        id: 4,
        name: 'festa',
        icone: 'party-popper'
    },
    movies: {
        id: 5,
        name: 'filmes e séries',
        icone: 'popcorn'
    },
    good_meal: {
        id: 6,
        name: 'boa refeição',
        icone: 'noodles'
    },
    games: {
        id: 7,
        name: 'jogos',
        icone: 'google-controller'
    },
    date: {
        id: 8,
        name: 'encontro',
        icone: 'cards-playing-heart-multiple-outline'
    },
    cooking: {
        id: 9,
        name: 'cozinhar',
        icone: 'egg-fried'
    }
} 
export default DATA;