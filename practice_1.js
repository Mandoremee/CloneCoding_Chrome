//--------------------------------------------------
/*
//변수 선언은 기본이 const 특별할 때 let!!
const a = 211;
let b = a - 5; // 변수는 let
// a = 4; 상수를 변경하려고 하면 오류
console.log(b, a);

// what is var??
var i = 21;
var l = i - 10;
console.log(i-l);
//예전엔 var만 쓸 수 있었다고 합니다...
//let 과 var 의 차이에 대해 알아봐야겠다 (20200131)

//--------------------------------------------------
//Datatype에 대해... 너무 기본적이니 넘기자
//String 문자열...오! 이모티콘도 돼요
const what = "Gyeongmin"
console.log(what);

//boolean
const wat = true;
const waaat = false;

console.log(wat, waaat);

//Number >> int, float
const f_num = 5.33;

console.log(f_num);

*/

//--------------------------------------------------
/*
//organize Datatype

/*
1. array
2. Object
*/

//1. array ...여기도 넘어가자
/*
const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek[2]);

//2. Object _ able to name values >> 객체
const myInfo = {
    name:"Kim",
    age:25,
    gender:"Male",
    human:true,
    insideArray: [1, 2, 3],
    insideObject: [
        {
            name: "A",
            lev: 1
        },
        {
            name: "B",
            lev: 2
        }

    ]
};
console.log(myInfo.insideObject[1]);
*/

//객체 내부의 값은 변할 수 있으나 객체 자체를 바꿀순 없다.
/* 
const myInfo = 4 >> unable
myInfo.age = 30 >> able
*/

//--------------------------------------------------
// function 와! 겨우 여기까지 왔구나!
function cool(something, numbers){
    console.log(something, "yey~", numbers);
    console.log(something, ' IT IS DELICIOUS!!! about ', numbers, 'times!');
}
cool('potato!!!', 292);

//백틱 ` 사용법
function backTicks(something, numbers){
    return `wow ${something} is ${numbers} $!!`;
    //console.log(`wow ${something} is ${numbers} $!!`);
}
const testTxt = backTicks('mushroom', 20);
console.log(testTxt); //undefined?? why?
//testTxt는 backTicks function의 결과값(반환)을 값으로 받는데
//처음 function backTicks에서는 아무것도 반환하지 않는다!!

backTicks('potato!!!', 292);

//몇가지 function이 담긴 Object를 만들어보자!
//이때의 문장구조에 집중!
const calculator = {
    plus: function(a, b){ // 변수명1: function(인자1, ...){}
        return a+b;
    },
    minus: function(a, b){
        return a-b;
    },
    multi: function(a, b){
        return a*b;
    },
    devide: function(a, b){
        if(b != 0){
            return a/b;
        }
        else return `it is unable calculation : b is ${b}`;
    },
    power: function(a, b){
        return a**b;
    },
    mod: function(a, b){
        if(b != 0){
            return a%b;
        }
        else return `it is unable calculation : b is ${b}`;
    }
}
console.log(calculator.mod(72, 21));