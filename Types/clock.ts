// tsc clock.ts

function numberToWords(num1: number, num2: number, num3: number): string {
  // Helper function to convert a single number to words
  function convertSingleNumber(num: number): string {
    const ones = [
      '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
      'seventeen', 'eighteen', 'nineteen'
    ];
    
    const tens = [
      '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    
    const thousands = ['', 'thousand', 'million', 'billion'];
    
    if (num === 0) return 'zero';
    if (num < 0) return 'negative ' + convertSingleNumber(-num);
    
    function convertHundreds(n: number): string {
      let result = '';
      
      if (n >= 100) {
        result += ones[Math.floor(n / 100)] + ' hundred';
        n %= 100;
        if (n > 0) result += ' ';
      }
      
      if (n >= 20) {
        result += tens[Math.floor(n / 10)];
        n %= 10;
        if (n > 0) result += '-' + ones[n];
      } else if (n > 0) {
        result += ones[n];
      }
      
      return result;
    }
    
    if (num < 1000) {
      return convertHundreds(num);
    }
    
    let result = '';
    let thousandIndex = 0;
    
    while (num > 0) {
      if (num % 1000 !== 0) {
        const chunk = convertHundreds(num % 1000);
        if (thousandIndex > 0) {
          result = chunk + ' ' + thousands[thousandIndex] + (result ? ' ' + result : '');
        } else {
          result = chunk;
        }
      }
      num = Math.floor(num / 1000);
      thousandIndex++;
    }
    
    return result;
  }
  
  // Convert each number to words and join them
  const word1 = convertSingleNumber(num1);
  const word2 = convertSingleNumber(num2);
  const word3 = convertSingleNumber(num3);
  
  return `${word1}, ${word2}, ${word3}`;
}

// Example usage:
console.log(numberToWords(2, 15, 100));     // "two, fifteen, one hundred"
console.log(numberToWords(0, 7, 23));       // "zero, seven, twenty-three"
console.log(numberToWords(101, 1000, 5));   // "one hundred one, one thousand, five"