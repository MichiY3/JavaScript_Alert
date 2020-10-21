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
}else{messageSpan.textContent = ('やり直し');
}
messageSpan.style.color = 'blue';






}

