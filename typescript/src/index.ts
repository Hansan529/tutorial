// type 설정
const typeString: string = 'string'; // 문자열
const typeNumber: number = 10; // 숫자
const typeArray: [] = []; // 배열
const typeArray2: number[] = [1, 2, 3]; // 특정 타입의 배열
const typeObject: {} = {}; // 오브젝트(객체)
const typeObject2: {} = { 1: 'fir', 2: 'sec' };
const typeVoid = function (): void {
  console.log('void'); // 반환되는 값이 없는 타입
};
const typeNever = function (): never {
  throw new Error(); // 절대로 실행되지 않는 타입
};
const typeNever2 = function (): never {
  while (true) {
    //
  }
};
const typeNull: null = null;
const typeUndefined: undefined = undefined;

// 타입 추론
const typeReasoning = 1; // const typeReasoning: number = 1

// 튜플 (Tuple)
let tuple: [number, string];
tuple = [1, 'text'];
tuple[1].toUpperCase();
