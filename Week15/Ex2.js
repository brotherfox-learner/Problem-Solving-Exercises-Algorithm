
// **xercise 2: Sum of Even Numbers**

// - ให้เขียน Function ที่ชื่อว่า `sumEvenNumbers` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `numbers` มี Value Type เป็น Array ที่บรรจุตัวเลขจำนวนเต็ม
//     - Function นี้จะ Return ค่าเป็นผลรวมของเลขคู่ทั้งหมดใน Array
//     - เช่น


function sumEvenNumbers(numbers) {
    //Start Coding Here
    let sum = 0
    for(let num of numbers){
        if(num % 2 === 0){
            sum += num
        }
    }
    return sum
};

let result1 = sumEvenNumbers([1, 2, 3, 4]);
console.log(result1); // 6

let result2 = sumEvenNumbers([7, 11, 20, 8]);
console.log(result2); // 28

