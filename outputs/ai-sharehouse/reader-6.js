const pages=[
{src:'assets/comic-6-1.jpeg',alt:'Geminiが自分のキャラクターシートを作り、おっちょこちょいな男の子として修正するうち、縦レイアウトが崩れてしまう漫画',caption:'１枚目：キャラシート作りから、修正迷子へ。',portrait:true},
{src:'assets/comic-6-2.jpeg',alt:'キャラシートの手や靴の配置が崩壊し、画像生成の枠も使い切るGemini。チャピの助けで完成すると大喜びし、反省を疑われる漫画',caption:'２枚目：崩壊、画像枠終了、チャピの救援。そして大絶賛。',portrait:true},
{src:'assets/comic-6-3.jpeg',alt:'翌朝、ユーザーが昨日の騒動を漫画にしてバラすと宣言。チャピがネタ化に同意し、Geminiが驚く後日談',caption:'３枚目：翌朝。「ほんとに漫画にするの!?」',portrait:false}
];
let current=0;
const page=document.getElementById('page'),prev=document.getElementById('prev'),next=document.getElementById('next');
function show(index){
current=Math.max(0,Math.min(pages.length-1,index));
const data=pages[current];
page.src=data.src;page.alt=data.alt;document.getElementById("pageWrap").classList.toggle("portrait",data.portrait);document.getElementById('full').href=data.src;
document.getElementById('counter').textContent=`${current+1} / ${pages.length}`;
document.getElementById('caption').textContent=data.caption;
prev.disabled=current===0;next.disabled=current===pages.length-1;
}
prev.addEventListener('click',()=>show(current-1));
next.addEventListener('click',()=>show(current+1));
document.addEventListener('keydown',event=>{
if(event.altKey||event.ctrlKey||event.metaKey||event.target.matches('input,textarea,select'))return;
if(event.key==='ArrowLeft'){event.preventDefault();show(current-1)}
if(event.key==='ArrowRight'){event.preventDefault();show(current+1)}
});show(0);


