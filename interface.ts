interface Person{
    name: string;
    age: number;
}

function logAge(someone: Person){
    console.log(someone.age);
}

var captain = {name: 'Capt', age : 100};
logAge(captain);

var kiwon = function getPerson(someone : Person){
    return someone;
}

// ? : 옵션속성, 매개변수가 있으나 없으나 상관없다, 유연한 인터페이스 속성 설정

interface Person2{
    name? : string,
    age: number;
}
function logAge2(someone: Person2){
    console.log(someone.age);
}
var hyun = {age: 100};
logAge2(hyun);