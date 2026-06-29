// ex 2 
const foods = ['pizza' , 'cheeseburger'];
console.log('Ex 2 result: ' , foods) 

// ex 3 

foods.unshift('taco') 
console.log('Exercise 3 result:', foods); 


// ex 4 

favFood = console.log('Exercise 4 result:' + foods[1])


// ex 5 
foods.splice(1,1, 'Pizza' , 'Tufo')
console.log('Exercise 5 result: ' + foods)

// ex 6 

foods.splice(1,2, 'Sushi' , 'cupcake', 'Tufo')
console.log('Exercise 6 result: ' + foods) 

// ex 7 

const copyOfOriginalArrays = foods.slice(1,3)
yummy = console.log('Exercise 6 result: ' + copyOfOriginalArrays  )

// ex 8 

soyIdx = foods.indexOf('Tufo')
console.log('Exersice 8 result ; ' + soyIdx)

// ex 9 

allFoods = console.log('Exercise 9 result:', foods.join('->'));

//ex 10 

hasSoup = foods.includes('Soup')
console.log('Exercise 10 result:', hasSoup);

// ex 11 

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]; 
const odds = [] 

 for (const num of nums ) {
    if ( num % 2 !== 0 ){
        odds.push(num) 
    }
} 
console.log('Exercise 11 result:', odds) 

// ex 12 

const fizz = [] 
const buzz = [] 
const fizzbuzz = [] 

for (const num of nums){ 
    if ( num % 3 === 0 ){
        fizz.push(num) 
    }

    if ( num % 5 === 0 ){
        buzz.push(num) 
    } 
if (num % 3 === 0 && num % 5 === 0) {
    fizzbuzz.push(num)
}

}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz); 





