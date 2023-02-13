"use strict";(globalThis["webpackChunkjp_flashcard"]=globalThis["webpackChunkjp_flashcard"]||[]).push([[805],{1816:(e,a,t)=>{t.d(a,{H:()=>l,N$:()=>o});var r=t(7141),s=t(2857);const n={apiKey:"AIzaSyBDlgNqvxPdP__ikTXGY8SDyYmK-xnEur8",authDomain:"jp-learning-chrome-extension.firebaseapp.com",databaseURL:"https://jp-learning-chrome-extension-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"jp-learning-chrome-extension",storageBucket:"jp-learning-chrome-extension.appspot.com",messagingSenderId:"904082508990",appId:"1:904082508990:web:c8823040360c99c16f62ef",measurementId:"G-XK05NP4348"},l=(0,r.ZF)(n),o=(0,s.N8)()},2597:(e,a,t)=>{t.d(a,{T:()=>l});var r=t(1809),s=t(1816),n=t(2857);const l=(0,r.Q_)("flashcard",{state:()=>({words:[],newWords:[],userEmail:""}),getters:{masteredWords:e=>e.words.filter((e=>e.mastered)),unmasteredWords:e=>e.words.filter((e=>!e.mastered)),allTags:e=>{const a=[];for(let t=0;t<e.words.length;t++)if(e.words[t].tags)for(let r=0;r<e.words[t].tags.length;r++)a.includes(e.words[t].tags[r])||a.push(e.words[t].tags[r]);return a}},actions:{addWord(e){this.words.push(e)},addnewWord(e){this.newWords.push(e)},updateWordInState(e){const a=this.words.findIndex((a=>a.kanji===e.kanji));this.words[a]=e},updateWord(e){const a=this.words.findIndex((a=>a.kanji===e.kanji));this.words[a]=e;const t=`${this.userEmail.replace(/\./g,",")}/words/${e.kanji}`;(0,n.Vx)((0,n.iH)(s.N$),{[t]:{hiragana:e.hiragana,mastered:e.mastered,status:e.status,tags:e.tags?e.tags:[]}})},addTagsToWord(e,a){const t=this.words.findIndex((a=>a.kanji===e.kanji));this.words[t].tags.push(...a)},removeTagsFromWord(e,a){const t=this.words.findIndex((a=>a.kanji===e.kanji));this.words[t].tags=this.words[t].tags.filter((e=>!a.includes(e)))}}})},2805:(e,a,t)=>{t.r(a),t.d(a,{default:()=>U});var r=t(9835),s=t(6970);const n={key:1};function l(e,a,t,l,o,d){const i=(0,r.up)("q-btn"),u=(0,r.up)("q-toolbar-title"),c=(0,r.up)("q-toolbar"),w=(0,r.up)("q-header"),p=(0,r.up)("q-item-label"),m=(0,r.up)("q-icon"),f=(0,r.up)("q-item-section"),g=(0,r.up)("q-item"),h=(0,r.up)("q-list"),k=(0,r.up)("q-scroll-area"),W=(0,r.up)("q-drawer"),j=(0,r.up)("router-view"),v=(0,r.up)("q-page-container"),_=(0,r.up)("q-layout"),b=(0,r.Q2)("ripple");return(0,r.wg)(),(0,r.j4)(_,{view:"lHh Lpr lFf"},{default:(0,r.w5)((()=>[(0,r.Wm)(w,{elevated:""},{default:(0,r.w5)((()=>[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[(0,r.Wm)(i,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:a[0]||(a[0]=a=>e.leftDrawerOpen=!e.leftDrawerOpen)}),(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Uk)(" JP Flashcard ")])),_:1}),e.user.email?((0,r.wg)(),(0,r.iD)("div",n,[(0,r.Uk)((0,s.zw)(e.user.email)+" ",1),(0,r.Wm)(i,{color:"primary",onClick:e.qSignOut},{default:(0,r.w5)((()=>[(0,r.Uk)(" 登出 ")])),_:1},8,["onClick"])])):((0,r.wg)(),(0,r.j4)(i,{key:0,color:"primary",onClick:e.qSignIn},{default:(0,r.w5)((()=>[(0,r.Uk)(" 登入 ")])),_:1},8,["onClick"]))])),_:1})])),_:1}),(0,r.Wm)(W,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":a[3]||(a[3]=a=>e.leftDrawerOpen=a),side:"left",bordered:""},{default:(0,r.w5)((()=>[(0,r.Wm)(p,{header:""},{default:(0,r.w5)((()=>[(0,r.Uk)(" 導航 ")])),_:1}),(0,r.Wm)(k,{class:"fit"},{default:(0,r.w5)((()=>[(0,r.Wm)(h,{padding:"",class:"menu-list"},{default:(0,r.w5)((()=>[(0,r.wy)(((0,r.wg)(),(0,r.j4)(g,{clickable:"",onClick:a[1]||(a[1]=a=>e.$router.replace("/"))},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{avatar:""},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{name:"quiz"})])),_:1}),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Uk)(" Flashcard ")])),_:1})])),_:1})),[[b]]),(0,r.wy)(((0,r.wg)(),(0,r.j4)(g,{clickable:"",onClick:a[2]||(a[2]=a=>e.$router.replace("/wordlist"))},{default:(0,r.w5)((()=>[(0,r.Wm)(f,{avatar:""},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{name:"list_alt"})])),_:1}),(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Uk)(" 單詞表 ")])),_:1})])),_:1})),[[b]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,r.Wm)(v,null,{default:(0,r.w5)((()=>[(0,r.Wm)(j)])),_:1})])),_:1})}var o=t(499),d=t(2857),i=t(4836),u=t(2597),c=t(1816);const w=(0,i.v0)(c.H),p=(0,u.T)();let m=(0,o.iH)({});(0,i.Aj)(w,(e=>{e?(m.value=e,e.email&&(p.userEmail=e.email,(0,d.jM)((0,d.iH)(c.N$,`${e.email.replace(/\./g,",")}/words`),(e=>{for(const a in e.val()){let t={kanji:a,hiragana:e.val()[a].hiragana,mastered:e.val()[a].mastered,status:e.val()[a].status,tags:e.val()[a].tags};p.words.find((e=>e.kanji===a))?p.updateWordInState(t):("new"==t.status&&p.newWords.push(t),p.addWord(t))}})))):m.value={}}));const f=(0,r.aZ)({name:"MainLayout",components:{},setup(){const e=(0,o.iH)(!1),a=()=>{const e=new i.hJ;(0,i.rh)(w,e)},t=()=>{(0,i.w7)(w)};return{leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value},qSignIn:a,qSignOut:t,user:m}}});var g=t(1639),h=t(249),k=t(6602),W=t(1663),j=t(4455),v=t(1973),_=t(906),b=t(3115),q=t(6663),I=t(3246),Z=t(490),Q=t(1233),y=t(7856),T=t(2133),x=t(1136),D=t(9984),S=t.n(D);const C=(0,g.Z)(f,[["render",l]]),U=C;S()(f,"components",{QLayout:h.Z,QHeader:k.Z,QToolbar:W.Z,QBtn:j.Z,QToolbarTitle:v.Z,QDrawer:_.Z,QItemLabel:b.Z,QScrollArea:q.Z,QList:I.Z,QItem:Z.Z,QItemSection:Q.Z,QIcon:y.Z,QPageContainer:T.Z}),S()(f,"directives",{Ripple:x.Z})}}]);