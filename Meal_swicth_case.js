var readlinesync = require("readline-sync")
var day = readlinesync.question("enter the day")
var meal_time = readlinesync.question("enter the time")
switch (day){
    case 1:
        console.log("sunday");
        switch (meal_time){
            case "breakfast":
                console.log("maggi");
                break
            case "lunch":
                console.log("dal,rice,roti,sabji");
                break
            case "snacks":
                console.log("bhel");
                break
            case "dinner":
                console.log("chole,chapati");
                break
        }
    break;
    case 2:
        console.log("monday");
        switch(meal_time){
            case "breakfast":
                console.log("pohe");
                break
            case "lunch":
                console.log("rice,dal");
                break
            case "snacks":
                console.log("vada pav");
                break
            case "dinner":
                console.log("bhendi,chapati");
                break
        }
    break
    case 3:
        console.log("tuseday")
        switch(meal_time){
            case "breakfast":
                console.log("dosa");
                break
            case "lunch":
                console.log("pulav");
                break
            case "snacks":
                console.log("tang");
                break
            case "dinner":
                console.log("gavar,chapati");
                break
        }
    break
    case 4:
        console.log("wensday")
        switch(meal_time){
            case "breakfast":
                console.log("noodles");
                break
            case "lunch":
                console.log("rice,dal");
                break
            case "snacks":
                console.log("biscuit");
                break
            case "dinner":
                console.log("panner,chapati");
                break
        }
    break
    case 5:
        console.log("thursday")
        switch(meal_time){
            case "breakfast":
                console.log("pasta");
                break
            case "lunch":
                console.log("rice,dal");
                break
            case "snacks":
                console.log("panipuri");
                break
            case "dinner":
                console.log("rajma,chapati");
                break
        }
    break
    case 6:
        console.log("friday")
        switch(meal_time){
            case "breakfast":
                console.log("chile");
                break
            case "lunch":
                console.log("rice,dal");
                break
            case "snacks":
                console.log("kachidabili");
                break
            case "dinner":
                console.log("gavar,chapati");
                break
        }
    break
    case 7:
        console.log("saturday")
        switch(meal_time){
            case "breakfast":
                console.log("edali");
                break
            case "lunch":
                console.log("rice,dal");
                break
            case "snacks":
                console.log("samosa");
                break
            case "dinner":
                console.log("simalamirchi ani patato mix sabji,chapati");
                break
        }    
    }
