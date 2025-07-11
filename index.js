function calculateTax(amount) {
    if (amount <= 0) return 0;
    return amount * 0.10;
}


function convertToUpperCase(text) {
    return text.toUpperCase();
}



function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2;
}   




function isPalindrome(word) {
    const cleaned = word.toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}   



function calculateDiscountedPrice(originalPrice, discountPercentage) {
    return originalPrice - (originalPrice * (discountPercentage / 100));
}   



