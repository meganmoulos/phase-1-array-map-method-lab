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
  return tutorials.map(title => {
    const words = title.split(' ');
    const wordArray = words.map(word => word[0].toUpperCase() + word.slice(1));
    
    return wordArray.join(' ');
  });
}


// split
// join
// change first letter of each word to capital 
// iterate over each word
// grab first letter 