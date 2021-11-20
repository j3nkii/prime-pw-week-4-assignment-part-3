# Tier 1 Week 4 - Part 3

This week we'll be pulling together all of the Javascript techniques you've learned thus far as well as practicing with HTML & CSS.

## Topics Covered

- variables
- arrays
- conditionals
- functions
- HTML & CSS

## Assignment - Cart System 

In this section we will write some functions that might be used in a simple cart system for a store. 

### Required Features
Update the `cart.js` file to do the following:

- xCreate a global variable named `basket` and set it to an empty array.

- xCreate a function called `addItem`. It should:
  - xtake an input parameter for a string `item`
  - xadd the new item to the global array `basket`. 
  - xreturn `true` indicating the item was added

- xCreate a function called `listItems`. It should:
  - xloop over the items in the `basket` array
  - xconsole.log each individual item on a new line

- xCreate a function called `empty`. It should:
  - xreset the `basket` to an empty array

> __IMPORTANT__
> Make sure that you are writing code *in the file* to test every function that you write!

For example, to test `addItem`:
```
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
```

### Stretch Goals 
Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.

__Using functions in other functions!__

1. xAdd a global `const` named `maxItems` and set it to 5.

2. xCreate a function called isFull(). It should:
  - xreturn `false` if the basket contains *less* than max number of items
  - xreturn `true` otherwise (equal or more than maxItems)

3. xUpdate the required `addItem` function to:
  - xUse the `isFull` function to prevent more than `maxItems` from being added to the basket. 
  - xIf an item was added to the array, return `true`
  - xIf there was no room and the item could not be added return `false`

__Using Array built-in functions!__

4. xCreate a function called `removeItem`. It should:
  - xTake an input parameter for a string `item`
  - xUse [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
  - xUse [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
  - xReturn the item removed or `null` if the item was not found

## Assignment Submission
Check in your repo, then turn in your work via the Prime Academy Assignment Application at http://primeacademy.io, as usual and don't hesitate to hit up the Slack channel as needed!

**REMINDER:** Make sure to answer the Slack discussion question for this week!