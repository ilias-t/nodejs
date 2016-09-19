<!--
	creator: Ilias Tsangaris
	market: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# NodeJS

### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

JavaScript has been a computer language exclusive to the browser; that is, until Node was developed. Using Node's environment, we can use JavaScript as a general purpose language for any computer process.

### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

* Explain what Node is & why it exists
* Compare and contrast Node's API with the DOM's API
* Write simple assertion tests in Node
* Perform file I/O in Node
* Spin up a simple web server using node
* Use organize code into modules and require it where necessary

### Where should we be now?
<!-- call out the skills that are prerequisites -->
*Before this workshop, developers should already be able to:*

* Navigate the terminal
* Have a proficiency in JavaScript

## What is Node?

The makers of Node took javascript (which normally only runs in the browser) and made it available in your computer (on the server side). They took Google's V8 JavaScript Engine and gave it the ability to compile JS programs into machine code.

#### Installing Node

To check if we already have Node installed, type: ``node -v`` in terminal. If not, install it now preferably using `brew` or `apt-get` depending on your operating system.

####Ryan Dahl

Ryan Dahl is the creator of Node. Here he [demonstrates](https://www.youtube.com/watch?v=jo_B4LTHi3I) the technology for one for one of the first times publicly.

####The Event Loop

![node event loop](http://i.stack.imgur.com/BTm1H.png)

Node really shines when it comes to heavy input-output type operations. This doesn't mean that other languages aren't capable of the same thing, it's just that by using the **Event Loop** *Node is "non-blocking" by default*.

>**Blocking**

>Imagine a paper delivery boy riding on his bike delivering papers every morning. Imagine he stops at each house, throws the paper on your doorstep, and waits to make sure you come out & pick it up before moving on to the next house. That would be what we'd call _blocking_ – each line of code finishes before moving on to the next line of code.

>**Non-blocking**

>Now, imagine the paperboy throwing the newspaper on your porch but never stopping his bicycle; 
never stopping, he just keeps throwing papers on porches, so that by the time you pick it up he'll be 3 or 4 houses down. That would be _non-blocking_, or _asynchronous_.

####Example of non-blocking code

**non-blocking-demo.js**

```js
console.log("oh hai");

setInterval(function() {
  console.log("hello");
}, 1000)

setInterval(function() {
  console.log("world");
}, 1000)

setTimeout(function(){
  console.log("again, we just want to say");
}, 2000)

setTimeout(function(){
  console.log("again again, we just want to say");
}, 4000)
```

```bash
node non-blocking-demo.js
```

There are several different processes all happening simultaneously and asynchronously in tandem. One of the processes does not block any of the others. They all can run independently.

#### Executing a JS program

Write and execute some code in a file! In your working directory:

```bash
mkdir first-node
cd first-node
touch main.js
echo "console.log('hello world');" >> main.js
node main.js
# hello world!
```

## Node's API Intro

Let's take at some parts of the [Node API](https://nodejs.org/api/). We can jump into the Node environment by simply typing `node` in the terminals.

Try typing `global` into the node repl.

>What does it return? How is this similar or different to the browser console?

What parts of the API interest you? Let's write down a few modules that you'll have time to research at the end on your own. During this workshop we'll discuss:

* Assert
* File System
* HTTP
* Module

## Assert

####Truthiness

The [`assert`](https://nodejs.org/api/assert.html) module allows us to test the truthiness of a piece of data in addition to comparing an actual result with an expected result. Using this module is how you could start integrating simple tests into your code.

**geo-assertions.js**

```javascript
'use strict'
const assert = require('assert');
const SF = {city: "San Francisco", country: "USA"};
const NY = {city: "New York", country: "USA"};
const HK = {city: "Hong Kong", country: "China"};

assert.equal(SF.country, NY.country);
// OK

assert.equal(HK.country, NY.country);
// throws Assertion Error
```

>Note: When using `const` or `let` you may run into this error: "SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode", which means in order to use them you have to run the file in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) by writing the string `'use strict'` at that top of the file. Strict mode throws more errors that could otherwise get unnoticed.

>Note: Read more about using [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const), for immutable variables, and [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let), for mutable variables, in the newer versions of the language.

####TDD-style tests

Similarly, you can test a function's actual output against its expected output. (This is TDD!)

**exclaim-spec.js**

```js
'use strict'
const assert = require('assert');
function exclaim(phrase) { return "" }
assert.equal(exclaim("hello there"), "hello there!");
// throws an error!
```

> Challenge: How could we build the function `exclaim` so that our assertion test doesn't throw an error?

<details><summary>Sample solution</summary>

```js
function exclaim(phrase) { return phrase + "!" }
```
</details>

## File I/O

####Writing to a file

We can access the file system (fs) in node in order write to a file.

**write-diary.js**

```js
'use strict'
const fs = require('fs');
const entry = "It was the best of times, it was the worst of times..."
fs.writeFile('my-journal.txt', entry, function (err) {
  if (err) throw err;
  console.log("wrote to file!");
});
```
And read it back as well!

**read-diary.js**

```js
'use strict'
const fs = require('fs');
fs.readFile('my-journal.txt', 'utf8', function(err, data) {
  if (err) throw err;
  console.log(data);
});
```

>Challenge: Use `fs` to write to a file called "dream-destination.txt" and fill it with the place you'd like to visit most in the world and why. Then read it back!

## HTTP Server

>Question: What is the purpose of a server?

Generally I don't want people to be able to access any data or files on my computer, so they should remain inaccessible to other connected to the same network as me by default. However, it could be nice if I could *share* or "serve up" specific data or files at my choosing. Enter the server!

**server.js**

```js
'use strict'
const http = require('http');
// defines some port to listen to
const PORT = 8080;

// handles requests coming in and sends a response to each
function handleRequests(request, response){
    response.end("<h1>It's alive!</h1>");
}

// create a server
const server = http.createServer(handleRequests);

// start the server
server.listen(PORT, function(){
    console.log("listening on port", PORT); // this code is run when the server starts
});
```

Once we have our server running others on our same network can hit the server on another computer from the same network simply by going to the server's IP address followed by the port.

To find your IP address:

```bash
ifconfig | grep "inet " | grep -v 127.0
```

It will be the first IP address displayed.

>Challenge: start a server on port 3000 that displays your name. Hit someone else's server from your computer.

## Code Organization

Once our files start getting larger it will be import to split them out into separate **modules**. Let's create a script `randomizer.js` that will also contain a function with the same name. If we export it, we can require it in any other script. 

**randomizer.js**

```js
'use strict'

// returns a random number between a min (inclusive) and max (exclusive) range
function randomizer(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

module.exports = randomizer;
```

Now assuming we want to run a lottery, we can use our randomizer to help us do so. All we need to do is require it with a relative path in order to import anything the `randomizer.js` script is exporting.

**lottery.js**

```js
'use strict'
const randomNumber = require("./randomizer");

const winningNumbers = [];
for(let i = 0; i < 10; i++) {
  winningNumbers.push(randomNumber(0,100));
}

console.log("tonight's winning numbers are", winningNumbers, "!");
```

Now let's try `node lottery.js`. Did we win!?

>Challenge: For the previous `server.js` example, split out the `handleRequests` function into a separate script and require it back into your server.

## Node's API Self-Exploration

<!--

ACTIVITY: Developer's vote on the parts of the API that seem most interesting. We split up the class into groups to do research (10m) on each and teach the rest of the class (5m) what they learned

-->

Time permitting, go back to a part of the [Node's API](https://nodejs.org/api/) your table is interested in researching. Take 10 minutes to do so and briefly summarize what you learned in writing.

Suggested [modules](https://nodejs.org/api/) include (but not limited to):

* [Debugger](https://nodejs.org/api/debugger.html)
* [Crypto](https://nodejs.org/api/crypto.html)
* [REPL](https://nodejs.org/api/repl.html)
* [Readline](https://nodejs.org/api/readline.html)
* [URL](https://nodejs.org/api/url.html)


## Closing Thoughts

* What is Node.js?
* What is the most global object in the Node environment?
* Why is Node's event loop useful?
* In Node, how do we organize code into modules to require elsewhere?

## Additional Resources

* [What is npm?](https://www.youtube.com/watch?v=x03fjb2VlGY) (to be discussed...)
* [Ryan Dahl Demo](https://www.youtube.com/watch?v=jo_B4LTHi3I)
* [Understanding the event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
