interface StringArray{
    // 배열의 인덱스는 기본적으로 무조건 number형이다.
    [index: number] :string;
}
var companies: StringArray = ['삼성', '네이버', '구글'];

console.log(companies[0]);

interface SalaryMap{
    [level: string]: number;
}
var salary: SalaryMap = {
    junior: 100,
    mid : 200
};
var money = salary['junior'];

// 이처럼 인터페이스로 명시적으로 타입을 정의 하는 것이 '인덱스 시그니처'라고 한다.

