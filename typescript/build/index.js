"use strict";
// type 설정
const typeString = 'string';
const typeNumber = 10;
const typeArray = [];
const typeArray2 = [1, 2, 3];
const typeObject = {};
const typeObject2 = { 1: 'fir', 2: 'sec' };
const typeVoid = function () {
    console.log('void');
};
const typeNever = function () {
    throw new Error();
};
const typeNever2 = function () {
    while (true) {
        //
    }
};
