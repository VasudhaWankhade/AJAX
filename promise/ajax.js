// ajax purpose is to manage async functions in synchronized manner



// asyn function

// function getUserList() {
//     setTimeout(function() {
//         console.log("User List")
//     }, 3000)
// }

// function getUserId() {
//     setTimeout(function() {
//         console.log("User id")
//     }, 2000)
// }

// function getUserInfo() {
//     setTimeout(function() {
//         console.log("User Info")
//     }, 1000)
// }

// getUserList()
// getUserInfo()
// getUserId()

// Above all functions are async in manner because we have used setTimeout function which is inbuilt and async in manner

// If we want order ==> userList ==> userId ==> userInfo
// we have to manage it in synchronous manner

function getSolution() {
    setTimeout(function() {
        console.log("User List")
        setTimeout(function() {
            console.log("User Id")
            setTimeout(function() {
                console.log("User Info")
            }, 1000)
        }, 2000)
    }, 3000)
}
// getSolution()

// The above code is old way to manage code in sync manner called as ==> call back hell
// But call back hell gets complicated for long and critical program 
// So solution for call back hell is Promises ==> invented in 2015

// Promises
// Promise is class

// let promise = new Promise(function(resolve, reject) {
//     let a = 10
//     let b = 20

//     if (a == b) {
//         resolve("Right")
//     } else {
//         reject("Wrong")
//     }
// })

//promise is Promise and to consume it use .then method on it

// promise.then(function(receive) {
//         console.log(receive)
//     })
//     .catch(function(receive) {
//         console.log(receive)
//     })
//     .finally(function() {
//         console.log("Whatever")
//     })

// 

function getUserList() {
    return new Promise(function(resolve, reject) {
        let a = 100
        let b = 100
        if (a == b) {
            resolve("Here is the list of users!")
        } else {
            reject("List not found")
        }
    })
}

function getUserId() {
    return new Promise(function(resolve, reject) {
        let a = 100
        let b = 100
        if (a == b) {
            resolve("We got user id")
        } else {
            reject("Id not found")
        }
    })
}

function getUserInfo() {
    return new Promise(function(resolve, reject) {
        let a = 100
        let b = 100
        if (a == b) {
            resolve("Read user info")
        } else {
            reject("Info not found")
        }
    })
}

// let pro = getUserList()
// pro.then(function(receive) {
//         console.log(receive)
//         return getUserId()
//     })
//     .then(function(str) {
//         console.log(str)
//         return getUserInfo()
//     })
//     .then(function(ret) {
//         console.log(ret)
//     })
//     .catch(function(what) {
//         console.log(what)
//     })
//     .finally(function() {
//         console.log("Print any thing")
//     })

// for this long code there is the solution ===> we use async and await

let newWay = async function() {
    let a = await getUserList()
    console.log(a)
    let b = await getUserId()
    console.log(b)
    let c = await getUserInfo()
    console.log(c)
}
newWay()