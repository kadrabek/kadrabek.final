function checkInput()
{
    //these are my variables that will appear on my website. this lets the javascript know where and what everything is
    var firstName = document.getElementById("fname").value;
    //my alert tags will let me see that the variables are getting to the page properly. 
    //alert(firstName);
    var lastName = document.getElementById("lname").value;
    //alert(lastName);
    var zipNumb = document.getElementById("zipNum").value;
    //alert(zipNumb);
//this variable is the first and last name variable combined. 
    var allName = firstName + " " + lastName;
//this variable will show the length of the allName variable.
    var len = allName.length;
    //alert(len);
    //this variable will let us know the zip value and alert us that it knows what that variable is. 
    var zip = document.getElementById("zipNum").value;
    //alert(zip);
//this is my if else if else statement that I used to help tell my program that I want it to do certain things. like I want the length to be less than 20. 
    if (len > 20)
    {
        document.getElementById("loginStatus").innerHTML="Invalid Name Length";
    }
    //I want my zip code to be 5 numbers long. if it isn't then I don't want the next page to be loaded. 
    else if ((zip > 9999) && (zip < 100000))
    {
        document.getElementById("loginStatus").innerHTML="Valid Length!";
        //this is my location replace tag where when there is a valid length it will change the page to another website. 
        location.replace("strings3-2-2.html");
    }
    else
    //if it doesn't get my zip code correct then I want it to say that it is an invalid zip code length to warn my user. 
    {
        document.getElementById("loginStatus").innerHTML="Invalid Zip Code";
    }
}
//this is my function that will allow the sound to be played when you click on the button
function PlayLab()
{
mysound = new sound("us-lab-background-1.mp3");
mysound.play();
}
//this also is in play when the sound is being played when you click on the button. 
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function()
    {
        this.sound.play();
    }
}
//this is my function that reloads the page to stop the sound.
function StopLab()
{
    window.location.reload();
}

function land()
{
    location.replace("final.html")
}