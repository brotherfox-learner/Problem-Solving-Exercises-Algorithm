// ให้เขียน Function ที่ชื่อว่า `reverseString` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `text` มี Value Type เป็น `String`
//     - Function นี้จะ Return ค่า String ที่มีการเรียงตัวอักษรจากหลังไปหน้า
//     - เช่น

function reverseString(text) {
    //Start Coding Here
    //Built in
    // const reverseText = text.split('').reverse().join('')
    // return reverseText

    //Logic Loop
    const texts = text.split('')
    let answer = []
    for(let i = texts.length - 1; i >= 0; i--){
        answer.push(texts[i])
    }
    return answer.join('')

};

let result1 = reverseString("hello");
console.log(result1); // "olleh"

let result2 = reverseString("TechUp");
console.log(result2); // "pUhceT"


