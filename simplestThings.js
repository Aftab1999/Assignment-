// **Problem Number 4**
// const input = "the simplestThings in LIFE are alwaysThe best" Print the following output:
// "The Simplest Things In Life Are Always The Best"

const str = "the simplestThings in Life are alwaysThe best";


const result = str.replace(/([A-Z])/g,' $1');


const final = result.charAt(0).toUpperCase()+result.slice(1);

console.log(final); 

