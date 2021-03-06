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

const postHeaders = () => (
    {
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

export function signUpRequest(userData){
    return fetch(usersURL, {
        method: 'POST',
        headers: loginHeaders,
        body: JSON.stringify(userData)
    })
    .then(parseJSON)
}

export function categoriesRequest(){
    return fetch(URL + 'categories', {
        headers: authHeaders()
    })
    .then(parseJSON)
}

export function deleteListRequest(listId){
    return fetch(URL + `lists/${listId}`, {
        method: "DELETE",
        headers: postHeaders(),
        body: JSON.stringify(listId)
    })
    .then(parseJSON)
}

export function updateListRequest(listData){
    return fetch(URL + `lists/${listData.id}`, {
        method: "PATCH",
        headers: postHeaders(),
        body: JSON.stringify(listData)
    })
    .then(parseJSON)
}