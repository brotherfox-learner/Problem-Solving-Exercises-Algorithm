// **Exercise 1: Count Vowels**

// - ให้เขียน Function ที่ชื่อว่า `countVowels` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `text` มี Value Type เป็น `String`
//     - Function นี้จะ Return ค่าเป็นจำนวนสระภาษาอังกฤษ (a, e, i, o, u) ที่ปรากฏใน `text`
//         - โดยนับทั้งตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
//     - เช่น


function countVowels(text) {
    //Start Coding Here
    let vowels = 'aeiou'
    let count = 0;
    // for (let char of text) {
    //     if(vowels.includes(char.toLowerCase())){
    //         count++
    //     }
    // }
    for (let char of text) {
        let lower = char.toLowerCase()
        if (lower === 'a' || lower === 'e' || lower === 'i' || lower === 'o' || lower === 'u') {
            count++
        }
    }
    return count
};

let result1 = countVowels("hello");
console.log(result1); // 2

let result2 = countVowels("TECHUP");
console.log(result2); // 2
