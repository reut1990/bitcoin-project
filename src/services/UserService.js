
// const users = [{
//     name: "Ochoa Hyde",
//     coins: 100,
//     moves: []
// },
// {
//     name: "kuki blarus",
//     coins: 200,
//     moves: []
// },
// {
//     name: "reut levin",
//     coins: 150,
//     moves: []
// }
// ]

// function getUser (name) {
//     return new Promise((resolve, reject) => {
//       const user = users.find( user => user.name === name)
//       user ? resolve(user) : reject(`user ${user.name} not found!`)
//     })
// }

function signUp(name) {
    const user = {
        name,
        coins: 100,
        moves: [
            {
                id: 588,
                toId: '5a56640269f443a5d64b32ca',
                to: 'ocho hyda',
                at: "12.12.18 20:30",
                amount: 10
            },
            {
                id: 587,
                toId: 585858,
                to: 'kuki',
                at: "13.12.18 12:30",
                amount: 5
            },
            {
                id: 586,
                toId: 1212121,
                to: 'muki',
                at: "14.12.18 13:30",
                amount: 2
            },
            {
                id: 585,
                toId: 23232323,
                to: 'tutu',
                at: "15.12.18 21:30",
                amount: 12
            }
        ]
    }
    saveToStorage('user', user);

}

function loadUser() {
    // return {
    //     name:'reut',
    //     coins: 100,
    //     moves: []
    // }
    return loadFromStorage('user')
}

 async function addMove(contact, amount) {
    const user = loadFromStorage('user');
    if (contact) {
        user.moves.push({
            id: Math.random(),
            toId: contact._id,
            to: contact.name,
            at: new Date(),
            amount
        });
    }
    saveToStorage('user', user);
}

function updateCoinsBalance(amountTransfered) {
    const user = loadFromStorage('user');
    user.coins = user.coins - amountTransfered;
    saveToStorage('user', user);
}



function getMoves(filterBy) {
    const moves = loadFromStorage('user').moves;
    // return new Promise((resolve, reject) => {
    // const movesToReturn = 
    return moves.filter(move => {
        return move.toId === filterBy
    })

    // resolve(movesToReturn)
}



function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return (val) ? JSON.parse(val) : null;
}

function saveToStorage(key, val) {
    localStorage[key] = JSON.stringify(val);
}

function sort(arr) {
    return arr.sort((a, b) => {
        if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
            return -1;
        }
        if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
            return 1;
        }

        return 0;
    })
}

export default {
    signUp,
    loadUser,
    loadFromStorage,
    saveToStorage,
    addMove,
    updateCoinsBalance,
    getMoves
}