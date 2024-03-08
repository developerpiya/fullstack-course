//levels.fyi - site for job
//system design mock interviwes

const player1 = {
    firstname :'virat',
    lastname : 'kohli',
    numberTobat : 3
}

const player2 = {
    firstname :'Yuvraj',
    lastname : 'Singh',
    numberTobat : 10
}

const details = function(){
    console.log(`${this.firstname} ${this.lastname} comes to bat at no ${this.numberTobat}`);
}

const newDetailswVirat = details.bind(player1);
const newDetailswYuvraj = details.bind(player2);

newDetailswVirat();
newDetailswYuvraj();

