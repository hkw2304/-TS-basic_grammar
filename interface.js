"use strict";
function logAge(someone) {
    console.log(someone.age);
}
var captain = { name: 'Capt', age: 100 };
logAge(captain);
var kiwon = function getPerson(someone) {
    return someone;
};
function logAge2(someone) {
    console.log(someone.age);
}
var hyun = { age: 100 };
logAge2(hyun);
