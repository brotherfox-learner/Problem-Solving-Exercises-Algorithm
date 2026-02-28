// - ให้เขียน Function ที่ชื่อว่า `isEvenNumber` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `num` มี Value Type เป็น `Number`
//     - Function นี้จะ Return ค่าออกมาดังนี้
//         - ถ้า `num` เป็นเลขคู่ ให้ return `true`
//         - ถ้าไม่ใช่ ให้ return `false`
//     - เช่น
        
//         function isEvenNumber(num) {
//            //Start Coding Here
//         };
        
//         let result1 = isEvenNumber(4);
//         console.log(result1); // true
        
//         let result2 = isEvenNumber(7);
//         console.log(result2); // false

const isEvenNumber = (num) =>{
    if(!Number(num)) return "this is not a number!";
    return num % 2 === 0 ? true : false
}

console.log(isEvenNumber('me'))
console.log(isEvenNumber('2'))

let result1 = isEvenNumber(4);
console.log(result1); // true
        
let result2 = isEvenNumber(7);
console.log(result2); // false