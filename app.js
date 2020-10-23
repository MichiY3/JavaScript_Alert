console.log('-----------------関数--------------')
// 関数の書き方
// function　関数名（）{
	// 処理
// }
function myalert(){
	// alert('自作関数からhello');
	// アラートを表示後も自由に処理を追加できる
	let hantei =confirm('このボタンを押してもいいですか？');
	console.log(hantei);
	// OKが押されたら「大丈夫」　キャンセルだったら「やり直し」と表示させる
	if(hantei == true){
		console.log('大丈夫 :)');
		}else {
			console.log('やり直し');
		}
	


// 文字の変え方
// let messageSpan = document.getElementById('message');
// messageSpan.textContent = '変わりました';	
// messageSpan.style.color = 'blue';


// 宿題
// OKが押されたら「大丈夫」　キャンセルだったら「やり直し」と
// id="message"のspanタグの部分に表示させる

let messageSpan = document.getElementById('message');
 if(hantei == true){
messageSpan.textContent = ('大丈夫');
messageSpan.style.color = 'blue';
}else{messageSpan.textContent = ('やり直し');
messageSpan.style.color = 'red';
messageSpan.style.fontSize = '30px';
}
}


// ------------関数()引数付き-----------------
// 複数の処理を一つにまとめて名前をつけたもの
// 引数とは、処理を行うために必要な情報
// 関数の書き方
// function　関数名（引数１,引数２,...）{
	// 処理
// }
// alert('表示したい文字')_この場合、「表示したい文字」の部分が引数に当たる


function myalert2(displayMessage){
	alert(displayMessage);
}
// disaplyMessageは任意の名前



// 以下の関数を作成し、実行してください＜練習問題＞
// 関数名：printHoge
// 処理内容：「Hoge」とコンソールに表示する

function printHoge(){
	console.log('Hoge');
}
// 作った関数を実行
printHoge();


// 引数のあるバージョン

function printHoge(moji){
	console.log(moji);
}
printHoge('moji');


// 関数名　: printNum
// 引数：１つの数値
// 処理内容：引数で受け取った数値をコンソールに表示
// let i = 975
// function printNum(singleNumber){
// 	console.log(i);
// }
// printNum();

function printNum(num){
	console.log(num);
}
printNum(30);


// 関数名：printKuku
// 引数：1つの数値
// 処理内容：引数で受け取った数値の九九
// （1から9までかけた数）を出力する/
// 引数に１を指定したら、１の段の計算結果がコンソールに表示されるようにする
// 引数に２を指定したら、２の段の計算結果がコンソールに表示されるようにする
// for文は１つでOK （なくてもOK）

function printkukuk(kuku){
	for (let i = 1; i <= 9; i++){
	console.log(kuku * i);
}
}

printkukuk(3);

// ***--------考え方---------***
// function printKuku(num){
// 	let kotae = num * 1;
// 	console.log(kotae);
// 	let kotae = num * 2;
// 	console.log(kotae);
// 						~9まで
// }

// これを、まとめると
// function printKuku(num){
// for (let i = 1; i <=9; i++){
// 	console.log(num * i);
// }
// }
// 一の段
// printkukuk(1);
// 二の段
// printkukuk(2);
// 三の段
// printkukuk(3);


// console.log('----------------6.九九----------------');


//  for (let i = 1; i<=9; i++){
//  	for( let j = 1; j <=9; j++){
//  		console.log(i * j);
//  	} }
 


// 関数名：printKakezan
// 引数：2つの数値
// 処理内容：引数で受け取った２つの掛け算の答えを
// コンソールに表示されるようにする

function printKakezan(num1,num2){
	console.log(num1 * num2);
}

printKakezan(389,21);
printKakezan(567,91);
printKakezan(0,236);


// 関数名：printIsEven
// 引数：1つの数値
// 処理内容：引数で受け取った数値が偶数の場合は「偶数です」と出力し、
// 奇数の場合は「奇数です」と出力する

