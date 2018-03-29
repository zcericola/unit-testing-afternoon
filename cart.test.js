const cart = require('./cart');
const cars = require('./data/cars');

describe('Cart Properties:', function(){
    test('Cart should have a default empty array.', () => {
        expect(Array.isArray(cart.cart)).toEqual(true);
        expect(cart.cart.length).toEqual(0);
    })

    test('Total of cart should be zero to start.', function(){
        expect(cart.total).toEqual(0);
    })


})

describe('Cart Methods:', function(){
    afterEach( () => {
        cart.cart = [];
        cart.total = 0;
    });

    test('addToCart() should add a car object to the cart array.', () => {
        cart.addToCart( cars[0]);
        cart.addToCart(cars[1]);

        expect( cart.cart.length).toEqual(2);
        expect(cart.cart[0]).toEqual(cars[0]);
        expect(cart.cart[1]).toEqual(cars[1]);
    
    });

    test('addToCart() should increase the total property.', () => {
        cart.addToCart( cars[0]);
        cart.addToCart(cars[8]);
        cart.addToCart(cars[2]);
        expect(cart.total).toEqual( cars[0].price + cars[8].price + cars[2].price);
    });

    test('removeFromCart() should remove a car object from the cart', () => {
        //calling add to cart so that there are things to test
          cart.addToCart(cars[0]);
          cart.addToCart(cars[1]);
          cart.addToCart(cars[2]);
//removing something from the cart
          cart.removeFromCart(1, cars[1].price);
//testing the procedure
          expect(cart.cart.length).toEqual(2);
          expect(cart.cart[0]).toEqual(cars[0]);
          expect(cart.cart[1]).toEqual(cars[2]);

    });

    test('removeFromCart() should decrease the total property', () => {
        cart.addToCart(cars[0]);
        cart.addToCart(cars[8]);
        cart.addToCart(cars[2]);

        cart.removeFromCart(0, cars[0].price);
        cart.removeFromCart(1, cars[2].price);

        expect(cart.total).toEqual(cars[8].price);
    });

    test('checkout() should empty the cart array and total should be 0.', () => {
        //adding things to test
          cart.addToCart(cars[0]);
          cart.addToCart(cars[1]);
          cart.addToCart(cars[2]);
          cart.addToCart(cars[3]);
//invoking checkout to empty the cart and bring total back to 0.
          cart.checkout();
//testing
          expect(cart.cart.length).toEqual(0);
          expect(cart.total).toEqual(0);

    });


})