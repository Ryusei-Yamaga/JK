/**
 * const letなどの変数宣言
 */

// const val3 = "const変数";
// console.log(val3);

// val3 = "上書き不可";
// console.log(val3);

// const val3 = "const";

/**
 * constで定義したオブジェクトはプロパティの変更が可能
 */

// const val4 = {
//   name: "じゃ",
//   age: 28,
// };
// val4.name="流星";
// val4.address = "広島";
// console.log(val4);

// const val5 =['dog','cat'];
// val5[0]="bird";
// val5.push("monkey");
// console.log(val5);

//ほとんどがconstを使う
//たまにletを使いそう

/**
 * テンプレート文字列
 */

// const name = "雅恵";
// const age = 28;

// // [私の名前は雅恵です。年齢は28歳です。]

// // template文字列を用いる
// const message = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message);

/**
 * アロー関数について
 */

//従来
// function func1(str){
//   return str;
//  }

//  console.log(func1("こんにちは"));

//アロー関数
// const func2 = (str) => str;

// console.log(func2("func2です"));

// const func3 = (num1,num2) => num1 + num2;

// console.log(func3(10,20));

/**
 * 分割代入
 */
// const myProfile={
//    name: "流星",
//    age: 22,
//  };

//  const message1 =`名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
//  console.log(message1);

// const {name,age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`
//  console.log(message2);

// const myProfile = ['流星',22];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`
// console.log(message3);

// const [name,age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message4);

// /**
//  * default値
//  */

//  const sayHello = (name="サスケ") => console.log(`こんにちは。${name}さん。`)
//  sayHello();

/**
 * スプレット構文 ...
 *
 */
//配列
// const arr1 = [1,2,3];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// //まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3]=arr2
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

//=でコピーすると参照を引継ぐからこのように使う
