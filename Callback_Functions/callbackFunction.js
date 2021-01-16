/*
	A callback function is function in which 
	another function is passed in as parameter.
	Bacsically the callback fuctions are function
	which used and defined at the time when they are
	passed in as parameter into another fuctions.
*/

//--------------------------------------------------
/*
	Example 1
*/
//--------------------------------------------------
var button=document.getElementById('btn');

/*
	This will a event to the button
	like click and will perform the 
	following action that is passed 
	in.

	NOTE:-
	A function ()=> is passed in as parameter
	and definen at same time. The function ()=>
	just prints message on the console.
*/
button.addEventListener('click', ()=>{
	console.log('button was clicked');
});

//--------------------------------------------------
/*
	Example 2
*/
//--------------------------------------------------

/*
	In this example we will use multiple callbacks
*/
var students=[
	{name:'Aryan', score:100, place:'North'},
	{name:'Jack', score:40, place:'South'},
	{name:'Nicole', score:70, place:'West'},
	{name:'Ram', score:10, place:'East'},
	{name:'Shaam', score:80, place:'East'},
	{name:'Some I dont care', score:0, place:'South'},
	{name:'My crush', score:110, place:'North'},
	{name:'Friendly Person', score:100, place:'North'},
	{name:'Not Friendly Person', score:40, place:'North'}
];

/*
	This function will go through people
	and will select those people who are from
	North. The selected objects are passed into
	another function which will be called later.

	NOTE:-
	callBackFunc in another function passed in as
	a parameter.
*/
function studentProcess1(someData, callBackFunc)
{
	for(let i=0; i<someData.length; i++)
	{
		//Check if the person is from North
		if(someData[i].place==='North')
		{
			//Now we check if callBackFunc is of type function
			if(typeof(callBackFunc)==='function')
			{
				/*
					This is function and called
					when its defined and passed with
					the someData as an object. In this 
					case this function will actually 
					print the names of sudents whose 
					scores are < 60.
				*/
				callBackFunc(someData[i]);
			}
		}
	}
}

/*
	This function will check if the
	student has score greater than 60
	and is from North. For this function
	we call the studentProcess1() function
	and will another function will passed in 
	as parameter and defined at the same time

	NOTE:-
	()=> is a function and is passed as parameter 
	and defined at same time.
*/
studentProcess1(students, (someData)=>{
	if(someData.score>60)
	{
		console.log(someData.name);
	}
});
//


