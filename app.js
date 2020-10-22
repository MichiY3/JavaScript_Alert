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




