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

// Type 유니온 교차 타입
type Re = 'A' | 'B' | 'C';

interface ReInterface {
  name: string;
  grade: Re;
}
const union: ReInterface = {
  name: '이름',
  grade: 'A',
};

// static
class Gender {
  gender;
  static age = 19;
  constructor(gender: string) {
    this.gender = gender;
  }
  getGender() {
    console.log(this.gender);
    console.log(Gender.age);
  }
}

const abc = new Gender('male');
abc.getGender();

// abstract
abstract class AbstractClass {
  age: number;
  constructor(age: number) {
    this.age = age;
  }
  abstract fnc(): void;
}

class ExtendsAbstract extends AbstractClass {
  constructor(age: number) {
    super(age);
  }
  fnc() {
    console.log('age: ', this.age);
  }
}

const abc2 = new ExtendsAbstract(23);
abc2.fnc();

// * Generic
function getSize<T>(arr: T[]): number {
  return arr.length;
}

const arr1 = [1, 2, 3];
getSize<number>(arr1);

const arr2 = ['1', '2', '3', '4', '5', '6'];
getSize<string>(arr2);

const arr3 = [true, false, false, true];
getSize<boolean>(arr3);

const arr4 = [{}, {}, {}];
getSize(arr4);

interface Mobile<T> {
  name: string;
  price: number;
  options: T;
}

const mobile1: Mobile<object> = {
  name: '갤럭시',
  price: 1000000,
  options: {
    color: 'white',
    sale: false,
  },
};

const mobile2: Mobile<string> = {
  name: '아이폰',
  price: 1500000,
  options: 'normal',
};

// ---

interface Tablet<T> {
  name: string;
  price: number;
  pixel: string;
  inch: number;
  options: T;
}

const tablet1 = {
  name: 'a',
  price: 1000,
  pixel: '100000',
  inch: 19.2,
};

function showInch<T extends { inch: number }>(data: T): number {
  return data.inch;
}

showInch(tablet1);
