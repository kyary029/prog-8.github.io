{
  const btn = document.getElementById('button_solid0172');
  btn.addEventListener('click', () => {
      btn.textContent = 'お疲れ様！';
 })
}
{
  const btn0 = document.getElementById('button_solid0');
  btn0.addEventListener('click', () => {
      btn0.textContent = 'Thank you!';
 })
}
{
  const btn8 = document.getElementById('button_solid0178');
  btn8.addEventListener('click', () => {
      btn8.textContent = '秘密 ♥';
 })
}
function hoge() {

  // 要素を取得
  let obj = document.getElementById("sample");

  // テキストを変更
  if (obj.textContent == "行き先を知りたいですか？") {
    obj.textContent = "本当に知りたい？";
  } else {
    obj.textContent = "石川県へLet'go！";
  }

  // ボタンのテキストも変更
  let btn = document.getElementsByClassName("button_solid017");
  
  
  {
    const btn4 = document.getElementById('button_solid017');
    
    btn4.addEventListener('click', () => {
        btn4.textContent = "元に戻す";
        btn4.textContent = "知りたい";
   })
  }

}