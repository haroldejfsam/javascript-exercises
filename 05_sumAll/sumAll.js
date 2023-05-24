const sumAll = function(num1,num2) {
    let finalSum = 0;

    let smallerNum = (num1 < num2) ? num1:num2;
    let biggerNum = (num2 > num1) ? num2:num1;
    
    if (typeof num1 != 'number' || typeof num2 != 'number') {
        return 'ERROR'
    }   else if (smallerNum<0 || biggerNum<0) {
        return 'ERROR'
    } else {
    
        for (let i = smallerNum; i <= biggerNum; i++) {
            finalSum += i; 
        
        }
    
    return finalSum;
        
    }

};

// Do not edit below this line
module.exports = sumAll;
