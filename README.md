# Austin Taco

## To Run

Use `npm install` and then `npm start`, open up *http://localhost:3000/* in your browser.

## Overview

This exercise will have the candidate build a responsive page and navigation.

Here are the guidelines for this exercise, please follow closely:

* No javascript frameworks or libraries (e.g. jQuery, Angular, React).
* CSS Pre-Compilers are fine (LESS, SASS), but no mixin libraries (Compass, Bourbon, Neat, Foundation, etc.)
* Chrome compliance is all that's required, all functions and features available in Chrome are in play.
* Nav must be responsive.
* Code must run after the following command, please ensure your code runs as you expect it to from a fresh checkout with these commands before submission.
* Page should look good across all viewport sizes.

```
$ npm i && npm start
```

Nice to haves:

* Adherence to accessibility standards (keyboard navigatibility)
* BEM methedology

At a high level the navigation will have two main states:

* <768px: Small. Hamburger icon will display in the top-left of the page. Clicking the hamburger will cause the navigation to transition-in in a pleasing manner.
* \>= 768px: Medium & Large. The nav will display as a horizontal nav. Top level nav items will display sub-nav items when clicked. No hamburger will be shown.

At all screen sizes:
* The cards should toggle on/off of their selected states with the blue outline and checkmark in the top right corner.

## Files

* /Reference - JPGs of what we expect to see from Small, Medium, and Large displays, Copydecks of all copy used.
* /Assets - SVGs of the icons and images used

## Get Started

###Requirements
* Node.js and npm (You get both when you <a href="https://docs.npmjs.com/getting-started/installing-node">install Node.js</a>.)

###Install the exercise locally
```
git clone https://bitbucket.org/davechiu/austin-taco__coding-test.git
cd austin-taco__coding-test
npm install
npm start
```

## Design Specifications

### Typography

* **Primary Navigation** 14pt Helvetica, Arial, Sans-serif
* **Secondary Navigation** 14pt Helvetica, Arial, Sans-serif
* **Headline** 36pt Helvetica, Arial, Sans-serif
* **Body Copy** 14pt Helvetica, Arial, Sans-serif
* **Primary Navigation (Small Screens)** 16pt Helvetica, Arial, Sans-serif

### Color

* **Navy** #152934
* **Blue** #3b71b1
* **Slate Blue** #536b8d
* **Sky Blue** #55acf9
* **Light Blue** #f4f7fc

### Interactions

#### Large & Medium Screens

* On hover, Primary Navigation reverses color (White/Navy).
* On click, if item contains a URL, Primary Navigation navigates to a new page.
* On click, if item contains other items, Secondary Navigation appears (see Desktop, Secondary Navigation).
* Menu appears containing Secondary Navigation.
* On hover in, Secondary Navigation changes color (White/Light Blue).
* On click, Secondary navigates to a new page.
* On click outside of menu, menu is hidden.

#### Small Screens

* When a user clicks the open navigation icon (“hamburger”), the navigation should transition-in in a pleasing manner.
* When a user clicks the close navigation icon (“x”), the navigigation should transition-out in a pleasing manner.
* The background for the Navigation should be 95% opaque (5% transparent, or 0.95 alpha), while the content remains opaque.
* When a user hovers a Primary Navigation item, it should change color (Navy/Light Blue).
* When a user clicks a Primary Navigation link item, the browser should navigate to a new page.
* When a user hovers a Secondary Navigation item, it should change color (Navy/Light Blue).
* When a user clicks a Secondary Navigation item, browser should navigate to a new page.
* When the taco is clicked, it should animate in a fun manner; could be as simple as a quick shrink and grow.
