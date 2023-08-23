//// Inputs 

let userSignINEmail = document.getElementById('signinEmail')
let userSignINPass =document.getElementById('signinPassword')
let userName = document.getElementById('signupName')
let userEmail = document.getElementById('signupEmail')
let userPass = document.getElementById('signupPassword')
let submit = document.getElementById('submitBtn')
let for_errors = document.getElementById('exist')

/// cheak for storage

var userData;
if (localStorage.getItem('userData') === null) {
    userData = [];
} else {
    userData = JSON.parse(localStorage.getItem('userData'));
    
}

var username = localStorage.getItem('sessionUsername')
if (username) {
    document.getElementById('username').innerHTML = "Welcome " + username
}


// validation and signup


function isEmpty() {
    if (userEmail.value === '' || userName.value === "" || userPass.value === "") {
        return true;
    }
    return false;
}
function existEmail() {
    for (var i = 0; i < userData.length; i++) {
        if (userData[i].uEmail.toLowerCase() == userEmail.value.toLowerCase()) {
            return false;
        }
    }
    }
function createUser() {
    if (isEmpty()) {
        document.getElementById('exist').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
        }
        let user = {
            uName: userName.value,
            uEmail: userEmail.value,
            uPass: userPass.value
        }
        if (existEmail() ==false) {
            document.getElementById('exist').innerHTML = '<span class="text-danger m-3">email already exists</span>'
        } else {
            userData.push(user)
            localStorage.setItem('userData', JSON.stringify(userData));
            document.getElementById('exist').innerHTML = '<span class="text-success m-3">Success</span>'
            reset()
        }
        
    }
function reset() {
        userName.value=''
        userEmail.value=''
        userPass.value=''
}

//##########################################
// مشتغلش بجيب عطل مع المتصفح
    // var pathparts = location.pathname.split('/');
    // var baseURL = ''
    // for (var i = 0; i < pathparts.length - 1; i++) {
    //     baseURL += '/' + pathparts[i]
    // }
    // console.log(baseURL);
    
//##########################################
    //////////////////////////////////////////////////////////////////////


// validation and sign in
function isEmptyLogIn() {
    if (userSignINEmail.value === '' || userSignINPass.value ==='') {
        return false
    } else {
        return true
    }
}
function logIn() {
    if (isEmptyLogIn() == false) {
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    let inpass = userSignINPass.value;
    let inemail = userSignINEmail.value;
    for (var i = 0; i < userData.length; i++) {
        if (userData[i].uEmail.toLowerCase() == inemail.toLowerCase() && userData[i].uPass.toLowerCase() == inpass.toLowerCase()) {
            localStorage.setItem('sessionUsername', userData[i].uName)
            window.open("../homepage.html", "_blank");
            return true;
        } else {
            document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
        }
    }
}

function logout() {
    localStorage.removeItem('sessionUsername')
}



// userData.forEach(element => {
    //     if(element.uEmail.toLowerCase() == inemail.toLowerCase() && element.uPass.toLowerCase() == inpass.toLowerCase()) {
        //         localStorage.setItem('sessionUsername', element.uName);
        //         // window.open("../homepage.html", "_blank");
//     }else {
//         document.getElementById('incorrect').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
//     }
// });

// function validation() {
    //     var regex =/^[a-zA-Z0-9_-]{3,16}\s[a-zA-Z0-9_-]{3,16}$/;
    //     var name = userName.value;
    //     if (regex.test(name)) {
        //         return true;
        //     } else {
            //         return false;
            //     }
            // }
            // function validationEmail() {
                //     var regex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                //     var email = userEmail.value;
                //     if (regex.test(email)) {
                    //         return true;
//     } else {
    //         return false;
//     }
// }
// localStorage.clear()