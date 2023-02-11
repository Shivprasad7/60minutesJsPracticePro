const qoutes =[
   {
    qoute:"Succes is the chapter of the Failure ",
      author:"Harshad mehata"
   },
   {
    qoute: "Don't be affraid give up the good, to go for the great",
    author:"John d rock fellow",
   },
   {
    qoute:"Never complain of ur life be satisfied what have with your self",
    author:"me up",
   },
   {
    qoute:"man shdh tujha gosht ahe purthvi molachi",
    author:"shivprasad",
   },
];//array objet crateing


function getRandomQute(){
    return qoutes[Math.floor(Math.random()*qoutes.length)];
}

function updateQuote(){
    const qoute= getRandomQute();
    document.getElementById('qoute').innerHTML=qoute.qoute;
    document.getElementById('author').innerHTML=qoute.author;
}

document.getElementById("generate").addEventListener('click',updateQuote);

updateQuote();