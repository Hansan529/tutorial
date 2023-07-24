// type 설정
const typeString: string = 'string';
const typeNumber: number = 10;
const typeArray: [] = [];
const typeArray2: number[] = [1, 2, 3];
const typeObject: {} = {};
const typeObject2: {} = { 1: 'fir', 2: 'sec' };
const typeVoid = function (): void {
  console.log('void');
};
const typeNever = function (): never {
  throw new Error();
};
const typeNever2 = function (): never {
  while (true) {
    //
  }
};
