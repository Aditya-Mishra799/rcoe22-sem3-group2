const Name = document.getElementById("Name");
const user_id = document.getElementById("user-name");
const email = document.getElementById("email");
const pass = document.getElementById("pass");
const confirm = document.getElementById("confirm-pass");
const submit = document.getElementById("submit-button");


function show() {
    document.getElementById('slider').classList.toggle('active');
}

function show_sucess(){
    alert(`Your password is ${pass}. (Remember this for future use.)`);
    document.getElementById("sucess").style.display= "inline-block";
    }

    function passwordCheck() {
    
        console.log(document.getElementById("pass").value);
        if (pass != confirm){
            document.getElementById("error").innerHTML = "Confirm password and entered password should be same.";
            return false;
        }
        else if(pass.length == 0){
            document.getElementById("error").innerHTML = "Password feild is empty."; 
            return false; 
        }
        else if(pass.length<8){
            document.getElementById("error").innerHTML = "Password is too short(should be between 8-15 characters).";
            return false;
        }
        else if(pass.length>15){
                document.getElementById("error").innerHTML = "Password is too long(should be between 8-15 characters).";
                return false;
            }
 
        else{
            return true;

           }
        }


function validation(){
 let namereg = /^[a-zA-Z]+$/;
 let emailreg = /^[a-zA-Z0-9]+@(gmail|yahoo|outlook)\.com$/;
let userreg = /^[a-zA-Z]{5,18}$/

if (!namereg.test(Name.value)){
    alert("Name should only contain alphabets.");
    return false;
}
if (!emailreg.test(email.value)){
    alert("Invalid email address.");
    return flase;
}
if (!userreg.test(user_id.value)){
    alert("Invalid user name.");
    return false;
}

return true;
}

function registerUser()  {
   if( !validation()){
    return;
   };
    const dbRef = ref(db);

    get(child(dbRef, "UsersList/"+user_id.value)).then((snapshot)=> {
        if(snapshot.exist()){
            alert("Account already exist!");
        }
        else{
            set(ref(db, "UsersList/"+user_id.value),
            {
                fullname: Name.value,
                email: email.value,
                username: user_id.value,
                password: pass.value,


            })
            .then(() => 
            {alert("User registered sucessfully.");})
            .catch((error)=>{
                alert("Error "+ error);
            })
        }
    });
}

submit.addEventListener("click",registerUser);

