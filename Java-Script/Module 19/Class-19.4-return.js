function Samucha(money,quantity){
    console.log('Mama Samucha Den');
    console.log('Mama koita dibo?');
    console.log(quantity,'pieces');
    console.log('Ei nen Mama');
    console.log('Price Koto holo mama');
    var price =10*quantity;
    console.log('Price holo',price,'tk');
    console.log('ei to nen mama');
    var subs=money-price;
    return subs;
}
var money=200;
var quantity =6;
var MoneyBack=Samucha(money,quantity);
console.log('Tahole Apni paben:',MoneyBack);
console.log('Taka Gune nen ekbar');
