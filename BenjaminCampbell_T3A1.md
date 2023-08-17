## Q1: Provide an overview and description of a standard source control process for a large project

Source control is one of the most integral parts of developing a large project with a team of developers. It provides tools and protocols for feature development, bug fixes and version tagging that allows a team to modularly develop different sections of a code base without disturbing a working branch, only integrating changes when certain criteria are met and approved. When beginning a large project a central repository is established with the projects source code, assets, documentation, and other related files. Depending on the projects size and needs an individual developer will either clone or fork the required repository to begin development. A branching strategy is employed to determine how a developer will work on their tasks atomically, so as not to disturb the working production code base. A typical feature branch flow involves a developer creating a new, descriptively named, feature branch: this allows for code back-up and collaboration without disturbing the main branch. The developer will work on their feature, hot fix or other code, going through the standard stage, commit, push cycles until complete. At this stage a pull request for the branch is submitted and will be reviewed by team mates, commented on and either approved or have revisions requested. Once the pull request is approved the developers branch will be merged into the main branch, with merge conflicts being addressed if necessary. After successful merge the feature branch will be deleted to keep the repository well organized, with optimized performance.
One current development paradigm is to use continuous integration and continuous deployment (CI/CD) practices to continually build, test and deploy code changes. Many times large projects will implement a 'prod' or 'production' repository branch to silo the production code base. CI/CD depends on a robust automated testing framework to ensure quality code will be integrated into the production branch and deployed. 
Well written and properly maintained documentation is crucial for a large project to track features and details of a projects codebase as well as to document production protocols such as branching strategies, code and style guidelines, project workflows, and any other information pertinent to to the projects production practices. 

<br/>  

## Q2: What are the most important aspects of quality software?

There are many elements to consider when defining quality software. They can reasonably be divided into three main sections: functionality, structure and process. Functionality is the value provided to the end user with a clear user interface to supply a product to meet a need such as professional tools, entertainment or solving a problem. Structure is comprised of the actual quality and maintainability of the code. Finally process is the efficiency, effectiveness and business concerns of the creation process, including delivering a final product by a given deadline and within given budgetary constraints.

### Functionality:
The functional success of software can be determined by how usable it is and how much value it provides the targeted end user. It should elegantly solve a problem, enhance or promote productivity and creativity, provide entertainment or any combination of these attributes or more. Quality software should have a clear user interface that lowers barriers to interaction and use; when the software is more complex it should have well written and accessible documentation outlining and explaining all features for the user to master. Great software is written efficiently to reduce any lag or run time deficiencies. It should operate with very few to no bugs which would limit functionality or reduce security for the end users data. Software should be portable across many platforms and operating systems. Accessibility concerns should be taken in to account to accommodated various physical or neurological conditions that may require reasonable consideration to create a great experience for all users.

### Structure
Structural quality of code relates to the actual code base. A codebase should strive to be easily maintainable; creating or updating features should be able to be seamlessly integrated into the project. The codebase should be clearly understandable and self documenting; this reduces the amount of time it takes for other developers to learn the project codebase and be effective in its maintenance and development. It should be testable, and the testing suite should be thorough and easily run. Code should be modular to promote maintainability, reusability and DRY principles. The codebase should be secure and take care to encapsulate any sensitive system data, pass keys and user information; it also must anticipate security threats by malicious actors and over-engineer its security protocol. Lastly, the codebase should be written to be as performant as possible while taking into consideration the conservation of system resources such as processing and storage. 

### Process  
Quality in the software process is concerned with the actual act of creating the product. Its main rubric for success is delivering a quality product on time and within a proscribed budget. It is also extremely important to ensure that the actual development process is productive, sustainable and repeatable so that in the context of a CI/CD approach developers are able to consistently deliver a great product without burnout and fatigue. This is important to avoid employee attrition and loss in productivity which would negatively affect every measure of quality software mentioned thus far. 



Reference list

Chappell, D. (n.d.). THE THREE ASPECTS OF SOFTWARE QUALITY: FUNCTIONAL, STRUCTURAL, AND PROCESS Sponsored by Microsoft Corporation. [online] Available at: http://www.davidchappell.com/writing/white_papers/The_Three_Aspects_of_Software_Quality_v1.0-Chappell.pdf.

Reinagel, S. (2016). The Seven Aspects of Software Quality. [online] Silas Reinagel. Available at: https://www.silasreinagel.com/blog/2016/11/15/the-seven-aspects-of-software-quality/.

‌
<br/>  

## Q3: Outline a standard high level structure for a MERN stack application and explain the components

A standard MERN stack application is a web application that uses the MongoDB, Express, React, Node tech stack. It is comprised of two main sections: frontend and backend. 

### Frontend
The frontend is the interface that is viewed in the browser, providing logical and well defined functionality for the user to interact with the application and its backend assets. It operates on the client side and is built using React, a JavaScript library for creating user interfaces. While applications can take many forms a common use case would be social media app where users can create and view posts, add comments and delete and edit assets that they are the 'owners' of. These are known as basic CRUD operations: create, read, edit, delete. 

### Backend
The backend of a MERN stack application is responsible for storing and serving the data that an application requires. It consists of an API built using NodeJS and Express, implementing Mongoose as an ODM to interact with with a MongoDB database. The API is built using NodeJS and Express and stores API endpoints and routes for the frontend to interact with. It is where much of the business logic occurs, including authentication, authorization, all basic CRUD routes and database functionality. It is configured to accept incoming client requests and serve appropriate responses, as well as to gracefully handle all errors and malformed requests. API responses in MERN apps often take the form of json objects that are requested and returned from the MongoDB server.   

