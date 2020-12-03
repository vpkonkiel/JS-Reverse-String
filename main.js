function reverseString(str) {
    let splitString = str.split("");
    let reverseCharacters = splitString.reverse();
    let joinCharacters = reverseCharacters.join("");
    return joinCharacters;
}

reverseString("SuperDeeDuper");