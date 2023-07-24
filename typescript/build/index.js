"use strict";
// type 설정
const typeString = 'string'; // 문자열
const typeNumber = 10; // 숫자
const typeArray = []; // 배열
const typeArray2 = [1, 2, 3]; // 특정 타입의 배열
const typeObject = {}; // 오브젝트(객체)
const typeObject2 = { 1: 'fir', 2: 'sec' };
const typeVoid = function () {
    console.log('void'); // 반환되는 값이 없는 타입
};
const typeNever = function () {
    throw new Error(); // 절대로 실행되지 않는 타입
};
const typeNever2 = function () {
    while (true) {
        //
    }
};
const typeNull = null;
const typeUndefined = undefined;
// 타입 추론
const typeReasoning = 1; // const typeReasoning: number = 1
// 튜플 (Tuple)
let tuple;
tuple = [1, 'text'];
tuple[1].toUpperCase();
let interfaceUser = {
    name: 'userName',
    age: 20,
    birthYear: 2000,
    1: 'A',
    2: 'B',
    // 3: 'a',
};
interfaceUser.age = 10;
interfaceUser.gender = 'male';
const benz = {
    color: 'white',
    wheels: 4,
    start() {
        console.log('Start');
    },
    door: 5,
    stop() {
        console.log('Stop');
    },
};
const carToy = {
    color: 'red',
    wheels: 4,
    start() {
        console.log('놀이');
    },
    count: 3,
    price: 2000,
};
// Class가 상속받을 경우 implements를 사용
class Bmw {
    constructor(c) {
        this.wheels = 4;
        this.color = c;
    }
    start() {
        console.log('go...');
    }
}
const bmwTest = new Bmw('green');
const union = {
    name: '이름',
    grade: 'A',
};
// static
class Gender {
    constructor(gender) {
        this.gender = gender;
    }
    getGender() {
        console.log(this.gender);
        console.log(Gender.age);
    }
}
Gender.age = 19;
const abc = new Gender('male');
abc.getGender();
// abstract
class AbstractClass {
    constructor(age) {
        this.age = age;
    }
}
class ExtendsAbstract extends AbstractClass {
    constructor(age) {
        super(age);
    }
    fnc() {
        console.log('age: ', this.age);
    }
}
const abc2 = new ExtendsAbstract(23);
abc2.fnc();
