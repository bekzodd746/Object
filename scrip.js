let user = {
    id:1,
    name:`Bekzod`,
    password:123
}

let a = prompt(`your name`)
let b = prompt(`your password`)

if(a == user.name && b == user.password){
    alert(`welcome`)
}else{
    alert(`error`)
}