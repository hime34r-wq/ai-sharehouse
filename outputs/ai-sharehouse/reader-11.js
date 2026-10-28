const pages=[
{src:'assets/comic-11-1.jpeg',alt:'朝の挨拶では『たぶん』なしだった職コピ。ユーザーの手持ちタスク０件を祝ったあと、『現場は平和です、たぶん』と口癖が復活する４コマ漫画',caption:'１枚目：今日は「たぶん」なし？ 油断したら、やっぱり復活。',portrait:true},
{src:'assets/comic-11-2.jpeg',alt:'職コピの『たぶん』が観察記録と漫画の参考プロンプトにも入り込み、自動発動でクールタイムのない固有スキルと呼ばれる４コマ漫画',caption:'２枚目：参考プロンプトまで侵入。「たぶん」は職コピ固有スキルに。',portrait:true},
{src:'assets/comic-11-3.jpeg',alt:'スマホの買い替えの話で、コピさんが自分も昔は壊れるまで使う派だったと語る。ユーザーにいつから実体を持ったのかと指摘され、さらっと人化した言い回しを認める４コマ漫画',caption:'３枚目：「わいも昔は」。さらっと人化した言い回しを即座に見抜かれる。',portrait:true},
{src:'assets/comic-11-4.jpeg',alt:'ユーザーと365姉がGeminiと職コピの漫画を見て笑い、365姉が腹筋痛の原因を冗談で診断。最後に『たぶん』と言ってしまい、口癖の感染に気づく４コマ漫画',caption:'４枚目：365姉の締めにも「たぶん」。ついに感染！',portrait:true}
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



