/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


 // `quotes` array 

let quotes = [
  {
    quote: "fdsfdsfd",
    source: '123',
    citation: '963',
    year: 2002
  },
  {
    quote: "fdsfjndks",
    source: "456"

  },
  {
    quote: "fdfsdfs",
    source: "789"
  },
  {
    quote: "fdfsdfsd",
    source: "741"
  },
  {
    quote: "fdfdsf",
    source: "852"
  }

];
//console.log(quotes)
//console.log("hello")


//`getRandomQuote` function

function getRandomQuote() {
  let range = quotes.length;
  //console.log(range)

  let randomNum = Math.floor(Math.random() * range)
  //console.log(randomNum)

  let randomQuote = quotes[randomNum]
  //console.log(randomQuote)
  return randomQuote
}
getRandomQuote()




// `printQuote` function

function printQuote(){
  let printedQuote = getRandomQuote()
  console.log(printedQuote)
  let quoteProperty = printedQuote.quote
  console.log(quoteProperty)
  let sourceProperty = printedQuote.source
  console.log(sourceProperty)
  let citationProperty = printedQuote.citation
  console.log(citationProperty)
  let yearProperty = printedQuote.year
  console.log(yearProperty)
  
  let htmlString = `
  <p class = "quote"> ${quoteProperty}  </p>
  <p class = "source"> ${sourceProperty}  
  `
  console.log(htmlString)

  if(printedQuote.hasOwnProperty('citation')){
    return htmlString += `<span class = "citation"> ${citationProperty} </span> `
  }
  if(printedQuote.hasOwnProperty('year')){
    return htmlString += `<span class = "year"> ${yearProperty} </span>`
  }
  //console.log(htmlString)
  htmlString += `</p>`
  console.log(htmlString)
  document.getElementById('quote-box').innerHTML = htmlString; 

}
printQuote()




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);