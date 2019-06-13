const quotes = [{
	name : 'Robin  hood',
	quote : 'Rise and rise again, till lambs become lions'
},{
	name : 'Elon Musk',
	quote : 'If something is important enough you should do it'
},{
	name : 'unknown',
	quote : 'Ever tried, ever failed. No matter, try again'
},{
	name : 'forgot his name',
	quote : 'We try again tomorrow'
},{
	name : 'Afini',
	quote : 'When you are tired, rest do not quit'}];

// const simpleQuotes = [
// 	{
// 		name: 'author number 1'
// 		quote : 'quote number 1'
// 	}
// ]
const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click',dispalyQuote);

function dispalyQuote() {
	let number = Math.floor(Math.random() * quotes.length);
	quoteAuthor.innerHTML = quotes[number].name;
	quote.innerHTML = quotes[number].quote;

}