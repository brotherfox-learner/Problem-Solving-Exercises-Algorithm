// - ให้เขียน Function ที่ชื่อว่า `findMax` ซึ่งมีคุณสมบัติดังนี้
//     - รับ Parameter 1 ตัวคือ `nums` มี Value Type เป็น Array ที่บรรจุตัวเลขจำนวนเต็ม
//     - Function นี้จะ Return ค่าเป็น ตัวเลขที่มากที่สุด ใน Array นั้น
//     - เช่น

function findMax(nums) {
    //Start Coding Here
    // const result = nums.reduce((acc,cur)=>{
    //     acc = cur > acc ? cur : acc
    //     return acc
    // }, nums[0])
    // return result

    // for loop
    let max = -Infinity
    for(let num of nums){
        if(num > max){
            max = num
        }
    } 
    return max
};

let result1 = findMax([1, 9, 3, 5]);
console.log(result1); // 9

let result2 = findMax([-10, -5, -2]);
console.log(result2); // -2
