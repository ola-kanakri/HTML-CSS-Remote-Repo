// JS Tasks

// 24-March-2022
// Thursday
// Note: Create new folder “Object-24-march-2022” contains htm connected with JS  page in your JavaScript repo.

// console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

let Me =[ 

    {fname: "Ola"},
    {lname: "Kanakri"},
    {age: "24"},
    {dob: "16-Jul"},
    {favFood: ["Pizza","Mansaf","Maqlobeh","Shawemeh"]},
    {favMovie: ["Artughrol","Maraya"]},

];



var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/

function firstName(persons)
{
    var z= "<br>";

    for(let i=0; i<Object.keys(persons).length ;i++)
    {
        document.write(persons[i].name.first);
        document.write(z);
    }
}


 firstName(persons);


/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/

function averageAge(persons)
{
    for(let i=0; i<Object.keys(persons).length ;i++)
    {
        var sum = 0, avg = 0;
        sum = sum + persons[i].age;
    }

    age = sum / Object.keys(persons).length;

    document.write(`averageAge(persons) => ${age}`);
}


 averageAge(persons);


/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/

function olderPerson(persons)
{
    var Max = persons[0].age , index=0;

    for(let i=0; i<Object.keys(persons).length ;i++)
    {
        if (persons[i] >= Max)
           {
             Max = persons[i];

             index = i;
           } 
        
    }

    document.write(`olderPerson(persons) => ${persons[index].name.first} ${persons[index].name.last}`);


}

olderPerson(persons);



/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/


function longestName(persons)
{
    var fullName , longestFullName = "";

    for(let i=0; i<Object.keys(persons).length ;i++)
    {
        fullName = persons[i].name.first+persons[i].name.last;

        if(fullName.length >longestFullName.length )
            {
                longestFullName = fullName ;
            }
    }

    console.log(longestFullName);
}

 longestName(persons);



//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/

function repeatWord(str)
{
    let wordArr = str.toUpperCase().split(" ");

    var count = 0 , obj={};



    for(let i=0; i<wordArr.length ;i++)
    {
        count = wordArr.filter( function (arr)
        {return arr === wordArr[i];} ).length;

//The filter() method creates a new array filled with elements that pass a test provided by a function.

        obj[`${wordArr[i]}`] = `${count}`;
            
    }


    return obj;

}

repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO");



/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/

function repeatChar(str)
{
    let wordArr = str.toUpperCase().split("");

    var count = 0 , obj={};



    for(let i=0; i<wordArr.length ;i++)
    {
        count = wordArr.filter( function (arr)
        {return arr === wordArr[i];} ).length;

//The filter() method creates a new array filled with elements that pass a test provided by a function.

        obj[`${wordArr[i]}`] = `${count}`;
            
    }


    return obj;

}
console.write(repeatChar("mamababatetacedo"));

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/


function selectFromObject(obj,arr)
{
    let convArr = Object.keys(obj); // Convert an object into an array

    for(let i=0; i<convArr.length ;i++)
    {
        if (convArr[i] !== arr[i])
         delete convArr[i];
    }

    return convArr;

}

console.write(selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']));


