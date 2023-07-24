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
