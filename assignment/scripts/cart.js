console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function addItem(item) {
    let result = true;
    isFull() ? basket.push(item) : result = false;
    return result;
}

function isFull() {
    return basket.length < maxItems ? true : false
}

function removeItem(item) {
    let check = item;
    basket.indexOf(item) !== -1 ? basket.splice(basket.indexOf(item), 1) : check = null;
    return check;
}

function empty() {
    basket = [];
}
//fill basket to check functions
basket = ['orange', 'grapes', 'chicken', 'carrots', 'mushrooms']
console.log(`Basket is: ${basket}`);

//checking removeItem func 
console.log(`Removed item: ${removeItem('carrots')}`)
console.log(`Removed item: ${removeItem('frogs')}`)


console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now: ${basket}`);
console.log('Adding salt (expect false)', addItem('salt'));
console.log(`Basket is now: ${basket}`);

//test for isFull func
console.log(isFull());

//test for empty func
empty()
console.log(`Basket is now: ${basket}`);