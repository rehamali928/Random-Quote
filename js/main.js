var div1=document.querySelector("#div1")
var btn1=document.querySelector(".btn1")
var Author =document.querySelector("#Author")
var quotes=[
    {
   Auther:`― Marilyn Monroe`,
    quote:`"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",`,
},
{
    Author:`― Marcus Tullius Cicero`,
    quote:`“A room without books is like a body without a soul.”`,
},
{
    Author:`― Bernard M. Baruch`,
    quote:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
},
{
    Author:`― Robert Frost`,
    quote:`“In three words I can sum up everything I've learned about life: it goes on.”`,
},
{
    Author:`― J.K. Rowling, Harry Potter and the Goblet of Fire`,
    quote:`“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
},
    
   
]
var peravios;
var newQuote;

btn1.onclick= function(){
   do{
    newQuote=Math.floor(Math.random()*quotes.length);
   }while(peravios===newQuote)
    peravios=newQuote
    div1.innerHTML=quotes[peravios].quote
   Author.innerHTML=quotes[peravios].Author

}