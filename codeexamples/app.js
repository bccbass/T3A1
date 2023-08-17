// const quoteWrapper = document.getElementById('quotewrapper');


// fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=5')
//     .then(res => res.json())
//     .then(data => {
//         for (let quote of data) {

//             quoteWrapper.innerHTML += `<h2>${quote.quote}</h2><h3>- ${quote.character}</h3> <img src="${quote.image}" alt="" width="30" height="auto"> <hr>`
//     }} )

// import quotes from './quotes.json'

import fs from 'fs'
let rawdata = fs.readFileSync('./quotes.json')
const quote = JSON.parse(rawdata)[0]
console.log('Parsed JSON -> ', quote)


// create episode info object to add to the quote 
const episodeInfo = {
    season: 6,
}

// add episode info object to the quote
quote.episodeInfo = episodeInfo

console.log('episodeInfo object added to quote -> ', quote) 

quote.episodeInfo.name = "Bart Of Darkness"

console.log('name added to episodeInfo object of quote -> ', quote) 

const data = JSON.stringify(quote, null, 2)

fs.writeFileSync('./quotes.json', data)

const arr = [true, "Hello", {Name: "Ted", isCat: true}, [1, 2, 3]]