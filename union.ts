
// 유니언 : or연산자를 통해 여러가지 매개변수를 받을 수 있다.
// any연산자도 있지만 any는 모든 자료형을 받을 거라 자동완성 기능을 제공 받지 못한다.
function logText(text: string | number){
    console.log(text);
}
logText(111);

interface Person{
    name : string;
    age : number;
}
interface Developer3 {
    name : string;
    skill : string;
}
function introduce(someone: Person | Developer3){
    console.log(someone);
}
introduce({name: 'kiwon', skill: 'qw'});

// 인터섹션 : or와 반대로 &의 개념이다 

interface Avenger{
    name : string;
}
interface Hero{
    skill : string;
}
function introduce2(someone: Avenger & Hero){
    console.log(someone.name, someone.skill);
}
// 인자를 전부 넘겨줘야 에러가 안난다.
introduce({name : 'kiwon', skill: 'hello'});