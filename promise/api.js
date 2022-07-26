// first get users of paritcular page number by ==>'https://reqres.in/api/users?page=2'
// get first user id from this list and pass it to ==>https://reqres.in/api/users/2
// print info of that user

//By call back hell

function getInfoSingleUser(pageNumber) {
    let apiRequest = new XMLHttpRequest()
    apiRequest.open("GET", `https://reqres.in/api/users?page=${pageNumber}`)
    apiRequest.send()

    apiRequest.addEventListener('load', function() {
        let userList = JSON.parse(this.responseText) // this = apiRequest 
            //JSON.parse ==> to convert readable stream into javaScript object
        let id = userList.data[0].id
            // console.log(id)


        apiRequest = new XMLHttpRequest()
        apiRequest.open('GET', `https://reqres.in/api/users/${id}`)
        apiRequest.send()

        apiRequest.addEventListener('load', function() {
            let userId = JSON.parse(this.responseText)
            console.log(userId.data)
        })
    })


}

// getInfoSingleUser(2)

//By Promises

function getUsersByPage(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)
}

function getUserInfo(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
}

let returnPromise = getUsersByPage(2)

// returnPromise.then(function(response) {
//         return response.json()
//     })
//     .then(function(pro) {
//         // console.log(pro)
//         return pro.data[0].id
//     })
//     .then(function(id) {
//         return getUserInfo(id)
//     })
//     .then(function(pro) {
//         return pro.json()
//     })
//     .then(function(info) {
//         console.log(info.data)
//     })

// By async await

let getInfo = async function(page) {
    let users = await getUsersByPage(page)
    let a = await users.json()
    let id = a.data[0].id
    let userInfo = await getUserInfo(id)
    let b = await userInfo.json()
    console.log(b.data)
}

getInfo(2)