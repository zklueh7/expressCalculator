function numArray(nums) {
    let numArr = nums.split(',');
    let intArr = [];
    for (let num in numArr) {
        intArr.push(parseInt(numArr[num]));
    }
    return intArr;
} 


function mean(nums) {
    let sum = 0;
    for (let num in nums) {
        sum += nums[num];
    }
    return sum / nums.length;
}


function median(nums) {
    nums.sort(function(a,b) {
        return a-b;
    });

    if(nums.length % 2 == 1) {
        return nums[((nums.length - 1) / 2)];
    }      
    else {
        let lowMid = nums[(nums.length / 2) - 1];
        let highMid = nums[nums.length / 2];
        return (lowMid + highMid) / 2;
    }      
}


function mode(nums) {
    let numCounter = {};
    let temp = 1, finalMode;
    for (let num in nums) {
        if(!numCounter[nums[num]]) {
            numCounter[nums[num]] = 1;
        }
        else {
            numCounter[nums[num]]++;
        }
    }
    console.log(numCounter);
    for (let key of Object.keys(numCounter)) {
        if (numCounter[key] > temp) {
            temp = numCounter[key];
            finalMode = key;
        }
    }
    if (temp != 1) {
        return +finalMode;
    }
    return -1;
}


module.exports = {
    mean,
    median,
    mode,
    numArray
};