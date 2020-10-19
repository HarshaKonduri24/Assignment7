//STEP 1
function halfnumber(no) {
    "use strict";
    var result = no / 2;
    window.console.log("Half of " + no + " is " + result + ".");
    return result;
}
//STEP 2
function squareNumber(no) {
    "use strict";
    var result = no * no;
    window.console.log("The result of squaring the number " + no + " is " + result + ".");
    return result;
}
//STEP 3
function percentOf(no1, no2) {
    "use strict";
    var result = (no1 / no2) * 100;
    window.console.log(no1 + " is " + result + "% of " + no2 + ".");
    return result;
}
//STEP 4
function findModulus(no1, no2) {
    "use strict";
    var result = no1 % no2;
    window.console.log(result + " is the modulus of " + no1 + " and " + no2);
    return result;
}
//STEP 5
function getSum(nostr) {
    "use strict";
    var sum = 0;
    var len = nostr.length;
    for (var i = 0; i < len; i++) {
        sum += parseInt(nostr[i]);
    }
    window.console.log("The sum of the given input is:" + sum);

}
var nostr = window.prompt("Enter numbers with commas inbetween: ");
nostr = nostr.split(',');
getSum(nostr);
halfnumber(48);
squareNumber(27);
percentOf(27, 100);
findModulus(23, 98);