*NodeJS*
Because JavaScript was designed to only run in a browser environment it was initially not possible to use as a backend, server-side language. In 2009 NodeJS was released and allowed developers to run JavaScript outside of a browser environment. This enabled asynchronous server and network applications to be built using JavaScript language in a runtime environment. This allows for an environment to configure database connections with MongoDB via Mongoose and the application API using Express.

*Express* 
Express is a lightweight backend framework for node to create RESTful APIs. It is responsible for defining API endpoints and routes to accept incoming network requests and serve valid responses. Both predefined and user defined middlewares can be implemented to create reusable and modular functionality, including for purposes of data sanitization, authentication and authorization. 

*MongoDB*
The database used in a MERN stack application is MongoDB, a NoSQL document database. Its strengths lie in its flexibility, speed and ease of editing or updating database structures. Mongoose is the ODM generally used to interact with a MongoDB database, providing additional functionality for creating schemas and models in order to better structure and define a database collection. This is especially useful in a noSQL database to keep documents organized and consistent. MongoDB databases can be stored locally, but are typically stored on dedicated cloud services such has MongoDB Atlas or AWS - these platforms are optimized for database performance and provide many options for project scalability. 

### Putting it all together
Using the simplistic social media example proposed before: The user navigates to the applications web url where the entire react application is requested and served from the application host. This React front end is stored in the browsers local memory in whole and will not need to re-render to access its various views; they're already locally accessible. On loading, the frontend will make a request to the backend API endpoint needed to fetch a list of all posts that are to be displayed on the homepage. The running API receives this request and executes the logic associated with the requested route. It then makes an async request to the database stored on MongoDB Atlas to retrieve the list of requested documents. The API then deserializes it into a native Node/Javascript object and returns a response consisting of a json object containing the requested database documents.The React front receives this response and a component or components tasked with displaying the posts will take the json object, deseralize it to a native JavaScript object and perform logic to inject its data into JSX objects to be displayed on the web page for the user to view and interact with. 

<br/>

## Q4: A team is about to engage in a project, developing a website for a small business. What knowledge and skills would they need in order to develop the project?

In order for a team to successfully deliver a production level website for a small business they would need to possess a large combination of both soft and hard skills. Depending on the chosen tech stack, the team would need both frontend and backend skills. One standard approach would be to use a MERN stack: MongoDB, Express, React and NodeJS. The team would need to understand the overall all application structure between the front end and backend as well as how data is transferred between the frontend, api and database. They should have a sense of software engineering approaches such as REST and MVC designs. The front end would not only require knowledge of React to create a usable user interface, but would also involve a solid understanding of design and UI/UX concepts, accessibility in code with implementations of semantic html, single page application behavior and the ways they simulate routing via url addresses. Backend skills would included understanding routers and routing in express, connecting an express framework to a database, implementing Mongoose as an ODM to interface with MongoDB, implementing mongoose schemas and models as well as broader database design concepts. 
The team would need to have a thorough understanding of software security best practices to protect the website agains malicious actors, protecting and   business and user data from unauthorized access. Understanding authorization and authentication as well as outside tools for implementations such as bcrypt, jwt tokens and OAuth are also required to site integrity. 
Proper project management tools such as development and source control would be necessary for the teams success. A project management protocol such as Agile would be instrumental in giving the development process structure and providing a framework for planning, tracking and orchestrating development sprints. The team must also understand git and online source control platforms such as GitHub in order to manage and develop a working code base. Knowledge of different source control approaches, such as feature branch or gitflow approaches, and choosing the best suited approach for the project is also paramount to creating a well functioning project protocol. 
The team must understand deployment for their project to be successfully launched to the public. This involves understanding how to host the front end, backend API as well as the database. Configuring the three major components to communicate to communicate with each other over the network, encapsulating any sensitive pass keys and other environment variables as well as optimizing performance on various hosting platforms is also essential to project success. 

Finally, in addition to hard skills, a team is equally dependent on its members soft skills. These are the individual qualities that foster a healthy and productive team that can work harmoniously together to deliver a quality product. These skills include team work, communication, adaptability, flexibility, patience, persistence and maybe a sense of humor to smooth over any minor hard times that might arise. While these qualities are more amorphous and intangible than hard coding skills, they are equally as important to a projects success; they ensure a team can communicate and function smoothly during potentially challenging circumstances, and for extended periods, in order to deliver a quality product. 

<br/>

## Q5: With reference to one of your own projects, discuss what knowledge or skills were required to complete your project, and to overcome challenges

When beginning a new project there will be some amount of soft and hard skills needed to produce a successful result. Both categories complement each other and when combined synergistically create a functional production environment. For the Terminal Application project from the first term I relied heavily on many of these newly acquired skills to produce a game of of Yahtzee to be played in the terminal. 

### Soft Skills
Soft skills can be seen as non-technical knowledge or attributes that are necessary to function productively on a team or at a job. 
these are things such as team work, systems thinking and attitude. In reflecting on my experience with the Portfolio Project I tasked myself with leveling up some lacking soft skills that made the project less successful than anticipated; time management, detail oriented understanding of the brief and using proper project management approaches.

- Creativity and understanding of scope to come up with a project idea that is engaging, fulfills the project brief and is possible given the required skill level and time constraints.
- Time management to parse different needs of the project, set deadlines and stick to them in order to comfortably deliver the project in time.
- Perseverance and self-knowledge to handle blockers and obstacles: knowing when to push through to a solution and when to step away for an hour to rest and gain perspective. There were many times when I had to make a call to step away from the project for a few hours, and that perspective gave me the space to solve blockers more effectively.
- Flexibility and adaptability: periodically taking a step back to evaluate the progress and scope of the project. This entails evaluating progress and unforeseen development issues, calculating if they affect the outcome and timing of delivering the project, and finally finding a solution that will still yield a successful delivery of the project within the time constraints. This was helpful when midway through the project I realized that delivering the bottom half of the game board was becoming likely to negatively affect other more important aspects of the project. By leaving it as a stretch feature to implement at a later date I was able to deliver a higher quality project that met the MVP and fulfilled the assignment rubric.

