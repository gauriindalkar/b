var fs = require('fs');
console.log("**** WELOCOME to Login and signup page ****")

let readlineSync = require("readline-sync");
var user=readlineSync.question("If you want to Login or signup :-")
if (user=="signup"){
    var user_name=readlineSync.question("enter the user name :-")
    var password1=readlineSync.question("enter the password :-")
    var password2=readlineSync.question("enter the confirm password :-")
    if (password1==password2){
        if (password1.includes('@')|| password1.includes("#") ){
            if (password1==password2){
                var description=readlineSync.question("enter the description :- ")
                var Birth_date=readlineSync.question("enter the birth date :-")
                var Hobbies=readlineSync.question("enter the Hobbies :-")
                var Gender=readlineSync.question("enter the gender :-")
                console.log("congrates",user_name,"your are signed up successfully")
                user_details={user:{"username":user_name,"password":password1},"profilo":{"description":description,"birth_date":Birth_date,"Hobbies":Hobbies,"Gender":Gender}}
                 nlet json = JSON.stringify(user_details,null,4)
                // let file_1=JSON.stringify(json_1,null,4)
                fs.appendFileSync("user_details.JSON",json) 
            
                // a=open("login.json","a")
                // b=a.append(user_details)
                // a.close()
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
    var user_name1=readlineSync.question("enter the user name :-")
    var password3=readlineSync.question("enter the password :-")
    // user_details={user:{"username":user_name,"password":password1},"profilo":{"description":description,"birth_date":Birth_date,"Hobbies":Hobbies,"Gender":Gender}}
    // let json_1 = JSON.stringify(user_details,null,4)
    // let file_1=JSON.stringify(json_1,null,4)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    data=fs.readFileSync("user_details.JSON")
    // with (open("user_details.json","r")) 
    data1=JSON.parse(data)
    if (user_name1==data1["user"]["username"]){
        if (password3==data1["user"]["password"]){
            console.log(data1,data1["user"]["username"])
        }else{
            console.log("password is incorrect")
        }
    }else{
        console.log("username is incorrect")
    }
}
else{
    console.log("It is not valid")
}

