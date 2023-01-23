/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    
    // divide string in half, replace the best character in left half with "a"
    // to successfully break palindrome.
    
    const n = palindrome.length;
    const characterArray = palindrome.split("");
    const mid = Math.floor(n/2);
    
    // return empty string since palindrome can't be broken.
    if (n === 1)
    return "";
    
    // traverse until middle element, if found character that's not 'a',
    // change it to "a" and immediately return broken palindrome.
    for (let i = 0; i<mid; i++) {
        
        const character = characterArray[i];
        
        if (character !== "a") {
            characterArray[i] = "a";
            return characterArray.join("");
        }
    }
    
    // if loop ends without returning, left half of palindrome consits
    // of all "a", so change last character to "b" to break palindrome and return it.
    characterArray[n-1] = "b";
    return characterArray.join("");    
};

"aba"