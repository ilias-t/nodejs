![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# NodeJS

### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

JavaScript has been a computer language exclusive to the browser; that is, until Node was developed. Using Node's environment, we can use JavaScript as a general purpose language for any computer process.

### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

* Explain what Node.js is & why it exists
* Compare and contrast Node's API with the DOM's API
* Spin up a simple web server using node
* Use organize code into modules and require it where necessary

### Where should we be now?
<!-- call out the skills that are prerequisites -->
*Before this workshop, developers should already be able to:*

* Navigate the terminal
* Have a proficiency in JavaScript

## What is Node.js?

The makers of Node.js took javascript (which normally only runs in the browser) and made it available in your computer (on the server side). They took Google's V8 JavaScript Engine and gave it the ability to compile JS programs into machine code.

...RYAN DAHL

...Non Blocking(?)

#### Installing Node.js

To check if we already have Node installed, type: ``node -v`` in terminal. You will see the Node version if it's installed.

If it's not installed, you can install from the Node.js website, or better yet, use Homebrew like this:
```
brew install node
```

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

## File I/O

* [](http://blog.modulus.io/absolute-beginners-guide-to-nodejs) (fs section)

## HTTP Server

* [](http://blog.modulus.io/build-your-first-http-server-in-nodejs)

## Code Organization

* (Split out `handleRequests` into seperate file)
* (Challenge: do this with another function...)

## npm

## Node's API Self-Exploration

<!--

ACTIVITY: Developer's vote on the parts of the API that seem most interesting. We split up the class into groups to do research (10m) on each and teach the rest of the class (5m) what they learned

-->

* [Node's API](https://nodejs.org/api/)


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

...