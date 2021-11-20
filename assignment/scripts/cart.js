console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
    if(isFull()){
        return false;
    } else {
        basket.push(item);
        return true;
    }
}

function listItems(){
    for(let item of basket){
        console.log(item);
    }
}

function empty() {
    basket = [];
    return 'empty';
}

function isFull() {
    //console.log(basket.length);    
    return basket.length >= maxItems ? true : false;

}

function removeItem(item) {
    item = basket.indexOf(item) !== -1 ? basket.splice(basket.indexOf(item), 1) : null;
    return item;
}

//fill basket to check functions
basket = ['grapes', 'chicken', 'carrots', 'mushrooms',];
console.log(`Basket is: ${basket}`);

//tests fo addItem and isFull
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now: ${basket}`);
console.log('Adding salt (expect false)', addItem('salt'));
console.log(`Basket is now: ${basket}`);

//checking litItems
listItems();

//checking removeItem func 
console.log(`Removed item: ${removeItem('carrots')}`);
console.log(`Removed item: ${removeItem('frogs')}`);

//test for isFull func
console.log('is it full? Should log false:', isFull());
addItem('beer');
console.log('is it full? Should log true:', isFull());

//test for empty func
console.log(`Basket is now: ${empty()} ${basket}`);