function printIsEven(even){
	// let messageSpan = document.getElementById('message2');
 if(even % 2 == 0){
// messageSpan.textContent = ('偶数です');
// }else{messageSpan.textContent = ('奇数です');
 	console.log('偶数です');
 } else{
 	console.log('奇数です');
 }
}
printIsEven(3483);
printIsEven(0);


// 関数名：printMessage
// 引数1：1つの文字列
// 引数2：1つの数字
// 処理内容：引数で受け取った文字列を、引数で受け取った数値分繰り返し出力する
// 例）WORKを３回指定したら
// WORK
// WORK
// WORKと出るけど、
// console.logには③WORKと表示される



// function printMessage(no,num);
//  for ( let no= 1;  no<= num; no++){
// 	console.log();
// }

// printMessage('work',2);

function printMessage(moji, num){
	for(let i = 1 ; i <= num; i++)
	console.log(moji);
}

printMessage('holiday',10);



// 関数名：printMaxNum
// 引数1：1つの数値
// 引数2：1つの数値
// 処理内容：引数で受け取った2つの数値のうち、最も大きな数値を出力する。

function printMaxNum(num1, num2){
	if(num1 > num2){
		console.log(num1);
	}else{
		console.log(num2);
		}
	// else if(num1 < num2 );{
	// }else{
	// 	console.log('同じ')
	// }
}	
printMaxNum(15,16)




// 関数名：getSquared
// 引数1：1つの数値
// 処理内容：引数で受け取った数値の2乗を計算し返す

// 例
// var result = getSquared(4);
// console.log(result);
// 実行結果
// 16


function getSquared(num){
	console.log(num * num);
}

getSquared(15)

// 戻り値（返り値） return 値；の形で、実行した側に戻される値
// 引数と逆方向に値を送る（返す)

// function getSquares(num){
// 	return num * num;
// }
// var result = getSquared(5);
// console.log(result);



// 関数名：createSelfIntroductionText
// 引数1：1つの文字列
// 処理内容：「私の名前は○○です」という文字の〇〇を引数で受け取った文字列にし返す

// 例
// var message = createSelfIntroductionText("NexSeed");
// console.log(message);
// 実行結果
// 私の名前はNexSeedです


function createSelfIntroductionText(name){
	console.log('『私の名前は'  + name + 'です」');
}

createSelfIntroductionText('Michi');


function createSelfIntroductionText(name){
	var msg = "私の名前は" + name + "です";
	return msg;
}
// let 変数名：再宣言ができない、再代入できる
// var　変数名：再宣言・再代入ができる
// const 定数名：再宣言。再代入ができない

const COMPANY = 'NexSeed';
var message = createSelfIntroductionText("NexSeed");
console.log(message);




// 関数名：isEvenNumber
// 引数1：1つの数値
// 処理内容：引数で渡された値が偶数の場合は true、そうでない場合は false を返す。

// 例
// var result = isEvenNumber(3);
// console.log(result);
// 実行結果
// false

function isEvenNumber(even){
	if(even % 2 == 0){
	console.log('true');
	}else{
		console.log('false');
}
}
isEvenNumber(11);


var result =isEvenNumber(99);
function isEvenNumber(even){
	if(even % 2 == 0){
		return true;
	}else{
		return false;
}
}
console.log(result);




// 関数名：isSeedKun
// 引数1：任意の文字列
// 処理内容：引数で渡された文字列が「SeedKun」の場合は true、
// そうでない場合は false を
 function isSeedKun(namae){
 	if(namae == 'SeedKun'){
 		console.log('true');
 	}else{
 		console.log('false');
 	}
 }

isSeedKun('Seedchan');
isSeedKun('Seedkun');
isSeedKun('SeedKun');


var result = isSeedKun('Seedchan');
var result = isSeedKun('Seedkun');
var result = isSeedKun('SeedKun');
function isSeedKun(str){
 	if(str == 'SeedKun'){
 		return true;
 	}else{
 		return false;
 	}
 }

console.log(result);









