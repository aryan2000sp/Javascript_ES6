/*
	This is tutorial for learning 
	the ES6 Class and Objects functions
*/

//This is class for person
const person={
	name: 'SomeName',
	lastName: 'Pandhare',
	myName(){
		console.log(this.name);
	}
}

/*
	The keyword this is used
	to refer the person object.
	Basically the this keyword is
	used to refer the object in which 
	the this keyword is used. 
*/
person.myName();

/*
	Since function is first class
	object (which means they can be: 
	stored in a variable, object, 
	or array. passed as an argument 
	to a function or returned from a 
	function.) the variable myName
	stores the myName() function
	but does not execute the function
	myName(). The const stores the
	first class object of function
	of myName().
*/
const myName=person.myName;
console.log(myName);

console.log(typeof(myName()));