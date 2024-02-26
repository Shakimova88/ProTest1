function sayHi() {
    console.log('Hi!');
}

sayHi();

function isVowel(str) {
     str = str.trim();
    return 'AUIOEauioe'.includes(str[0]);
}

console.log(isVowel('arina'));