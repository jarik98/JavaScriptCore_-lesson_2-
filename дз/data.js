var x = prompt();
if(x>0)
{
alert('1');
}

else if(x<0)
{
alert('-1');
}

else{
alert('0');
};

// number 2
var login = prompt("Who's there?","");

if (login == "Admin")
{
var password = prompt('Password?', "");

if(password == "TheMaster") 
{
alert('Welcome!');
}
else
{
alert("Wrong password");
}}

else 
{
alert("I don't know you");
}