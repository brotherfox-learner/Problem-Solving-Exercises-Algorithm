
// **Optional: Find Mode**

//     - ให้เขียน Function ที่ชื่อว่า `findMode` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `arr` เป็น Array ของตัวเลข
//     - Function นี้จะ Return ค่า เลขที่ปรากฏบ่อยที่สุด (mode) ใน Array
//     - ถ้ามีมากกว่า 1 ตัวที่ถี่ที่สุด ให้ return ตัวที่เจอก่อนใน Array
//     - เช่น
// สร้าง obj key num : value count เจอ ...spread , new : 0 ถ้ามีแล้ว ก็ ++
function findMode(arr) {
    //Start Coding Here
    let counter = {}
    for (let num of arr) {
        if (!counter[num]) {
            counter = { ...counter, [num]: 1 }
        } else if (counter[num]) {
            counter[num]++
        }
    }

    let maxCount = 0
    for (let count in counter) {
        if (counter[count] > maxCount) {
            maxCount = counter[count]
        }
    }

    for (let num of arr) {
        if (maxCount === counter[num]) {
            return num
        }
    }

    //Buit in
    // const counter = arr.reduce((acc, num) => {
    //     acc[num] = (acc[num] || 0) + 1;
    //     return acc;
    // }, {});

    // const maxCount = Math.max(...Object.values(counter));
    // return Number(arr.find(num => counter[num] === maxCount));
};

let result1 = findMode([1, 2, 2, 3, 3, 3, 4]);
console.log(result1); // 3

let result2 = findMode([7, 7, 1, 1, 7]);
console.log(result2); // 7

let result3 = findMode([7, 7, 1, 1, 7, 1]);
console.log(result3); // 7