### Hard Skills
Hard skills are more tangible and quantifiable. They include knowledge and proficiency in languages, frameworks and other technologies. The Yahtzee project required me to look at the overall goals of the project and evaluate which hard skills would best be suited to apply toward the project. 
- General grasp of the Python language and broader software development approaches such OOP and functional programming. OOP was heavily implemented when constructing classes for Dice, Players and Cards. All of these classes implemented setters, methods and properties to create an efficient and well organized code base. 
- Understanding PyTest and Test Driven Development (TDD) concepts: TDD was implemented to craft the logic to discern a players hand and respond with appropriate category choices. Tests were written first and the algorithms were written second and then incorporated into a method on the Card class. 
- Functional programming: Used to construct functionality for discerning card hands and stored in the card.py module, imported to be included in class methods on the Card class.
- Error handling: Implementing graceful error handling is paramount in creating seamless software that is enjoyable for a user. One has to become quite creative about all the ways their code could break and anticipate problems by implementing input validation and error handling. 
- Auxiliary languages and tools: including BASH for the scripts, Markdown for the documentation, PIP for importing packages and creating requirements files, Git/GitHub workflows for source control and working with JSON in the games score log. 

### Overcoming Challenges:
There were many obstacles and roadblocks that occurred throughout the projects creation; time management, unanticipated bugs, self-doubt and overly ambitious goals. Persistence and adaptability were the main elements implemented to overcome these various challenges. Taking a step back, re-evaluating approach when necessary, and implementing the previously mentioned hard and soft skills to overcome the obstacles was key in working through these tough times. The process was truly intense all the way until the end - in the 11th hour my entire install script (which had been working for days) met an unforeseen bug, causing me a mild heart attack. This final challenge was met by taking a deep breath, focusing the information I had available to me and getting curious as to what had gone wrong. Thankfully the cause of the but found quickly and the project was successfully submitted. 

