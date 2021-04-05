const URL = 'http://localhost:3000/'
const usersURL = URL + 'users'
const parseJSON = res => res.json()
const loginHeaders = {
    'Accepts': 'application/json',
    'Content-Type': 'application/json'
}

const authHeaders = () => ({
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
})

const postHeaders = () => ({
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    'Accepts': 'application/json',
    'Content-Type': 'application/json'
})

export function loginRequest(credentials) {
    return fetch(URL + 'login', {
        method: "POST",
        headers: loginHeaders,
        body: JSON.stringify(credentials)
    })
    .then(parseJSON)
}

export function profileRequest() {
    return fetch(URL + 'profile', {
        headers: authHeaders()
    })
    .then(parseJSON)
}

export function postList(listData) {
    return fetch(URL + 'lists', {
        method: "POST",
        headers: postHeaders(),
        body: JSON.stringify(listData)
    })
    .then(parseJSON)
}
