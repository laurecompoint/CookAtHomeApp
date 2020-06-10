export const login = (email, password) => {
    // https://cookathomeapi.herokuapp.com/api/login
    // https://bbnb-booking.app2b.now.sh/api/users/signIn
    return fetch('https://cookathomeapp.herokuapp.com/api/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    })
        .then((response) => {
            // Si un code erreur a été détecté on déclenche une erreur
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then(response => response.json())
}
export const register = (email, password) => {
    // https://cookathomeapi.herokuapp.com/api/login
    // https://bbnb-booking.app2b.now.sh/api/users/signIn
    return fetch('https://cookathomeapp.herokuapp.com/api/register', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            password,
        }),
    })
        .then((response) => {
            // Si un code erreur a été détecté on déclenche une erreur
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then(response => response.json())
}