[Yahtzee! Repository on GitHub](https://github.com/bccbass/T1A3-src)

<br/>

## Q6: With reference to one of your own projects, evaluate how effective your knowledge and skills were for this project, and suggest changes or improvements for future projects of a similar nature

In reflecting on my Portfolio assignment I can identify areas of strengths, but more importantly knowledge and experience that was lacking to produce the most effective product. This assignment was particularly challenging for me as the first weekend I had to work on it was spent moving from the US to Australia and getting settled. 

In creating the portfolio website I had a decent conceptual grasp of html and css and how they worked together. I knew that keeping my code organized would be something to keep an eye on, and did my best to implement css classes to keep my code more concise and DRY. The over all concepts of flexbox were 'clicking' and I was able to use it liberally in my implementation. I had a decent foundation of understanding HTML architecture and different css properties to achieve desired effects. A reasonable grasp of these more granule and practical concepts lent me some amount of confidence in undertaking the project, but also created a blindspot for the big picture conceptualization and project planning. 

My biggest shortcoming was that I failed to plan in enough detail. I opted to hand draw wire frames instead of using an industry standard wire-framing platform. I did not flesh out my ideas or mock up components with enough detail. I only created a very rough site flow and architecture that was not providing enough stylistic or architectural information before I began coding. All of this meant that instead of simply implementing a pre-determined design with my code I was using my code to design: a true example of putting carts before horses.  

Additionally, by starting to code before having a development design and plan firmly in place, I neglected to follow the directive to design with a mobile first approach. While this wasn't the end of the world, it did make it more difficult to make the site responsive, and undermined my confidence for missing that directive. 

Other areas that I would like to improve on are becoming stronger at understanding and writing semantic HTML to make my code more accessible, clearer and add a level of self documentation. I would also like to become more economical with how I structure my css by modularizing and using classes effectively to make styling more reusable and consistent. 

While the end result of the project was acceptable it was not to the standard I had envisioned. On the last term break I decided to attempt a new portfolio website, but this time implemented a more thorough design and planning approach - *before I began coding.* I implemented fully designed site mockups for all standard views, and took the time to think through and edit how interactive components would work in situ. While not perfect (I'd like to make my html more semantic and my css more modular), I am much happier with the result. My main take aways from the Portfolio project were appreciating the importance of planning, attention to detail and taking time to fully understand the directions of a given brief. 

[Orignal Portfolio Website](https://benjamin-campbell-t1-a2.vercel.app)  

[Updated Portfolio Website](https://benjamincampbell.dev)

<br/>

## Q7: Explain control flow, using an example from the JavaScript programming language

Control flow is the order in which a computer program executes its code. JavaScript execute sequentially, line by line from top to bottom. In order to control the flow that a program executes conditional logic, loops and functions can be implemented. Additionally, JavaScript can be written asynchronously to further control flow and change the order in which code blocks are executed. 

### Conditional Logic:  
The backbone of JavaScript conditional logic is the Boolean. A Boolean is either True or False, and combined with conditional logic it is possible to create more complex, dynamic and flexible programs. With these structures we are able to control under which conditions certain blocks of code will be executed, and when. This alters the default control flow of top to bottom execution. JavaScript supplies multiple mechanisms for conditional logic including if, else if and else statements, ternary operators and short circuit logic. The core of these statements is 'if an input evaluates to <true>, run this particular code block'. A few simple examples: 

```javascript
if (thisCondition === true) {
    console.log("The IF statement code block ran")
}
else if (anotherCondition === true){
     console.log("The ELSE IF statement code block ran")
}
else {
    console.log('Neither the if or else if statements were true, so the ELSE statement ran')
}
```
When a statement has exactly two, single expression code blocks to run depending on a condition a ternary expression can be implemented:
```javascript
thisCondition === true ? 'I return when the condition is true' : 'I return when the condition is false'
```
And when there is only one code block to run if, and only if, a statement is true short circuit ternary logic can be implemented:
```javascript
const shortCircuitTernary = true && "This side of the operand will be the return value if the first condition is true"
```

### Loops:
Loops alter the control flow of a program by executing a block of code a certain number of times, determined by some conditional logic. The most common conditions that determine a loops behavior are a loop will execute until: a condition evaluates to false, a predetermined number of times, or for every item in an array or object. In JavaScript for a loop to run until a condition evaluates to true a while loop is implemented. For a loop to run a predetermined number of times a for loop is most common (and can also be used to iterated over an array and visit all of its items). The for of and for in loops are used to iterate over arrrays and objects respectively, with a for of loop visiting each array item on every iteration, and a for in loop visiting each object key on every iteration. 
```javascript
const myArray = [1, 2, 3]
for (let item of myArray){
    console.log(item)
}
    // expected to log: 
    // 1 
    // 2 
    // 3

```
```javascript
const myObject = {
    firstKey: 'I am first',
    secondKey: 'I am second',
    thirdKey: 'I am third'
}
for (let key in myObject){
    console.log(key + ': ' + myObject[key])
}
    // expected to log: 
    // firstKey: 'I am first'
    // secondKey: 'I am second'
    // thirdKey: 'I am third'
```

JavaScript provides many array methods to loop over arrays and interact with their contents including map, forEach, reduce and filter.

Another mechanism in JavaScript that can be powerful in controlling flow is the Switch statement. Switch statements work by comparing an argument with a number of possible conditional matches or 'cases'. If an argument matches a supplied conditional case then its associated block of code will run. Switch statements 'fall through' so if there is a case match not only will its code block run, but each subsequent cases code block also executes. This cascade behavior can be ameliorated by using a break statement to exit out of the switch statement after running a code block. Additionally a default block of code can be supplied and will run if there is no case match. 

The break and continue keywords can be used to further adjust control flow within loops. The break keyword is used in a code block to exit out of the loop and cease all remaining iterations. The continue keyword can be used to continue to the next iteration of the loop. 

### Functions:

Functions can alter control flow by taking in zero or more arguments and executing a static or dynamic code block which itself can contain loops, conditional logic or even other functions, all altering the overall flow of a program depending on where they are invoked and what arguments are passed in. 

### Asynchronous JavaScript:
One of the most useful and more novel things in JavaScript is its use of asynchronous behavior by implementing callbacks, promises and async/await. Because JavaScript is the language of the web there are many tasks that require time to complete such as making making API requests or working with a database. With all of the previously mentioned ways to control flow in JavaScript it still executes top to bottom, and is blocking. This means that if a block of code is taking a long time to complete it will hold up or block all subsequent code from executing. This makes for a terrible user experience in a web based application with all of the user interactions and network requests. However, JavaScripts use of client webAPIs and the event loop can take these asynchronous tasks out of the stack flow, adding them as webAPIs to a holding area. When an asynchronous webAPI is resolved its callback is pushed to the callback queue to wait. As soon as the stack is clear the event loop pushes the callback onto the stack for it to finally be executed. This allows for smooth operation and a much more pleasing user experience. 

```javascript


function importantCode() {console.log("This is very important, time sensitive code!")}

fetch('http://ourAwesomeAPI.come/endpoint.json')
    .then(response => response.json())
    .then(data => {console.log(`something important done with: ${data}`)}

importantCode()
```
In the previous example the use of chained promises allows our 'importantCode' function to run and not be blocked by an api request that might take a long time to complete. This allows us to control the flow of our program even further, keeping the code execution running smoothly. 

<br/>

## Q8: Explain type coercion, using examples from the JavaScript programming language

Type coercion is a process that automatically or implicitly converts the data type of an object into another type. This differs from type conversion in which an objects data type explicitly changed - meaning the catalyst of the conversion is deliberately invoked or enacted. Many times different languages have different sets of rules for when and how data types are coerced. In JavaScript this can be seen in the ways numbers and strings are converted when attempted different mathematical operations. In JavaScript if a string is added to a number the number will be implicitly converted to a string and the values will be concatenated:
```javascript
    console.log(50 + '50')
    // expected result: 5050
    console.log(50 + 'Hello world')
    // expected result: 50Hello world
```
However, if string representation of a number is given to a mathematical operation other than addition JavaScript will automatically convert it to a number and return the result:
```javascript
console.log('5' * '5')
// expected result: 25
console.log('5' ** 2)
// expected result: 25
console.log(25 % '5')
// expected result: 0
```

Another way JavaScript uses type coercion is by converting booleans to a number when they are inserted into mathematical operations with another number. True becomes 1 and false becomes 0:
```javascript
console.log(true + 4)
// expected result: 5
```

However when a boolean is added to a string it will be converted to a string as well:
```javascript
console.log(true + 'hello world')
// expected result: truehello world
```

JavaScript leverages type coercion in conditional statements by making available both the loose equality operator (==) and the strict equality operator (===) when comparing values. The loose equality operator will attempt to coerce the type of both values when comparing them in a good faith effort to try to find equivalency. The strict equality operator will not coerce type, returning a more literal and exact comparison:
```javascript
console.log(5 == '5')
// expected result: true 
console.log(5 === '5')
// expected result: false 
```

Every language may implement type coercion differently making it important to understand any idiosyncrasies to avoid unforeseen behavior and much frustration. 

<br/>

## Q9: Explain data types, using examples from the JavaScript programming language

Data types are implemented in programming languages to dictate how different types of data may operate within it. They are necessary structures to ensure code can be safely written, following a set of proscribed rules and consistently deliver expected behavior. JavaScript is a dynamically typed language, meaning variables can contain any type of data, and be re-assigned to differing types of data. It is also a weakly typed language, allowing for type coercion when possible as a way to execute code without throwing errors. When an incorrect data type is introduced and cannot be resolved through type coercion a type error is thrown, preventing further execution of the code. 
```js
3 + 'Hello'
// evaluates to 3Hello

3 * 'Hello'
// evaluates to NaN

const hello = 'World!'
Hello()
// Throws an Error -> Uncaught TypeError: hello is not a function 
```
The addition operator attempts to coerce the Number to a string for concatenation, where the multiplication operator cannot turn the string into a number so returns Not a Number to let us know the operation is not mathematically possible with the given data types. When the `hello` variable is initialized to a string value and then attempted to be called as a function a TypeError is thrown: a string is not callable and it is impossible to coerce and execute this code.


#### Primitive types

**Numbers:** An interesting feature in JavaScript is that all numbers are floats that are stored as 64 bit floating point numbers. This creates the need for a second numerical data type `BigInt` which becomes necessary to safely store numbers greater than 9007199254740991.

**Strings** are an indexed collection of characters with many built-in methods to manipulate and access the data within.

**Booleans** are the foundation of conditional logic in all programming languages, and JavaScript is no different. They are comprised of `true` and `false`. They are closely tied to binary operators `1` and `0`. As such, in javascript booleans evaluate to a number and can be used in mathematical expressions: true = 1 and false = 0.

```js
true + true
// evaluates to 2
```

**Null and Undefined:** JavaScript also has data types for data that is not there: `undefined` and `null`. While these may seem confusingly similar `null` represents no returned object or value, where `undefined` represents a variable that has not been defined or assigned an initial value. 

#### Non-Primitive types

Objects in JavaScript are considered non-primitive data types and fall to one of three categories: objects, arrays and functions. Objects are non-indexed collections of key/value pairs. Arrays are an indexed collection of values and objects.

Functions in JavaScript are also first-class objects. They are callable objects that contain blocks of code to be executed. They can be assigned to variables and properties, and have properties and methods of their own. Additionally, functions can also be passed to and returned from other functions. 

#### typeof
When in doubt of what data type a given object is, the `typeof` operator can be used to return a string specifying the objects data type. 

#### TypeScript
TypeScript was created as a means to use JavaScript more similarly to strongly typed languages like C+ or Java. It requires all variables to have a predefined data type, including function parameters. It also requires functions to define the expected data type of their return values. Once defined, variables may only contain values of their predefined data type. While TypeScript may be more complicated at the onset it has the benefit of more clearly defined code and a reduction of type errors.

<br/>

## Q10: Explain how arrays can be manipulated in JavaScript, using examples from the JavaScript programming language

Arrays in Javascript are an indexed collection of objects. An array can be heterogeneous and contain any valid JavaScript datatype:

```javascript const arr = [42, true, "Hello", {Name: "Ted", isCat: true}, [1, 2, 3]]```

JavaScript has many different ways to work with and manipulate arrays including standard 'for' and 'for... of' loops as well as a huge set of array methods built into the Array prototype. 

### Adding/removing from the beginning/end of an array:
Push and pop are methods that will add or remove the last element from an array, respectively. In addition to removing the last element Pop will return its value. 

Conversely, unshift and shift are methods that will add or remove the first element from an array, with shift returning the value of the first element. 

These methods mutate the original array. 

### Concatenation
Arrays can be concatenated using many means including the concat method or more literally using the spread operator. 
```javascript

const arrOne = [1, 2, 3, 4, 5]
const arrTwo = [6, 7, 8]

console.log(arrOne.concat(arrTwo));
// Expected result: [1, 2, 3, 4, 5, 6, 7, 8]

console.log([...arrOne, ...arrTwo]);
// Expected result: [1, 2, 3, 4, 5, 6, 7, 8]
```

### Loops
Because Arrays are iterable they can be looped over in many different ways, most commonly with a 'for' loop of a 'for... of' loop. For loops are used when there is a set number iterations needed. The for loop has a three part structure: 1. set up index (let i) 2. set up condition/range that the loop will stop running under (i < myArray.length) 3. Action to take after the code block has run, usually an incrementor or decrementor (i++) Most commonly this can be seen with looping over every element of an array:
```js
const myArray = [1, 2, 3, 4, 5]
for (let i = 0; i < myArray.length; i++) {
    console.log(`Element at myArray index ${i} is ${myArray[i]}`)
}
// expected output: 
// Element at myArray index 0 is 1
// Element at myArray index 1 is 2
// Element at myArray index 2 is 3
// Element at myArray index 3 is 4
// Element at myArray index 4 is 5
``` 

A 'For... of' loop iterates over an array, but instead of working with an index it passes the actually element of each iteration to the code block:
```js
const animalArray = ['Emu', 'Wombat', 'Kangaroo', 'Gallah']
for (const animal of animalArray){
    console.log(`${animal} is an element of the animalArray`)
}

// expected output:
// Emu is an element of the animalArray
// Wombat is an element of the animalArray
// Kangaroo is an element of the animalArray
// Gallah is an element of the animalArray

```
'For... of' loops are particularly useful when working with node collections and the DOM. The queryAll method returns a node list which is array-like, but not an array. Because of this built in array methods like forEach and map will not work, but a 'for... of' or 'for' loop will work. 

### Array Methods:
The Array prototype contains multiple methods that are extremely useful and powerful when working with javascript arrays. Some of the most common array methods are `forEach`, `map`, `filter` and `reduce`. These methods work by chaining them to an array with dot notation and passing in a callback function to define functionality.


#### forEach: 
This method returns nothing. Its callback parameters by position are: the array element at current iteration, the current elements index, the array. The callback code block can then use these parameters within its logic. In many cases it can be used much the same way a 'for' or 'for... of' loop would be used.

```js
myArray = ['zero', 'one', 'two', 'three']
myArray.forEach((element, index) => console.log(`Element at index ${index} is ${element}`))

// expected output:
// Element at index 0 is zero
// Element at index 1 is one
// Element at index 2 is two
// Element at index 3 is three
```

#### map: 
The map method returns a new array. Its callback parameters by position are: the array element at current iteration, the current elements index, the array. Map returns an array with the result of running the callbacks code block on each element:
```js
const myArray = [1, 2, 3, 4, 5]

myArray.map(num => num * 10)

// expected output: [ 10, 20, 30, 40, 50 ]
```

#### filter
The filter methods callback parameters by position are: the array element at current iteration, the current elements index, the array. Filter returns a new array containing all the arrays elements that evaluated to truthy from the callbacks code block:
```js
const myArray = [1,2,3,4,5,6,7,8,9,10]
// find all odd numbers:
myArray.filter(num => num % 2 != 0) 

// expected output: [ 1, 3, 5, 7, 9 ]
``` 

#### reduce 
The reduce method is a bit trickier than the previous methods. It returns a single value. It accepts a callback and an optional initial value. The callbacks parameters are an accumulator and the current element. Its goals is to 'reduce' the array to a single value. A very simple implementation can be seen in finding the sum of all elements of an array:
```js
const myArray = [1, 2, 3, 4, 5]
const initialValue = 0
myArray.reduce((accumulator, element) => {return accumulator + element}, initialValue)

// returns 15
```

#### Manipulating targeted elements with the Splice method:
The splice array method can be used to insert, remove, and alter targeted elements of an array. The method takes from 1 to 3 arguments. Splice alters the original array. The returned value is an array containing any elements removed from the array. The first argument is the insertion point into the array. The second argument (optional) is the number of elements to remove. The third argument (optional) will be inserted into the array. 

```js
const animalArray = ['Emu', 'Wombat', 'Kangaroo', 'Gallah']
const lastTwoAnimals = animalArray.splice(2)
console.log(animalArray)
console.log(lastTwoAnimals)
// expected output:
// [ 'Emu', 'Wombat' ]
// [ 'Kangaroo', 'Gallah' ]
```

```js
const animalArray = ['Emu', 'Wombat', 'Kangaroo', 'Gallah']
const middleTwoAnimals = animalArray.splice(1, 2)
console.log(animalArray)
console.log(middleTwoAnimals)
// expected output:
// [ 'Emu', 'Gallah' ]
// [ 'Wombat', 'Kangaroo' ]
```

```js
const animalArray = ['Emu', 'Wombat', 'Kangaroo', 'Gallah']
const addCockatoo = animalArray.splice(3, 0, 'Cockatoo')
console.log(animalArray)
console.log(addCockatoo)
// expected output:
// [ 'Emu', 'Wombat', 'Kangaroo', 'Cockatoo', 'Gallah' ]
// []
```





There are many different ways to work with and manipulate arrays in JavaScript. Combining different methods and approaches serves to create near limitless possibilities for a developer to access and manipulate arrays and their contents. 

<br/>

## Q11: Explain how objects can be manipulated in JavaScript, using examples from the JavaScript programming language

There are many ways objects can be created and manipulated in JavaScript. Understanding how to access and manipulate an objects properties coupled with a thorough understanding of Object methods can create an invaluable tool with near limitless capabilities when working with JavaScript objects. 

### Creating a new object:
Objects can be created in a handful of ways. The two most common are Object constructors or Object literals. Object constructors are a type of factory function that can create a new object with predefined structure. They can include methods as well as take user arguments to assign to values. Note that the `this` keyword must be employed in order to reference the scope of the object being referenced. 
```js
function createSimpson(name, occupation) {
    this.name = name;
    this.occupation = occupation;
}

const smithers = createSimpson('Wayland Smithers', 'personal assistant')
```

ES6 introduced a shorthand for creating a new object, the Object literal:
```js
const lisa = {
    name: 'Lisa Simpson',
    occupation: 'student'
}
```

### Accessing properties
An objects properties can be accessed by using either dot or bracket notation. It is important to remember that dot notation does not work for variables; for use of variables to access properties bracket notation must be used:
```js
const lisa = {
    name: 'Lisa Simpson',
    occupation: 'student'
}
const keyVariable = 'occupation'

console.log('name: ', lisa.name, 'occupation: ', lisa[keyVariable])
// expected output: 
// name:  Lisa Simpson occupation:  student
```

### Object methods
Two of the most useful Object methods are `Object.keys()` and `Object.values()`. They accept an object as an argument and return an array of that objects keys or values, respectively. These methods can be extremely powerful when combined with standard loops or array methods such as map, filter, forEach or reduce.
```js
const scoreCard = {
    gameOne: 10,
    gameTwo: 20,
    gameThree: 30
}

const totalPointsScored = Object.values(scoreCard).reduce((a, b) => a + b)
const subtractFivePoints = Object.keys(scoreCard).map(key => scoreCard[key] -= 5)
```

Objects can also have their properties 'frozen' and protect from further manipulation. The `Object.freeze()` method protects both keys and values of an object, where `Object.seal()` protects keys but values are still able to be altered.


### Rest operator with objects
An objects contents can be 'unpacked' using the es6 `spread` operator. It works very similarly to using the spread operator with an array:
```js
const scoreCard = {
    gameOneScore: 10,
    gameTwoScore: 20,
    gameThreeScore: 30
}
const winners = {
    gameOneWinner: 'Red',
    gameTwoWinner: 'Blue',
    gameThreeWinner: 'Red'
}

const allGameStats = { ...scoreCard, ...winners}
console.log(allGameStats)
//  expected output:
// {
//   gameOneScore: 10,
//   gameTwoScore: 20,
//   gameThreeScore: 30,
//   gameOneWinner: 'Red',
//   gameTwoWinner: 'Blue',
//   gameThreeWinner: 'Red'
// }
```  

### The for in loop
The for in loop is used to iterate over objects, visiting each object key on every iteration. 

```javascript
const myObject = {
    firstKey: 'I am first',
    secondKey: 'I am second',
    thirdKey: 'I am third'
}
for (let key in myObject){
    console.log(key + ': ' + myObject[key])
}
    // expected to log: 
    // firstKey: 'I am first'
    // secondKey: 'I am second'
    // thirdKey: 'I am third'
```



### Destructuring and Creating Key Value pairs quickly:

Two syntactic mechanisms to help work with objects can be found in destructuring and creating objects:

Destructuring allows a dev to easily pull out keys and values from an object and assign them as their own stand alone variables:

```js
const lisa = {
    name: 'Lisa Simpson',
    occupation: 'student'
}
const {name, occupation} = lisa
console.log(name, occupation)
// expected output: Lisa Simpson student
```
Conversely, an object literal can be created by passing in just a variable alone and the key will be the variable name and its value will be the value associated with that variable:
```js
const name = 'Lisa Simpson'
const occupation = 'student'
const lisaObject = { name, occupation }
console.log(lisaObject)
// expected output: 
// { name: 'Lisa Simpson', occupation: 'student' }
```

<br/>

## Q12: Explain how JSON can be manipulated in JavaScript, using examples from the JavaScript programming language

JavaScript Object Notation or JSON is a data structure based on JavaScript object syntax. Although JSON closely resembles a JavaScript object it exists as a string and can be used by many different programming languages. Generally for a programming language to use a JSON object it must be deserialized to a native language object. The most common JSON structures in JavaScript resemble either a single object or an array of objects. Once a JSON object is deserialized it may be acted upon, read and manipulated just as a JavaScript object. It is important to note that JSON format requires the object to be wrapped in double quotes. Additionally all keys and strings must be wrapped in double quotes as well for the JSON to work properly. 


JavaScript provides a number of ways to serialize and deserialize JSON objects:
- As part of the Response interface the .json() method will take a response stream and read it to completion, returning a promise that will resolve to a JSON object. 
- The static JSON object which can be used to serialize and deserialize JSON objects. JSON.parse() will deserialize a JSON string and return a javascript object. JSON.stringify() will accept a javascript object and return a JSON string. 

A workflow example of working with JSON from an API in JavaScript: 

```javascript
const quoteWrapper = document.getElementById('quotewrapper');


fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=5')
    .then(res => res.json())
    .then(data => {
        for (let quote of data) {
            quoteWrapper.innerHTML += `<h2>${quote.quote}</h2><h3>- ${quote.character}</h3> <img src="${quote.image}" alt="" width="30" height="auto"> <hr>`
    }} )
```
Resulting in:  

![Simpsons example](./media/Screenshot%202023-07-29%20at%2011.47.21%20AM.png)

Consider this example of working with a local JSON file in Node. Note that working with a JSON object via an API would be a similar workflow and also require parse and stringify functionality.

```javascript 
import fs from 'fs'
// raw data is read from the quotes.json file
let rawdata = fs.readFileSync('./quotes.json')

// Raw data is deserialized into a JS object
const quote = JSON.parse(rawdata)[0]
console.log('Parsed JSON -> ', quote)


// create episodeInfo object to add to the quote 
const episodeInfo = {
    season: 6
}

// add episode info object to the quote
quote.episodeInfo = episodeInfo

console.log('episodeInfo object added to quote -> ', quote) 

// Add new key/value pair to episodeInfo object on the quote object:
quote.episodeInfo.name = "Bart Of Darkness"

console.log('name added to episodeInfo object of quote -> ', quote) 

// Serialize the updated quote object and save to variable called data
const data = JSON.stringify(quote, null, 2)

// Write the serialized JSON object to the original JSON file (overwriting original contents) 
fs.writeFileSync('./quotes.json', data)

```

In this example the File System module is used to first read the JSON file into the node app. This incoming data is then deserialized using the JSON.parse(), returning an array with a single element being a JavaScript object version of the JSON object stored in the file. Then, a new ```episodeInfo``` object is created with one key/value pair for season number. This object is then added to our deserialized JSON object using traditional JS object syntax. A new key/value pair for ```name``` is then added directly to the ```episodeInfo``` object contained within the ```quote``` object. Each stage of the ```quote``` object is console logged:  

![quote console img](./media/Screenshot%202023-07-29%20at%201.02.28%20PM.png)

Finally the quote object is serialized as a JSON object and the original JSON file is rewritten with the updated, serialized quote object:


![json file](./media/Screenshot%202023-07-29%20at%201.08.50%20PM.png)


<br/>

## Q13: For the code snippet provided below, write comments for each line of code to explain its functionality. In your comments you must demonstrates your ability to recognize and identify functions, ranges and classes

```javascript
// Construct new parent class Car 
class Car {
    // Use the class constructor function to set up the expected properties and accept variable arguments when instantiating a new class instance. 
    // The value of 'brand' will be provided as an argument when when creating a new class instance.
  constructor(brand) {
    // 'this' keyword must be used to specify that it is referencing a property, element or method within the class object
    //  This line creates a new key/value pair with key 'carname' and associated value set to the value of 'brand'
    this.carname = brand;
  }
    // Create a new Class method called 'present'
    //This method can be called on every Car class instance, or any class that extends the Car class
  present() {
    // returns a phrase that references the carname property. Note that 'this' keyword must be used to specify it is accessing a property from within the class instance.
    return 'I have a ' + this.carname;
  }
}

// Define a new class Model that inherits from the Car class. In this scenario one could think of Car as a parent class and Model as a child class of Car class.
class Model extends Car {
    // The constructor function is called, parameters must be from parent class (Car) are supplied, as well as any further parameters needed to construct child class (Model)
  constructor(brand, mod) {
    // The super keyword is used to invoke the superclass constructor (Car). This gives access to the Car class constructor within the Model class constructor.
    // by invoking super the Model class has access to the 'brand' property from the Car class constructor. 
    super(brand);
    // creates a key/value pair to set class key 'model' to value of 'mod' argument
    this.model = mod;
  }
    // Create a new Class method called 'show'
    //This method can be called on every Model class instance, or any class that extends the Model class
  show() {
    // The show() method returns a phrase. It invokes the inherited present() method to construct the first part of the phrase. 
    // the returned phrase from present() is then concatenated with the string ', it was made in ' and the returned value of `this.model`.
    // The 'this' keyword must be used to access the methods and properties from the class object. 
    return this.present() + ', it was made in ' + this.model;
  }
}

// define an Array containing hardcoded values of car makes 
let makes = ["Ford", "Holden", "Toyota"]

// The following line of code will construct an array containing sequential numbers ranging from 1980 to 2019
    // The Array.from() static method creates a new array from an array like object or iterable.
        // Its first parameter is the iterable object
        // Its second parameter is a map function, whose first two parameters represent the current array element and the index of the current element.
    // The first argument of Array.from() is an Array Constructor, which when passed a single integer as an argument returns an array of that length which each element initialized as 'undefined'
        // In this instance, 'new Array(40)' will evaluate to an array with 40 instances of of 'undefined'. 
    // How it all works:
        // Array.from() will iterate over an array of 40 undefined elements and for each element will evaluate to the index value + the integer 1980
        // Array.from() ultimately returns a shallow copy of 'new Array(40)' populated with elements ranging from 1980 to 2019, inclusive.
 let models = Array.from(new Array(40), (x,i) => i + 1980)


// Declare a function that will return a random integer from a given range (min, max)
function randomIntFromInterval(min,max) { // min and max included
    // Math.random() returns a random float greater than or equal to 0 and less than 1
    // The span of values needed is achieved by subtracting the low range (min) from the high range (max). 
        // 1 is then added to this number to compensate for Math.random() never returning 1.
        // This number is then multiplied by the Random float from Math.random()
        // Next, the low range (min) is achieved by adding it to this number, essentially shifting all values up (min) amount 
        // Finally, Math.floor() returns the base integer value, omitting any decimal content.
    return Math.floor(Math.random()*(max-min+1)+min);
}

// initialize 'for... of' loop to iterate over the models array. 
// Because not specified with 'let' or 'const', all variables in this code block will be initialized with keyword 'var' by default
for (model of models) {
//   On each iteration a random make is chosen from the 'makes' array using the randomIntFromInterval function
    // because given arguments evaluate to 0 and 2, the returned int will always be between 0 and 2, and in range of the 'makes' array.
  make = makes[randomIntFromInterval(0,makes.length-1)]

//   Similarly, on each iteration a random model is chosen from the 'models' array using the randomIntFromInterval function
    // because given arguments evaluate to 0 and 2, the returned int will always be between 0 and 2
    // This may not be what the developer intended, as it is pulling models from an array of 40 elements, but will only ever access the first three elements of that array: 1980, 1981, 1982
    // If the dev wanted to pull from all 40 elements, they could replace the second argument to randomIntFromInterval with 'models.length-1' to achieve a range from 0-39
    model = models[randomIntFromInterval(0,makes.length-1)]

//   On each iteration variable mycar will be assigned the value of a new instance of Model with the randomly chosen 'make' and 'model' values passed in as arguments to the Model constructor function.
  mycar = new Model(make, model);
//   On each iteration the mycar.show() method will be invoked and logged to the console, returning the constructed string as expected
  console.log(mycar.show())
}

// Sample of expected console output:
// I have a Holden, it was made in 1981
// I have a Toyota, it was made in 1981
// I have a Ford, it was made in 1981
// I have a Holden, it was made in 1980
// I have a Toyota, it was made in 1980
// I have a Holden, it was made in 1980
// I have a Ford, it was made in 1981
// I have a Ford, it was made in 1982
// I have a Holden, it was made in 1981
// I have a Ford, it was made in 1981
// I have a Holden, it was made in 1980
// I have a Toyota, it was made in 1982
// I have a Toyota, it was made in 1980
// I have a Holden, it was made in 1980
// I have a Ford, it was made in 1981
// I have a Ford, it was made in 1982
// I have a Ford, it was made in 1982
// I have a Ford, it was made in 1980
// I have a Toyota, it was made in 1982
// I have a Toyota, it was made in 1982
// I have a Toyota, it was made in 1981
// I have a Toyota, it was made in 1982
// I have a Holden, it was made in 1980
// I have a Toyota, it was made in 1982
// I have a Holden, it was made in 1980
// I have a Toyota, it was made in 1980
// I have a Toyota, it was made in 1981
// I have a Ford, it was made in 1980
// I have a Ford, it was made in 1980
// I have a Ford, it was made in 1981
// I have a Ford, it was made in 1982
// I have a Toyota, it was made in 1980
// I have a Holden, it was made in 1980
// I have a Holden, it was made in 1980
// I have a Toyota, it was made in 1981
// I have a Toyota, it was made in 1981
// I have a Ford, it was made in 1982
// I have a Ford, it was made in 1982
// I have a Holden, it was made in 1982
// I have a Holden, it was made in 1980
```
individual