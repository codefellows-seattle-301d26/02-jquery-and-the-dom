![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) Lab 02: jQuery and the DOM
===

## Code Wars Challenge

Complete [today's Kata](https://www.codewars.com/kata/my-head-is-at-the-wrong-end) and follow the submission instructions from Lab 01.

## Lab 02 Submission Instructions
Follow the submission instructions from Lab 01.

## Resources  
[jQuery cheatsheet](https://oscarotero.com/jquery/)

## Configuration
_Your repository must include:_

```
02-jquery-and-the-dom
├── .eslintrc.json
├── .gitignore
├── LICENSE
├── README.md
├── index.html
├── scripts
│   ├── article.js
│   └── blogArticles.js
├── styles
│   ├── base.css
│   ├── fonts
│   │   ├── icomoon.eot
│   │   ├── icomoon.svg
│   │   ├── icomoon.ttf
│   │   └── icomoon.woff
│   ├── icons.css
│   ├── layout.css
│   └── modules.css
└── vendor
    └── styles
        └── normalize.css
```

## User Stories and Feature Tasks

- Continue styling the app using SMACSS practices. Take a few minutes for code review of your partner's CSS and decide how to incorporate it into your paired lab. You can choose one partner's CSS structure, or you can combine them as you see fit. Seek to optimize and organize your CSS as much as possible!

*As a user, I want my site to display my blog articles in a clear, logical way so that I can find the most recent articles first and the blog is easy to read.*

- Complete the `toHtml()` method, which will ultimately be used to render each article instance to the DOM.
- The articles should be sorted by date.

*As a developer, I want to make my code DRY and render articles from a separate data file so that my HTML file is not cluttered with lengthy and repetitive code.*

- Complete the `Article()` constructor and create instances by assigning all of the properties of each data object to properties of `this`.

*As a developer, I want to utilize the jQuery library's functionality so that I can efficiently access, traverse, and manipulate elements on the DOM.*

- Add the necessary script tag to include jQuery in the app.
- Utilize jQuery functionality to modify the display property of DOM elements.
- Utilize jQuery functionality to traverse the DOM and complete the HTML template for the articles.

*As a developer, I want to optimize iteration with JavaScript array methods so that my code is more condensed and maintainable.*

- Refactor all `for` loops using the `.forEach()` method.


## Documentation
_Your README.md must include:_

```md
# Project Name

**Greg and Ashley**:
**1.0.9**: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?)

If I understand correct, the purpose of this exercise was to get us familiar with the concepts of using jQuery, and review valuable concepts from 201 such as object constructors.  First we had to build an object constructor using a dynamically generated object as it's argument. We then built the prototype function toHtml() to dynamically generate and render our array of hard coded objects(articles).  The last piece is to ensure that the articles get sorted from most recent to oldest article.-->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running?
1. build constructor function to house the data we need.
2. create a new prototype function to
  A. clone the template for how an object will be displayed.
  B. remove the template so no generic data is rendered to the DOM.
  C. Create a function to find the current date and sort it from newest to oldest.
  D. Loop through all the hard coded objects to instantiate our current object
  E. Loop through the objects and  render them to the page-->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information.
The languages we use our HTML, CSS, and JavaScript.  We utilize the jQuery library and our local images to render to the page-->

## Change Log
<!-- Use this are to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:
12-06-17 10:00 - Built object constructer and cloned our template in HTML so we can fill that template with data.
12-06-17 10:30 - Added in all relevant CSS files.
12-06-17 10:45 - Created functionality to dynamically generate instantiated objects to render.
12-06-17 12:30 - Generates and renders appropriate data, project complete.

## Credits and Collaborations
<!-- Most of the credit goes to the best TA in the world, Michael Treat.  Otherwise we used https://oscarotero.com/jquery/ for a list of jQuery commands, and https://code.jquery.com/jquery-3.2.1.slim.min.js for our jQuery src.

-->
```
