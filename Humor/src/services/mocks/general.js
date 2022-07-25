export const emojis = {
    happy: require('../../../assets/humores/happy.png'),
    sad: require('../../../assets/humores/sad.png'),
    terrible: require('../../../assets/humores/terrible.png')
}

export const corETraducao = {
    happy: { cor: '#E24B4B', name: 'feliz' },
    sad: { cor: '#4B75E2', name: 'mal' },
    terrible: { cor: '#4BE263', name: 'triste' }
}

const monthName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "outubro", "novembro", "dezembro");

export const dateFormat = (dateInitial) => {
    const date = new Date(dateInitial);
    const dateList = {
        hora: date.getHours(),
        minutes: date.getMinutes(),
        day: date.getDate(),
        month: monthName[date.getMonth()],
        monthIndex: date.getMonth(),
        year: date.getFullYear()
    }

    return dateList;
}