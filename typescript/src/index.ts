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

//
type Score = 'A' | 'B' | 'C' | 'F';

// interface
interface User {
  name: string;
  age: number;
  gender?: string; // 선택적 입력
  readonly birthYear: number; // 읽기 전용
  [grade: number]: Score; // [key] : value 여러개를 입력 기능
}

let interfaceUser: User = {
  name: 'userName',
  age: 20,
  birthYear: 2000,
  1: 'A',
  2: 'B',
  // 3: 'a',
};

interfaceUser.age = 10;
interfaceUser.gender = 'male';
// interfaceUser.birthYear = 1990; // 읽기 전용은 수정 불가능

interface Car {
  color: string;
  wheels: number;
  start(): void;
}
interface Toy {
  count: number;
}

// interface가 상속받을 경우 extends를 사용
interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
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

// interface가 여러개를 상속
interface CarToy extends Car, Toy {
  price: number;
}

const carToy: CarToy = {
  color: 'red',
  wheels: 4,
  start() {
    console.log('놀이');
  },
  count: 3,
  price: 2000,
};

// Class가 상속받을 경우 implements를 사용
class Bmw implements Car {
  color;
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log('go...');
  }
}
const bmwTest: Bmw = new Bmw('green');
