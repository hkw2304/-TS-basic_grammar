
// 타입 별칭 : 자료형에 이름을 붙혀 가독성을 높혀준다., 사용자 정의 클래스가 생각??

type MyMessage = string | number;
function logText(text: MyMessage){

}
var message : MyMessage = 'hello';
logText(message);

type User = {
    id: string;
    name : string;
}
var kiwon2 : User;

interface Admin{
    id: string;
    name: string;
}
var kiwon3 : Admin;

type Person4 = {
    name: string;
    age: number;
}
type Developer4 = {
    skill : string;
}
type Joo = Person & Developer4;
var joo : Joo = {
    name: 'kiwon',
    age: 29,
    skill : 'hello'
}