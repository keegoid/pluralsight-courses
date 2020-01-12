// Callback
// A function that Node will "call back" at a later point in time.
function cb(data) {
  // do something
}
someAsyncMethod(cb)

function keegan(makeLatte) {
  // drink latte
}
starbucks.makeMeALatte(keegan)

// Promises
const egg = chicken.makeChick() // it's a promise
egg
  .then(chick => raiseChick()) // success outcome
  .catch(badEgg => throw badEgg) // fail outcome

// REPL
// Read, Eval, Print, Loop
Math.random()
let answer = 42
3 == '3'

"PI" in Math
//true
"NaN" in Number
//true
"length" in String
//true
var person = { firstname:"Keegan", lastname:"Mullaney", age:41 };
//undefined
"lastname" in person
//true
delete person.lastname
//true
"lastname" in person
//false
"age" in person
//true

function today() {
  return new Date()
}
//undefined

today
//[Function: today]

today()
//2020-01-10T23:39:01.751Z

//.editor
// Entering editor mode (^D to finish, ^C to cancel)
function add(x, y) {
  return x = y
}

function random() {
  return Math.random()
}

// node REPL commands
// ctrl+D to exit or .exit
// .break to get our of editor
// .save filename to save the REPL session
// .load filename to load the lines from file and eval them
// . tab tab to see dot commands
// tab tab to see all commands

// node -p "os.cpus().length"
// node -p "process.versions.v8"

// process.env.VAL - can name your own environment variables for use in scripts or functions
// process.argv
// >process
// > process.stdout.write("hello\n")

// Javascript is based on ECMAScript which gets updates annually
// Babel is a Javascript compiler and supports more recent features

// npm i - this will install all package dependencies from a package.json file with versions
// specified in package-lock.json

// node i -D will install development dependencies (--save-dev)
// node i --production - will not install devDependencies

// npm version numbers
// 4.2.0
// major.minor.patch
// breaking changes . backward compatible . bug fixes
// ~1.2.3 - an update can install the most recent patch version i.e. 1.2.4
// ^1.2.3 - an update can install the most recent minor version i.e. 1.3.0
// semver.npmjs.com
