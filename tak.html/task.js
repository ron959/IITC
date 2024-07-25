let firstName="Ron" // Variable Declaration and Boolean Expressions
let lastName=" Sherling"
let age=21
let isStudent= true
let isAdult=(age>18) //2//
console.log(isAdult);
let isJohn= (firstName=== "john")
console.log(isJohn)


function greet(firstName, lastName){ //Functions and String Methods

let fullName= firstName +" "+ lastName;
let fullName2= fullName.toUpperCase()
let msg="Hello,"+" "+(fullName2)+"!"+" "+"welcome to the IITC Bootcamp."
return msg;
} 


function checkAge(age) {
    if (age < 13) {
        return "You are a child.";
    } else if (age >= 13 && age <= 17) {
        return "You are a teenager.";
    } else if (age >= 18 && age <= 64) {
        return "You are an adult.";
    } else if (age > 64) {
        return "You are a senior.";
    }
}
console.log(checkAge(age))

function getDayMessage(dayOfWeek) {
    switch (dayOfWeek) {
        case "Monday":
            return "Start of the work week!";
        case "Tuesday":
            return "Second day of the work week!";
        case "Wednesday":
            return "third day of the work week!";
        case "Thursday":
            return "fourth day the end of the work week!";
        case "Friday":
            return "fifth day of the work week!";
        case "Saturday":
            return "sixth is here!";
        case "Sunday":
            return "seventh and recharge!";
        default:
            return "Invalid day!";
    }
}

console.log(getDayMessage("Monday"))







function checkEligibility(age, isStudent) { //complex conditions
if (age<18 && true) {
    return "you are a minor student."
} else if(age<18 && !true) {
    return "You are a minor non-student."
} else if (age>=18 && age<=24 && true) {
    return "You are a young adult student."
} else if (age>=18 && age<=24 && !true) {
    return "You are a young adult non-student."
}
else if (age>=25 && true) {
    return "You are an adult student."
}
else if (age>=25 && !true) {
    return "You are an adult non-student."
}
}
console.log(checkEligibility(27, true))



function FormateName(name){ //String Comparison and Manipulation:

    let Trimed= name.trim()
    let LowerTrimed= Trimed.toLowerCase()
    if (LowerTrimed==="admin") {
        return "Welcome admin."
    } else  {
       return  "Hello " + (LowerTrimed)
    }
    }
  

    console.log(FormateName("   Ron   "))



    //Nested If Statements:
    function checkDiscount(age, isMember) {
    if (age < 18) {
    if (isMember) {
    return "You get a 20% discount.";
    } else {
    return "You get a 10% discount.";
    }
    } else if (age >= 65) {
    if (isMember) {
    return "You get a 30% discount.";
    } else {
     return "You get a 20% discount.";
    }
        } else { // age is between 18 and 64
     if (isMember) {
    return "You get a 10% discount.";
    } else {
    return "No discount available.";
    }
    }
    }

    console.log (checkDiscount(12, true))


    //Login Validation:
function validateLogin(Password, Username){

   const storedPassword= "heyRon1"
   const storedUsername= "heyRon2"
        if (storedPassword==="heyRon1" && storedUsername=== "heyRon2"){
            return "login successful"
        } else {
            return "Invalid username or password."
        }
    }
console.log(validateLogin("heyRon1", "heyRon2"))



///Substring Extraction

function extractInitials(firstName, lastName) {
    const firstInitial = firstName.charAt(0).toUpperCase()
    const lastInitial = lastName.charAt(0).toUpperCase()
    
    return `${firstInitial}.${lastInitial}.`
}

// Test cases
console.log(extractInitials('ron', 'sherling'))

///maskEmail?

//grade calculator
function gradeCalculator(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}


//canVote

function canVote (age, isCitizen){
    if(age>18 && isCitizen===true){
        return "You are eligible to vote"
}
else{
 return "You are not eligible to vote"
}
}

console.log( canVote (16, true))

//convertToUpperCaseAndAddAge

function convertToUpperCaseAndAddAge(name, age){
    let uppername=name.toUpperCase()
    return `${uppername}${age}`
    
}
console.log (convertToUpperCaseAndAddAge("ron",25))