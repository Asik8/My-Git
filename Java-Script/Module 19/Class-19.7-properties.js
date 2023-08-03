var shoppingCart={
    Glass: 1,
    pen: 10,
    keyboard: 1,
    monitor: 1,
    chanachur: 'bombay Company'
}

// techniques to add a property inside of a variable:
// 1.var pencont=shoppingCart.pen;
// 2.var pencont=shoppingCart['pen'];

// If you want to change a property name from outside or add a value of a property into a variable then you can do this way :This two line is the way
var propertyName='keyboard';
var propertyValues=shoppingCart[propertyName];

// Set Property values
shoppingCart[propertyName]= 20;
shoppingCart.keyboard=10;
shoppingCart['keyboard']=29;

// technique to add all the properties of an object inside of a variable: Object.keys converts all the element of an object as a array element inside of a variable. So now we can access those elements using loop.
// This command only for properties or keys
var properties= Object.keys(shoppingCart);
// This is for the values 
var properties=Object.values(shoppingCart);
console.log(properties);
