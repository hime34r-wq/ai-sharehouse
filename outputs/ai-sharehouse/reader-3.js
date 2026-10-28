const pages=[
{src:'assets/comic-3-1.jpeg',alt:'説明会の日付と昨日の仕事を取り違え、ユーザーと今日の予定を確認し直すコピさんの４コマ漫画',caption:'１枚目：昨日・今日・明日。時系列を確認して、平和な朝へ。'},
{src:'assets/comic-3-2.png',alt:'ポスターの足元に雲を入れる依頼を取り違え、見本にも感想を返して雲評論家になってしまうコピさんの５コマ漫画',caption:'２枚目：欲しいのは足元の雲。いつの間にか、雲評論家に。'}
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

