/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {

    // Count the contigious occurences of A and B
    
    const players = {"alice": 0, "bob": 0};
    const p = new Program(colors, players);
    
    return p.winner();
};

class Program {
    
    constructor(colors, players) {
        this.colors = colors;
        this.players = players;
    }
    
    winner() {
        
        for (let i = 0; i<this.colors.length; i++) {
            
            if (this.colors[i] === 'A' && this.colors[i+1] === "A" && this.colors[i+2] === "A") {
                this.players["alice"] += 1;
            } 
            
            if (this.colors[i] === "B"  && this.colors[i+1] === "B" && this.colors[i+2] === "B") {
                this.players["bob"] += 1;
            }
        }
        
        if (this.players["alice"] > this.players["bob"])  {
            return true;
        } else {
            return false;
        }
    }
}

