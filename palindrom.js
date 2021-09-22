// Javascript implementation to check
// if an array is PalinArray or not

// Function to check if palindrome or not
function isPalindrome(N) {
    let str = "" + N;
    let len = str.length;
    for (let i = 0; i < parseInt(len / 2, 10); i++) {
        if (str[i] != str[len - 1 - i])
            return false;
    }
    return true;
}

// Function to check if an array is
// PalinArray or not
function isPalinArray(arr, n) {
    // Traversing each element of the array
    // and check if it is palindrome or not
    for (let i = 0; i < n; i++) {
        let ans = isPalindrome(arr[i]);
        if (ans == false)
            return false;
    }
    return true;
}

let arr = [121, 131,];

// length of array
let n = arr.length;

let res = isPalinArray(arr, n);
if (res == true)
    console.log("Array is a PalinArray");
else
    console.log("Array is not a PalinArray");

// This code is contributed by decode2207.
