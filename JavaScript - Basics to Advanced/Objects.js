var mCars = {
    "p1" : "350 kmph",
    "gallardo" : "320 kmph",
    "veyron" : "409 kmph",
    "agera" : "429 kmph"
}

console.log(mCars)
console.log(typeof(mCars))

var mAgera = {
    name: "Agera",
    manufacturer: {
        name: "Koenigsegg",
        location: "Sweden"
    },
    topSpeed: 429,
    color: "Black",
    spoilers: false,
    applyBrakes: function() {
        setTimeout(function() {
            console.log('Car Stopped');
        }, 5000)
    }
}

console.log(mAgera.name)
console.log(mAgera.topSpeed)
console.log(mAgera.color)
console.log(mAgera.spoilers)
console.log(mAgera.applyBrakes())

console.log('')

//Practice Problems
//Q1. We have an object of customers for our food delivery app with the information about their past orders with order values.
//Write a JavaScript program to give a "Premium Membership" to the customer if the
//customer has made at least 5 orders of the minimum value of 20.
//The customers and their past order history is given below:
    customers_data={
        'Ben10': [22, 30, 11, 17, 15, 52, 27, 12],
        'Sameer': [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
        'Zeeshan': [22, 30, 11, 5, 17, 30, 6, 57]
        };
    
    const premiumCustomers = [];

    for (let customer in customers_data) {
        let orders = customers_data[customer];
        let count = 0;

        for (let i = 0; i < orders.length; i++) {
            if (orders[i] >= 20) {
                count++;
            }
            if (count >= 5) {
                premiumCustomers.push(customer);
                break;
            }
        }
    }
    
    console.log(premiumCustomers)
    
    console.log('')

//Q2. Write a JavaScript program to list the properties of a JavaScript object.
    food = {
        'name': 'Peanut Butter',
        'weight': 100,
        'calories': 600
    };

    var properties = [];

    for (let foods in food) {
        properties.push(foods)
    }

    console.log(properties)

    console.log('')

//Q3. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property
    student = {
        name : "David Rayy",
        sclass : "VI",
        rollno : 12
        }
    
    var keyToDelete = 'rollno';

    console.log('keyToDelete: ', keyToDelete,'\nObject before deletion: ', student);

    delete student[keyToDelete];

    console.log('Object after deletion:', student);

    console.log('')