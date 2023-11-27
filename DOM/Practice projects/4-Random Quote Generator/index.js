let btn = document.querySelector('.new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
const quotes = [{
    quote:"The kindness of people is enough to break one's heart." ,
    person:  'A Christmas Carol'  
},{
    quote:"Dignity, and even holiness too, sometimes, are more questions of coat and waistcoat than some people imagine.",
    person:'Oliver Twist'
},{
    quote:"Hearts confined with cobwebs would burst at last, and then Love was avenged.",
    person:'David Copperfield. '
},{
    quote:"What happiness was ours that day, what joy, what rest, what hope, what gratitude, what bliss!",
    person:'Bleak House.'
},{
    quote:"It is true that 'How Not To Do It' was the great study and object of all public departments and professional politicians.",
    person:'Little Dorrit.'
},{
    quote:"What if I am steeped in poverty? You lighten it, and we will be poor together.",
    person:'Nicholas Nickleby. '
},];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length)
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})