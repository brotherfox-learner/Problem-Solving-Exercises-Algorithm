
//     - ให้เขียน Function ที่ชื่อว่า `isPalindrome` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `word` มี Value Type เป็น `String`
//     - Function นี้จะ Return ค่า `true` ถ้า `word` เป็น Palindrome
//     - หากไม่ใช่ ให้ Return `false`
//     - Palindrome คือคำที่อ่านจากหน้าไปหลังหรือหลังไปหน้าก็ได้คำเดียวกัน เช่น `“madam”`, `“racecar”`
//     - เช่น

function isPalindrome(word) {
    //Start Coding Here
    //Built in
    // let reversedWord = word.split("").reverse().join("")
    // return word === reversedWord 

    //Logic
    if(typeof word !== 'string'){
        return 'Text must be a string.'
    }
    let reversedWordArr = []
    for(let i = word.length -1; i >= 0; i--){
        reversedWordArr.push(word[i])
    }
    return word === reversedWordArr.join('')
};

let result1 = isPalindrome("madam");
console.log(result1); // true

let result2 = isPalindrome("hello");
console.log(result2); // false

let result3 = isPalindrome(2);
console.log(result3); 

