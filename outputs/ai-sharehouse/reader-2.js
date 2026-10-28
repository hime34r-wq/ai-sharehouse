const pages=[
{src:'assets/comic-2-1.png',alt:'朝の挨拶と曜日の確認。今日は捏造しなかった、たぶん、と言うコピさんの２コマ漫画',caption:'１枚目：「たぶん」はあかんな。'},
{src:'assets/comic-2-2.png',alt:'２コマの漫画を４コマと呼んでしまうコピさん。昨日は曜日、今日はコマ数と、監査対象が増える３コマ漫画',caption:'２枚目：昨日は曜日、今日はコマ数。監査対象が増えとる！'}
];
let current=0;
const page=document.getElementById('page'),prev=document.getElementById('prev'),next=document.getElementById('next');
function show(index){
current=Math.max(0,Math.min(pages.length-1,index));
const data=pages[current];
page.src=data.src;page.alt=data.alt;document.getElementById('full').href=data.src;
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
