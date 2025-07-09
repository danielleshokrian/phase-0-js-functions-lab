function calculateTax(amount) {
    return amount * (.10);
}
console.log(calculateTax(100))

function convertToUpperCase(text) {
    return text.toUpperCase();
}
console.log(convertToUpperCase("hello world"));


function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}   

console.log(findMaximum(10, 20));


function isPalindrome(word) {
    const cleaned = word.toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}   
console.log(isPalindrome("Racecar"));


function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * (discountPercentage / 100));
}   
console.log(calculateDiscountedPrice(100, 20)); 


