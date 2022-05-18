const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function(tutorial) {
    // Splits the sentence by spaces and capitalizes each word
    const modifiedWords = tutorial.split(' ').map(function (word) { 
        return word = word[0].toUpperCase() + word.substring(1, word.length)
    })

    // Recombines all the modified words back into a sentencee
    let endIndex = modifiedWords.length
    tutorial = modifiedWords[0]
    for(let i = 1; i < endIndex; i++ ) {
      tutorial = tutorial + " " + modifiedWords[i]
    }
    return tutorial
  })
}
