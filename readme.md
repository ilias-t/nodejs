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
* Spin up a simple web server using node
* Use organize code into modules and require it where necessary

### Where should we be now?
<!-- call out the skills that are prerequisites -->
*Before this workshop, developers should already be able to:*

* Navigate the terminal
* Have a proficiency in JavaScript

## What is Node?

The makers of Node took javascript (which normally only runs in the browser) and made it available in your computer (on the server side). They took Google's V8 JavaScript Engine and gave it the ability to compile JS programs into machine code.

####Ryan Dahl

* Creator Ryan Dahl [demonstrating Node](https://www.youtube.com/watch?v=jo_B4LTHi3I).

####The Event Loop

![node event loop](http://i.stack.imgur.com/BTm1H.png)

Node really shines when it comes to heavy input-output type operations. This doesn't mean that other languages aren't capable of the same thing, it's just that by using the **Event Loop** *Node is "non-blocking" by default*.

>**Blocking**

>Imagine a paper delivery boy riding on his bike delivering papers every morning. Imagine he stops at each house, throws the paper on your doorstep, and waits to make sure you come out & pick it up before moving on to the next house. That would be what we'd call _blocking_ – each line of code finishes before moving on to the next line of code.

>**Non-blocking**

>Now, imagine the paperboy throwing the newspaper on your porch but never stopping his bicycle; 
never stopping, he just keeps throwing papers on porches, so that by the time you pick it up he'll be 3 or 4 houses down. That would be _non-blocking_, or _asynchronous_.


#### Installing Node

To check if we already have Node installed, type: ``node -v`` in terminal. If not, install it now preferably using `brew` or `apt-get` depending on your operating system.

#### Executing a JS program

Write and execute some code in a file! In your working directory:

```bash
mkdir first-node
cd first-node
touch main.js
echo "console.log('hello world!');" >> main.js
node main.js
# hello world!
```

## Node's API Intro

Let's take at some parts of the [Node API](https://nodejs.org/api/). We can jump into the Node environment by simply typing `node` in the terminals.

Try typing `global` into the node repl.

>What does it return? How is this similar or different to the browser console?

What parts of the API interest you? Let's write down a few modules that you'll have time to research at the end on your own. During this workshop we'll discusss:

* Assertion Testing
* File System
* HTTP
* Modules

## Assertion

## File I/O

* [](http://blog.modulus.io/absolute-beginners-guide-to-nodejs) (fs section)

## HTTP Server

* [](http://blog.modulus.io/build-your-first-http-server-in-nodejs)

## Code Organization

* (Split out `handleRequests` into seperate file)
* (Challenge: do this with another function...)

## npm

npm started a the "node package manager", but accoring to npm it now apparently doesn't stand for anything. Either way, it's a tool that allows us to easily download community-built node modules.

You can initialize a new node project using npm with `npm init -y` and install packages like `lodash` with `npm install --save lodash`.

npm uses a file called `package.json` to track *dependencies* and *metadata* assciated with the project.

A seperate `node_modules` directory is where the modules your project requires will be housed. When using git, be mindful to add `node_modules` to a `.gitignore` file so it is *not tracked by git*.

At this point you can share the project code and future developers will run `npm install` to get the packages listed in `package.json` (instead of through git), which save git from also having to track a large `node_modules` folder.

> Challenge: initialize a new project and use npm to require `express` in it. Follow the best practices listed above so you could easily share the project with another developer.

## Node's API Self-Exploration

<!--

ACTIVITY: Developer's vote on the parts of the API that seem most interesting. We split up the class into groups to do research (10m) on each and teach the rest of the class (5m) what they learned

-->

Going back to the many parts of [Node's API](https://nodejs.org/api/), take 10 minutes for your table to research a module that we didn't discuss but interests your group. Be prepared to have someone in the group speak about it for a few minutes thereafter.

Suggested modules include (but not limited to):

* Debugger
* Crypto
* Error
* REPL
* Readline
* URL


## Closing Thoughts
<!--
- review objectives & hierarchy of importance
- look ahead & link to future workshops
- clarify expectations and what developers should know by now
- reiterate “the why” with a perspective of your intentions
- create an active recall
- Check for understanding
-->
## Additional Resources

* [What is npm](https://www.youtube.com/watch?v=x03fjb2VlGY)