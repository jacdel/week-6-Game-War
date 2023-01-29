// Jackies Game of War //** 
class Deck{
    constructor (){
        this.stack = [];
    }

    //creates the deck
    createDeck(){
    let suits = ['Spades', 'Diamonds', 'Hearts','Clubs'];
    let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let titles = ['ACE','2', '3','4','5','6','7', '8', '9','10','Jack','King','Queen'];

    for(let i = 0; i < suits.length; i++){
        for(let a = 0; a < titles.length; a++){
            this.stack.push(new Card(suits[i],titles[a],values[a]));
        }
    }
}

shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        const a = Math.floor(Math.random() * (i + 1));
        [array[i], array[a]] = [array[a], array[i]];
    }
}
}

class Card{
    constructor(suit,title,value){
        this.suit = suit;
        this.title = title;
        this.value = value;
        
    }
    // prints the card being played
    whatsTheCard(){
        console.log(this.title + ' of ' + this.suit )  

    }
}

class Players{
    constructor(name1,name2){
        this.one = name1;
        this.score1 = 0;
        this.hand1 = new Deck;


        this.two = name2;
        this.score2 = 0;
        this.hand2 = new Deck;
    }

    //splits the cards

    splitDeal(array){
        for (let i = 0; i < array.length; i += 2){
            this.hand1.stack.push(array[i]);
            this.hand2.stack.push(array[(i + 1)]);

        }
    }

    turns(hand1, hand2){
        for(let i = 0; i < hand1.stack.length; i++ ){
            var compare; // this variable sets what case to follow


            if(hand1.stack[i].value > hand2.stack[i].value){ //if the value of hand 1 is greater than hand 2 ,Case 1 below .player 1 gets point
                compare = 1;
            }

            else if(hand1.stack[i].value < hand2.stack[i].value){ //if hand 2 is larger, case 2 below. player 2 gets 1 point.
                compare = 2;
            }
            else if(hand1.stack[i].value == hand2.stack[i].value){ //if equal, it defaults to print ' ! Its a Tie ! '
                compare = 3;
            }

            console.log('🂿'+ hand1.stack[i].title + ' of ' + hand1.stack[i].suit 
            + `[${hand1.stack[i].value}] ` + ' vs ' + hand2.stack[i].title + ' of ' +
            hand2.stack[i].suit + `[${hand2.stack[i].value}]`);

            // prints ex. Queen of Hearts [12] vs. Queen of Diamonds [13]
            switch(compare){
                case 1:
                    this.score1 = this.score1 + 1;
                    console.log(`${this.one}: ${this.score1} ⇿  ${this.two}: ${this.score2}`);
                    break;

                case 2:
                    this.score2 = this.score2 + 1;
                    console.log(`${this.one}: ${this.score1} ⇿  ${this.two}: ${this.score2}`);
                    break;

                default:
                    console.log(`✦✧✦ !TURN IS A TIE! ✦✧✦`)    
    
        
        }
    }
}

showScoreTotals(){
    if(this.score1 > this.score2){
        console.log(this.one + ' is Victorious~!');
    } else if (this.score1 < this.score2){
        console.log(this.two + ' is Victorious~!');
    }
    else if(this.score1 == this.score2) {
        console.log(`⌧ !Its a tie game!⌧
                ✿         `)
    }

}
}

let deck = new Deck;
deck.createDeck();
deck.shuffle(deck.stack);
let player = new Players('🖳 Computer', '✿Jackie✿')
player.splitDeal(deck.stack);
player.turns(player.hand1,player.hand2);
player.showScoreTotals();
