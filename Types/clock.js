// tsc clock.ts
function numberToWords(num1, num2, num3) {
    // Helper function to convert a single number to words
    function convertSingleNumber(num) {
        var ones = [
            '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
            'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
            'seventeen', 'eighteen', 'nineteen'
        ];
        var tens = [
            '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
        ];
        var thousands = ['', 'thousand', 'million', 'billion'];
        if (num === 0)
            return 'zero';
        if (num < 0)
            return 'negative ' + convertSingleNumber(-num);
        function convertHundreds(n) {
            var result = '';
            if (n >= 100) {
                result += ones[Math.floor(n / 100)] + ' hundred';
                n %= 100;
                if (n > 0)
                    result += ' ';
            }
            if (n >= 20) {
                result += tens[Math.floor(n / 10)];
                n %= 10;
                if (n > 0)
                    result += '-' + ones[n];
            }
            else if (n > 0) {
                result += ones[n];
            }
            return result;
        }
        if (num < 1000) {
            return convertHundreds(num);
        }
        var result = '';
        var thousandIndex = 0;
        while (num > 0) {
            if (num % 1000 !== 0) {
                var chunk = convertHundreds(num % 1000);
                if (thousandIndex > 0) {
                    result = chunk + ' ' + thousands[thousandIndex] + (result ? ' ' + result : '');
                }
                else {
                    result = chunk;
                }
            }
            num = Math.floor(num / 1000);
            thousandIndex++;
        }
        return result;
    }
    // Convert each number to words and join them
    var word1 = convertSingleNumber(num1);
    var word2 = convertSingleNumber(num2);
    var word3 = convertSingleNumber(num3);
    return "".concat(word1, ", ").concat(word2, ", ").concat(word3);
}
// Example usage:
console.log(numberToWords(2, 15, 100)); // "two, fifteen, one hundred"
console.log(numberToWords(0, 7, 23)); // "zero, seven, twenty-three"
console.log(numberToWords(1015645, 1000, 5)); // "one hundred one, one thousand, five"
