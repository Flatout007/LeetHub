/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {

    // brute force:
    // use alternating loops to loop through colors and find 
    // 3 matching adjacent colors, remove middle color and continue to loop until 
    // a player can't find 3 adjacent colors
    
    // efficient: 
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
            } else if (this.colors[i] === "B"  && this.colors[i+1] === "B" && this.colors[i+2] === "B") {
                this.players["bob"] += 1;
            }
        }
        
        if (this.players["alice"] > this.players["bob"])  {
            return true
        } else if (this.players["alice"] === this.players["bob"]) {
            return false;
        } else {
            return false;
        }
        
        
    }
}

// class Program {
    
//     constructor(colors) {
//         this.colors = colors;
//     }
    
//     deleteFromString(str, index) {
        
//         let newString = "";
        
//         for (let i = 0; i<str.length; i++) {
//             if (i !== index)
//             newString += str[i];
//         }
        
//         return newString;
//     }
    
//     winner() {
        
//        let i = 0; 
        
//        while (true) {
           
//            if (i % 2 === 0) {
               
//                for (let i = 0; i<this.colors.length; i++) {
                   
//                   if (this.colors[i+2] == null)
//                   return false;
                   
//                    if (this.colors[i] === "A" && this.colors[i+1] === "A" && this.colors[i+2] === "A") {
//                        this.colors = this.deleteFromString(this.colors, i+1);
//                        break;
//                    } 
                   
//                }
               
//            } else {
               
//                for (let i = 0; i<this.colors.length; i++) {
                   
//                   if (this.colors[i+2] == null)
//                   return true;
                   
//                    if (this.colors[i] === "B" && this.colors[i+1] === "B" && this.colors[i+2] === "B") {
//                        this.colors = this.deleteFromString(this.colors, i+1);
//                        break;
//                    } 
                   
                  
//                }
//            }
           
//            i++;
//        }
//     }
// }