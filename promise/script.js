// // To get id of individual user

let apiRequest = new XMLHttpRequest()
apiRequest.open('GET', 'https://reqres.in/api/users?page=2')
apiRequest.send()

// //To show data on web

let box = document.querySelector('#box')
    // console.log(box)

function renderHtml(feed) {
    let html = `<div>
    <p>${feed.first_name}</p>
    <p>${feed.last_name}</p>
    <p>${feed.id}</p>
    <p>${feed.email}</p>
    <img src = "${feed.avatar}">   
    </div>`
    box.insertAdjacentHTML("beforeend", html)

}

// // id of third user

// // apiRequest.addEventListener('load', function() {
// //     //console.log(this.responseText)
// //     let body = JSON.parse(this.responseText)
// //         // console.log(body)
// //     let idOfUser = body.data[2].id
// //         // console.log(idOfUser)

// //     let apiRequestforUser = new XMLHttpRequest()
// //     apiRequestforUser.open('GET', `https://reqres.in/api/users/${idOfUser}`)
// //     apiRequestforUser.send()

// //     apiRequestforUser.addEventListener('load', function() {

// //         let responseUser = JSON.parse(this.responseText)
// //         let userInfo = responseUser.data
// //         renderHtml(userInfo)


// //     })
// // })

// // To get id of any user

// // function getIdOfAnyUser(userNo) {
// //     let apiRequest = new XMLHttpRequest()
// //     apiRequest.open('GET', 'https://reqres.in/api/users?page=2')
// //     apiRequest.send()

// //     apiRequest.addEventListener('load', function() {
// //         let responseBody = JSON.parse(this.responseText)
// //         let idOfUser = responseBody.data[userNo].id
// //         console.log(idOfUser)
// //     })
// // }

// // getIdOfAnyUser(5)
// // getIdOfAnyUser(3)

// //To get users PageWise

// function getUserPageWise(pageNo, id) {
//     let apiRequest = new XMLHttpRequest()
//     apiRequest.open('GET', `https://reqres.in/api/users?page=${pageNo}`)
//     apiRequest.send()

//     apiRequest.addEventListener('load', function() {
//         let inResponse = JSON.parse(this.responseText)

//         let apiRequest = new XMLHttpRequest()
//         apiRequest.open('GET', `https://reqres.in/api/users/${id}`)
//         apiRequest.send()

//         apiRequest.addEventListener('load', function() {

//             let responseUser = JSON.parse(this.responseText)
//             let userInfo = responseUser.data
//             renderHtml(userInfo)


//         })

//     })
// }

// getUserPageWise(1, 5)
// getUserPageWise(2, 4)

// //---------------------All above are examples of Call Back Hell----------------------------------


// Better option are promises ==> use .then

function getUsersPageWise(page) {
    fetch(`https://reqres.in/api/users?page=${page}`)
        .then(function(response) {
            return response.json()
        })
        .then(function(objecct) {
            return object.data[1].id
        })
        .then(function(userId) {
            return fetch(`https://reqres.in/api/users/${userId}`)
        })
        .then(function(respond) {
            return respond.json()
        })
        .then(function(objectt) {
            renderHtml(objectt.data)
        })
}

getUsersPageWise(2)