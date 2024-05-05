const alphabet = "abcdefghijklmnopqrstuvwxyz";

// FUNCTION Helper - ENCRYPTED LETTER
function encryptLetter(letter, shiftValue) {
    // finds the index of the letter in the alphabet.
    const index = alphabet.indexOf(letter.toLowerCase());
     //Adds the shift value to this index. Uses the modulus operator to ensure wrapping around the alphabet if necessary.
    const newIndex = (index + shiftValue) % alphabet.length;
     
    // Returns the letter value if not found in the alphabet index. 
    if (index === -1) { // RESOURCE - stackoverflow.com

        return letter;
    }

    else {
        // Returns value if found in the alphabet.  
       return alphabet[newIndex]; 
    }
    
}

//FUNCTION - ENCRYPTS MESSAGE
function encryptedMessage (message, shiftValue) {
  let encryptedMessage =''; // Empty string that will determine or hold what the message will be. 
  let letterCount = 0; // Allows the variable to count from 0. 
  
  // Loop will continue to iterate over each letter in the message. 
  for (let i = 0; i < message.length; i++) {
        
    //Varriable is being constructed by appending the result of calling variable 'encryptLetter'. Each letter of the word being shifted to encrypt the message. 
        encryptedMessage += encryptLetter(message[i], shiftValue); 
        letterCount ++; // adds to the count by 1.

        if(letterCount === 2) {
            encryptedMessage += randomLetter(); // Random letter is added after every second letter to maintain the cipher encrypted. 
            letterCount = 0; // Starts the counter all over at 0.
        }
        
    }
    return encryptedMessage;
    
}

console.log(encryptedMessage("Xuobbce eRhakjikiw, gcueujr cfu wqjy jzxul xfywox pwqghtiudri.", 42)); //Testing to see if encryption works.


//FUNCTION Helper - Decrypts Letter
function decryptLetter(letter, shiftValue) {

    //Finds the index of the letter in the alphabet.
    const index = alphabet.indexOf(letter.toLowerCase()); //Finds the index of the letter in the alphabet.
   //Modulus operator to ensure wrapping around the alphabet if necessary. After subtractin shift value from index added alphabets length to handle negative values. 
    const newIndex = (index - shiftValue + (shiftValue * alphabet.length)) % alphabet.length;
    
 
    // Returns the letter value if not found in the alphabet index. 
    if (index === -1 ) { // RESOURCE - https://stackoverflow.com/questions/44232645/caesar-cipher-in-javascript

        return letter;
    }
    else {
        // Returns value if found in the alphabet.  
        return alphabet[newIndex];
    }
}

//Function - Decrypts Message
function decryptedMessage (encryptedMessage, shiftValue) {

    let decryptedMessage = '';
    let letterCount = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {

        if (letterCount === 2) {
            letterCount = 0; //Resets counter back to 0.
            continue; // * RESOURCE - https://stackoverflow.com/questions/44232645/caesar-cipher-in-javascript
        }

        //Varriable is being constructed by appending the result of calling variable 'decryptLetter'. 
        //Each letter of the word being shifted to decrypt the message.
        decryptedMessage += decryptLetter(encryptedMessage[i], shiftValue);
            letterCount ++;
    }    
  
    return decryptedMessage;

}

console.log(decryptedMessage("Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv 'zQkhhuubyjkit' yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.", 42));


function randomLetter() {
    // Total letters of alphabet.
    const alphabets = 26;
    // Multiliplying alphabets by Math.Random to generate a random value within the array to be assigned to randomIndex. 
    const randomIndex = Math.floor(Math.random() * alphabets);
    //Returns the alphabet randomly assigned value. 
    return alphabet[randomIndex];
}
