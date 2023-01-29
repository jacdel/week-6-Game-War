
var expect = chai.expect;

describe('MyFunctions', function(){
    describe('Deck_class', function(){
        it('should create the deck itself', function(){
            let x = new Deck();
            x.createDeck();
            expect(x.stack.length).to.equal(52);
        });
    });
});