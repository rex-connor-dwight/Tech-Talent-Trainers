

// const data = {
//     Rex: `Man`,
//     myAge: 87,
//     myKids: [`Ada`, `Obi`, `Edward`]
// }
// let 

// X = x + 5


// {
//     var Adam = `First Man`;
//     console.log(Adam)
// }


// var Adam = `Eve's Husband`;

// console.log(Adam)

// Create a variable called CarName and  assign a value Volve to it
// let [----] = [`-----`];


// Numbers:
// let length = 16;
// let weight = 7.5;

// Strings:
// let color = `Yellow`;
// let lastName = "Johnson";


// Booleans
// let x = true;
// let y = false;

// Object:
// const person = {firstName:"John", lastName:"Doe"};

// Array object:
// const cars = ["Saab", "Volvo", "BMW"];

// Date object:
// const date = new Date();

// Undefined 
// const car = "23"

// Null
// const person1 = 23;

// const rader = person1 * car

// console.log(person.firstName)

// console.log(cars[2])

// Declear 12 Objects, each having 24 key value pairs
// Declear 6 arrays with 30 vales each



// Functions In JS

// function myFunction(p1, p2, p3) {
//     return p1 * p2 + p3;
// }

// console.log(myFunction(3, 4, 9))

function chnageOfName() {
    const userName = document.getElementById(`UserName`).value;
    const greeting = document.getElementById(`greeting`);
    const location = document.getElementById(`location`);
    const welcome = `Welcome`;

    // Objects are key value pairs variables

    const adaDetails = {
        name: `Ada`,
        age: 87,
        score: 100,
        isMarried: true,
        isSingle: false,
        kids: [`Ada`, `Obi`, `Edward`],
    }

    const lgaInStatesInNigeria = {
        FCT: [
            `Amac`,
            `Kuje`,
            `Abaji`,
            `Bwari`,
            `Gwagwalada`,
            `Kwali`,
        ],
        Lagos: [
            `Ikeja`,
            `Egbeda`,
            `Ikorodu`,
            `Lekki`,
        ]
    }

    const nationsAndStates = {
        // N&S is the first Object Name that has a key of USA and   a value of States. USA in turn is also an Object with a   Key of States. now, State which is the value having an    array with 6 values representing states in the united  states of America.
        USA: {
            states: [
                `Alabama`,
                `Alaska`,
                `Arizona`,
                `Arkansas`,
                `California`,
                `Colorado`,
            ]
        },
        Nigeria: {
            states: [
                `Abia`,
                `Adamawa`,
                `Akwa Ibom`,
                `Anambra`,
                `Bauchi`,
                `Bayelsa`,
                `Benue`,
                `Borno`,
            ]
        },
        Canada: {
            states: [
                `Alberta`,
                `British Columbia`,
                `Manitoba`,
                `New Brunswick`,
                `Newfoundland and Labrador`,
                `Northwest Territories`,
            ]
        }
    }

    // Arrays are variables containing more than one value

    const students = [`Ada`, `Obi`, `Edward`]

    // console.log(nationsAndStates.Canada.states[1])

    //Tips: If you want to get the value from an array you use the  arrayIndex number which starts from zero to whatever using the   square bracket [], If you want to get the value of a key in an    object, you point at the key to get the value using the dot (. sign)

    const userState = nationsAndStates.Canada.states[2]


    const newGreeting = greeting.innerHTML = ` ${greeting.innerHTML} ${userName} ${welcome}`

    const newLocation = location.innerHTML = ` ${location.innerHTML} ${userState} in Canada`

    return newGreeting
}






// // Objects are key value pairs variables

// const adaDetails = {
//     name: `Ada`,
//     age: 87,
//     score: 100,
//     isMarried: true,
//     isSingle: false,
//     kids: [`Ada`, `Obi`, `Edward`],
// }

// const lgaInStatesInNigeria = {
//     FCT: [
//         `Amac`,
//         `Kuje`,
//         `Abaji`,
//         `Bwari`,
//         `Gwagwalada`,
//         `Kwali`,
//     ],
//     Lagos: [
//         `Ikeja`,
//         `Egbeda`,
//         `Ikorodu`,
//         `Lekki`,
//     ]
// }

// const nationsAndStates = {
//     // N&S is the first Object Name that has a key of USA and a value of States. USA in turn is also an Object with a Key of States. now, State which is the value having an array with 6 values representing states in the united states of America.
//     USA: {
//         states: [
//             `Alabama`,
//             `Alaska`,
//             `Arizona`,
//             `Arkansas`,
//             `California`,
//             `Colorado`,
//         ]
//     },
//     Nigeria: {
//         states: [
//             `Abia`,
//             `Adamawa`,
//             `Akwa Ibom`,
//             `Anambra`,
//             `Bauchi`,
//             `Bayelsa`,
//             `Benue`,
//             `Borno`,
//         ]
//     },
//     Canada: {
//         states: [
//             `Alberta`,
//             `British Columbia`,
//             `Manitoba`,
//             `New Brunswick`,
//             `Newfoundland and Labrador`,
//             `Northwest Territories`,
//         ]
//     }
// }

// // Arrays are variables containing more than one value

// const students = [`Ada`, `Obi`, `Edward`]

// console.log(nationsAndStates.Canada.states[1])

// //Tips: If you want to get the value from an array you use the arrayIndex number which starts from zero to whatever using the square bracket [], If you want to get the value of a key in an object, you point at the key to get the value using the dot (.sign)


