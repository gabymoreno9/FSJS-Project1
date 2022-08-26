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
    quote: "Feet, what do I need you for when I have wings to fly?",
    source: 'New Yorker',
    citation: '963',
    year: 2002,
    tags: 'humor'
  },
  {
    quote: "At the end of the day, we can endure much more than we think we can.",
    source: "Frida Kahlo"

  },
  {
    quote: "It is better to light a candle than curse the darkness.",
    source: "Eleanor Roosevelt",
    citation: '1933',
    year: 1933,
    tags: 'Famous Women'
  },
  {
    quote: "Always know your merit and how special you are, and don’t let someone else’s qualifications make you feel small. If you stick to this, you will always deserve their respect.",
    source: "Whitney Wolfe Herd"
  },
  {
    quote: "All sorts of things can happen when you’re open to new ideas and playing around with things.",
    source: "Stephanie Kwolek"
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
setInterval(printQuote, 2500)

function printQuote(){
  let printedQuote = getRandomQuote()
  //console.log(printedQuote)
  let quoteProperty = printedQuote.quote
  //console.log(quoteProperty)
  let sourceProperty = printedQuote.source
  //console.log(sourceProperty)
  let citationProperty = printedQuote.citation
  //console.log(citationProperty)
  let yearProperty = printedQuote.year
  //console.log(yearProperty)
  let tagsProperty = printedQuote.tags
  //console.log(tagsProperty)
  
  let htmlString = `
  <p class = "quote"> ${quoteProperty}  </p>
  <p class = "source"> ${sourceProperty}  
  `
  //console.log(htmlString)

  if(printedQuote.hasOwnProperty('citation')){
     htmlString += `<span class = "citation"> ${citationProperty} </span> `
  }
  if(printedQuote.hasOwnProperty('year')){
     htmlString += `<span class = "year"> ${yearProperty} </span>`
  }
  if(printedQuote.hasOwnProperty('tags')){
     htmlString += `<span class = "tags"> ${tagsProperty} </span>`
  }
  //console.log(htmlString)
  htmlString += `</p>`
  console.log(htmlString)
  document.getElementById('quote-box').innerHTML = htmlString; 

}
printQuote()

//Random Backround Colors

let colors = ["#2F52E0", "#BCED090", "#F9CB40", "#FF715B", "#4C5B5C", "#2DC7FF", "#48E5C2", "#48E5C2"]

function randomBackgroundColor(){
  let colorRange = colors.length;
  //console.log(colorRange)

  let randomHex = Math.floor(Math.random() * colorRange)
  //console.log(randomHex)

  let randomColor = colors[randomHex]
  //console.log(randomColor)
  //return randomColor
  let randomColorString = randomColor.toString()
  //console.log(randomColorString)
  document.body.style.backgroundColor = randomColorString;
}
randomBackgroundColor()


//AutoRefreshed Quotes
// function autoRefreshQuotes(){
//   setInterval(document.getElementById("quote-box").innerHTML = htmlString, 1000)

// }
// autoRefreshQuotes()


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);