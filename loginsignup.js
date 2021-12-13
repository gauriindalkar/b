var fs = require('fs');
console.log("**** Welcome To Login And Sign Up Page ***")
let input = require("readline-sync");
var user = input.question("If you want to Login or sign up :-")
if (user=="sign up"){
    var user_name=input.question("enter the user name :-")
    var password1=input.question("enter the password :-")
    var password2=input.question("enter the confirm password :-")
    if (password2.length>=8 || password2.length<=15){
        if (password1=='@' || "#" || "!" ){
            if (password1==password2){
                var description=input.question("enter the description :- ")
                var Birth_date=input.question("enter the birth date :-")
                var Hobbies=input.question("enter the Hobbies :-")
                var Gender=input.question("enter the gender :-")
                console.log("congrates",user_name,"your are signed up successfully")
                user_details={user:{"username":user_name,"password":password1},"profilo":{"description":description,"birth_date":Birth_date,"Hobbies":Hobbies,"Gender":Gender}}
                let json = JSON.stringify(user_details,null,4)
                fs.writeFileSync("user_details.JSON", json)
            }
            else{
                console.log("your password is Incorrect")
            }
        }
        else{
            console.log("At least password should be contain one special charcter or number")
        }
    }
    else{
        console.log("Sign up is not succesfully")
    }
}
else if (user=="Login"){
    var user_name1=input.question("enter the user name :-")
    var password3=input.question("enter the password :-")
    // with (open("user_details.json","r"))
    //     data=json.load(file)
    console.log("congrates",user_name1,"your are Login successfully")
    }
else{
    console.log("not login")
}