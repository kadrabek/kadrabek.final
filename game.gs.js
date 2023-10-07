//the function code allows us to create a function for the func that we added in our html. 
function funcAlert()

//the meat of the code goes into the curly brackets. without these the function will not work.
{

//this add a variable to our code and it will generate a number from 1-6 randomly.
    var randNum1 = Math.ceil(Math.random()*6);

//this alert will pop up when you click on the button we added in the html document. the random number variable we added will pop up here alongside the message in quotes. 
    alert("your number = " + randNum1);

    if (num < 6)
    {
        alert("a" + randNum1)
    }
    else if (num > 5)
    {
        alert ("b" + randNum1);
    }
    else
    {
        alert("c" + randNum1)
    }
    
//this lets the computer know that the function is done and ready to go be booted up. 
}

function land()
{
    location.replace("final.html")
}