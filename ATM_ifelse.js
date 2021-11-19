var a = require('readline-sync');
console.log("welcome")
atm_card = a.question("enter type of card: ")
if (atm_card == "debit card" || "credit card"){
    option = a.question("enter your option: ")
    if (option == "balance enquiry"){
        language = a.question("enter a language: ")
        if (language == "english" || "hindi" || "marathi"){
            balance_check = a.questionInt("enter pin 4 digit or 6 digit: ")
            if (balance_check == "4 digit" || "6 digit"){
                receipt = a.question("you want receipt: ")
                if (receipt == "yes"){
                    console.log("yes")
                }else{
                    console.log("no")
                }
            }else{
                console.log("incorrect")
            }
        }else{
            console.log("you can change your language")
        }
    }else if (option == "withdrawal cash"){
        language = a.question("enter a language: ")
        if (language == "english" || "hindi" || "marathi"){
            account = a.question("enter your account :")
            if (account == "saving account" || "current account"){
                amount = a.questionInt("enter your amount :")
                if (amount < 20000){
                    receipt = a.question("you want receipt :")
                    if (receipt == "yes"){
                        amount_pick = a.question("pick your amount :")
                        if (amount_pick == "yes"){
                            console.log("correct")
                        }else{
                            console.log("incorrect")
                        }
                    }else{
                        console.log("incorrect")
                    }
                }else{
                    console.log("incorrect")
                }
            }else{
                console.log("incorrect")
            }
        }else{
            console.log("incorrect")
        }
    }else if (option == "pin change"){
        old_pin = a.questionInt("enter a pin number 4 digit or 6 digit :")
        if (old_pin == "4 digit" || "6 digit"){
            new_pin = a.questionInt("enter a new pin 4 digit or 6 digit :")
            if (new_pin == "4 digit" || "6 digit"){
                console.log("correct")
            }else{
                console.log("incorrect")
            }
        }else{
            console.log("incorrect")
        }
    }else{
        console.log("finshed")
    }
}else{
    console.log("error")
}
