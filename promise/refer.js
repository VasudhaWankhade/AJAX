sync 
// async  ===> 2 async ===> first reponse first execution
// asyn execution ==>  function inside function ==> call back hell
// Es6 - promises ===> asyn syn ===> better promises 
// Es6 api ==> fetch ====> promise ===> consume ===> .then()

// program2

// let container = document.querySelector('#container')

// //https://reqres.in/api/users?page=2

function renderHtml(data) {
    let html = `
        <div>
            <p>${data.first_name}</p>
            <p>${data.last_name}</p>
            <p>${data.id}</p>
            <p>${data.email}</p>
            <img src = "${data.avatar}"/>
        <div>
    `
    container.insertAdjacentHTML("beforeend", html)

}

// function getUserPageWise(page) {

//     let request = new XMLHttpRequest()
//     request.open('GET', `https://reqres.in/api/users?page=${page}`)
//     request.send()

//     request.addEventListener('load', function () {
//         //console.log(this.responseText)
//         let responseBody = JSON.parse(this.responseText)
//         let idOne = responseBody.data[0].id

//         let request = new XMLHttpRequest()
//         request.open('GET', `https://reqres.in/api/users/${idOne}`)
//         request.send()

//         request.addEventListener('load', function () {
//             let responseBody = JSON.parse(this.responseText)
//             // console.log(responseBody.data)
//             renderHtml(responseBody.data)
//         })


//     })

// }

// getUserPageWise(1)
// getUserPageWise(2)




// program2
// let request = new XMLHttpRequest()
// request.open('GET', 'https://reqres.in/api/users?page=2')
// request.send()

// request.addEventListener('load', function () {
//     //console.log(this.responseText)
//     let responseBody = JSON.parse(this.responseText)
//     let idOne = responseBody.data[0].id

//     let request = new XMLHttpRequest()
//     request.open('GET', `https://reqres.in/api/users/${idOne}`)
//     request.send()

//     request.addEventListener('load',function(){
//         let responseBody = JSON.parse(this.responseText)
//        // console.log(responseBody.data)
//         renderHtml(responseBody.data)
//     })


// Promises

function getUserPage2(page){
    fetch(`https://reqres.in/api/users?page=${page}`)
    .then(function(response){
        return response.json()
    })
    .then(function(obj){
        let idOne = obj.data[0].id
        return idOne
    })
    .then(function(id){
        return fetch(`https://reqres.in/api/users/${id}`)
        .then(function(response){
          return  response.json()
        })
 
    }).then(function(data){
       // console.log(data.data)
        renderHtml(data.data)
    })


}   