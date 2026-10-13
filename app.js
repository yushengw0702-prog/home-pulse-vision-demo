const asset = (name) => `./assets/${name}`;

const paths = {
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
  back: '<path d="m15 18-6-6 6-6"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  chat: '<path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.6 8.6 0 0 1-4.2-1.1L3 21l1.5-4.8A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8 11h8M8 14h5"/>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/>',
  camera: '<rect x="3" y="6" width="18" height="14" rx="3"/><circle cx="12" cy="13" r="3.5"/><path d="M8 6 9 4h6l1 2"/>',
  video: '<rect x="3" y="5" width="14" height="14" rx="2"/><path d="m17 10 4-3v10l-4-3"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  checkCircle: '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>',
  alert: '<path d="M12 4 2.5 20h19L12 4Z"/><path d="M12 9v5M12 17h.01"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>',
  paw: '<circle cx="7" cy="8" r="1"/><circle cx="12" cy="6" r="1"/><circle cx="17" cy="8" r="1"/><circle cx="19" cy="12" r="1"/><path d="M12 12c-2.4 0-3.4 3.3-5.7 4.7-1.6 1-.8 3.3 1.1 3.3 1.7 0 2.9-.8 4.6-.8s2.9.8 4.6.8c1.9 0 2.7-2.3 1.1-3.3C15.4 15.3 14.4 12 12 12Z"/>',
  person: '<circle cx="12" cy="7.5" r="4"/><path d="M4.5 21c.3-4 3.2-6.5 7.5-6.5s7.2 2.5 7.5 6.5"/>',
  yard: '<path d="m3 11 9-7 9 7v10H3z"/><path d="M9 21v-7h6v7"/>',
  car: '<path d="M5 16 7 7h10l2 9M4 16h16v4H4zM7 20v2M17 20v2M4 12h16"/>',
  package: '<path d="m3 7 9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10M8 5l9 4"/>',
  food: '<path d="M4 13h16a7 7 0 0 1-7 7h-2a7 7 0 0 1-7-7ZM6 9c2-2 3 1 5-1M13 8c2-2 3 1 5-1"/>',
  activity: '<path d="m7 21 3-6 2 2 2 4M5 13l4-3 3 2 3-2 4 3M9 10l1-3 3-1M17 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>',
  moon: '<path d="M20 15.7A8.5 8.5 0 0 1 8.3 4 8.5 8.5 0 1 0 20 15.7Z"/>',
  spark: '<path d="m12 2 2.3 7.7L22 12l-7.7 2.3L12 22l-2.3-7.7L2 12l7.7-2.3z"/>',
  heart: '<path d="M20.5 8.4c0 4.4-8.5 10.6-8.5 10.6S3.5 12.8 3.5 8.4a4.3 4.3 0 0 1 8.5-1 4.3 4.3 0 0 1 8.5 1Z"/>',
  settings: '<path d="M4 7h16M4 17h16M9 4v6M15 14v6"/>',
  more: '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="9" r="1.5"/><path d="m4 18 5-5 3 3 3-4 5 6"/>',
  eye: '<path d="M2 12s3.7-6 10-6 10 6 10 6-3.7 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
  eyeOff: '<path d="m3 3 18 18M10.5 6.1A11 11 0 0 1 12 6c6.3 0 10 6 10 6a16 16 0 0 1-3.2 3.7M7.5 7.5C4 9.2 2 12 2 12s3.7 6 10 6c1.7 0 3.2-.4 4.5-1"/>',
  send: '<path d="m3 11 18-8-8 18-2-8-8-2ZM11 13l10-10"/>',
  shield: '<path d="M12 2 4 5v7c0 5 3.4 8.1 8 10 4.6-1.9 8-5 8-10V5z"/><path d="m9 12 2 2 4-4"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  volume: '<path d="M4 9v6h4l5 4V5L8 9zM17 9a5 5 0 0 1 0 6M19 6a9 9 0 0 1 0 12"/>',
  edit: '<path d="m4 20 4.5-1 11-11-3.5-3.5-11 11zM14.5 6.5l3 3"/>',
  refresh: '<path d="M20 8a8 8 0 0 0-13.6-2L4 8M4 4v4h4M4 16a8 8 0 0 0 13.6 2L20 16M16 16h4v4"/>',
  wifi: '<path d="M2 9a15 15 0 0 1 20 0M5 12a11 11 0 0 1 14 0M8 15a7 7 0 0 1 8 0M12 19h.01"/>',
  bars: '<path d="M4 20v-4M8 20v-7M12 20v-10M16 20V7M20 20V4"/>',
};

function icon(name, size = 18) {
  return `<svg class="icon" width="${size}" height="${size}" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.info}</svg>`;
}
function esc(value) {
  return String(value).replace(/[&<>"']/g, (s) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
}

const PHASES = ['draft','armed','observing','normal','attention','unknown','resolved'];
const PHASE_LABEL = {draft:'尚未创建',armed:'守护中',observing:'核对中',normal:'已确认',attention:'需要关注',unknown:'无法确认',resolved:'已处理'};
const OBJECTS = [
  {id:'buddy',name:'Buddy',kind:'金毛 · 3岁',icon:'paw',photo:'buddy-feeding.jpg',scenes:['meal','petdamage']},
  {id:'doorstep',name:'门口',kind:'包裹与来访',icon:'package',photo:'package-door.jpg',scenes:['parcel','basket']},
  {id:'entry',name:'玄关',kind:'出入与离家',icon:'home',photo:'front-door-day.jpg',scenes:['away','briefcase']},
  {id:'child',name:'小朋友',kind:'到家状态',icon:'person',photo:'front-door-day.jpg',scenes:['child']},
  {id:'living',name:'客厅',kind:'日常活动',icon:'yard',photo:'dog-sofa.jpg',scenes:['cleaning']},
  {id:'balcony',name:'阳台',kind:'天气变化',icon:'yard',photo:'front-door-day.jpg',scenes:['rain']},
  {id:'aquarium',name:'鱼缸',kind:'水位观察',icon:'eye',photo:'front-door-day.jpg',scenes:['turtle']},
];
const objectForScene = id => OBJECTS.find(item=>item.scenes.includes(id)) || OBJECTS[0];
const state = {
  page:'home', sceneId:'meal', objectTab:'buddy', phaseById:{meal:'normal',petdamage:'normal',parcel:'normal',basket:'normal',child:'normal',rain:'normal'}, created:new Set(['meal','petdamage','parcel','basket','child','rain']),
  returnPage:'home', agentStep:0, agentBusy:null, agentPrompt:'', agentSource:'best', agentAwaiting:false, agentChoice:null, agentAdjust:false, agentRunId:0,
  zoneEdit:false, zoneX:35, zoneY:27, agentSuggestion:false, modal:'', toast:'',
  notices:[], bannerNoticeId:null, activeNoticeId:null, noticeReturnPage:'notifications', savedMemories:new Set(), guardEnabled:false,
  navScroll:0, agentMode:'create', chatMessages:[], chatBusy:false,
  focusPrefs:{}, focusZones:{}, manageSceneId:null, manageMessages:[], manageBusy:false, manageReturn:'detail',
};
const scene = () => SCENE_MAP[state.sceneId];
const phase = (id=state.sceneId) => state.phaseById[id] || 'draft';
const phaseInfo = (s=scene(), p=phase()) => {
  if(p==='draft')return ['这个关注尚未建立','先确认对象、可观察区域和提醒规则。','等待创建'];
  const info=s[p]||s.armed;
  if(p==='normal'&&state.focusPrefs[s.id]==='exception')return [info[0],s.id==='child'?'15:30 进入家门并关门，正常结果只在首页更新。':info[1],`${info[2].split(' · ')[0]} · 静默更新`];
  return info;
};
const image = name => asset(name);
const tone = (s=scene(),p=phase()) => p==='attention' ? (s.priority==='urgent'?'security':'care') : p==='unknown'?'unknown':'normal';
const badgeClass = p => p==='attention'?'orange':p==='unknown'?'gray':p==='normal'||p==='resolved'?'green':'';
const isPending = p => p==='attention'||p==='unknown';
let busyTimer, toastTimer, bannerTimer;
function noticeSpec(id,p){
  const s=SCENE_MAP[id], policy=NOTICE_POLICIES[id]?.[p];
  if(!s||!policy)return null;
  const level=state.focusPrefs[id]==='exception'&&p==='normal'?Math.min(policy.level,1):policy.level;
  return {sceneId:id,phase:p,type:policy.type,level,title:policy.title||s[p][0],body:policy.body||s[p][1],time:s[p][2].split(' · ')[0],why:policy.why||s.ground,baseline:policy.baseline||'',description:policy.description||'',action:s.action};
}
function activeNotice(){return state.notices.find(n=>n.id===state.activeNoticeId)||null;}
function noticeIcon(n){return icon(NOTICE_TYPES[n.type]?.icon||'bell',17);}

function statusBar(){return `<div class="status-bar"><span>9:41</span><span class="status-icons">${icon('bars')}${icon('wifi')}<span class="battery"></span></span></div>`;}
function appBar(){
  const title={home:'Home Pulse',attention:'我的关注',agent:'Home Pulse AI',notifications:'通知',detail:'关注详情','notice-detail':activeNotice()?.type==='memory'?'今日回忆':activeNotice()?.type==='alert'?'安全事件':'状态详情'}[state.page];
  const sub={attention:'值得留意的家与人',agent:state.agentMode==='chat'?'聊聊家里现在怎么样':state.agentMode==='manage'?'调整一件持续关注':'把关心变成持续观察',notifications:'按意义触达',detail:'持续关注事项','notice-detail':'AI 判断与下一步'}[state.page];
  return `<header class="app-bar"><button class="round-button" ${state.page==='home'?'data-page="attention" aria-label="我的关注"':'data-action="back" aria-label="返回"'}>${icon(state.page==='home'?'heart':'back')}</button><div class="app-bar-title">${esc(title)}${sub?`<small>${esc(sub)}</small>`:''}</div><button class="round-button ${state.notices.length?'alert-dot':''}" data-page="notifications" aria-label="查看通知">${icon('bell')}</button></header>`;
}
function footer(){return `<nav class="phone-footer" aria-label="主导航"><button class="nav-button ${state.page==='home'?'active':''}" data-page="home">${icon('home')}<span>首页</span></button><button class="nav-button ${state.page==='attention'?'active':''}" data-page="attention">${icon('heart')}<span>关注</span></button><button class="nav-button ${state.page==='agent'?'active':''}" data-page="agent">${icon('chat')}<span>Agent</span></button><button class="nav-button ${state.page==='notifications'||state.page==='notice-detail'?'active':''}" data-page="notifications">${icon('bell')}<span>通知</span></button></nav>`;}
function sidePanels(){
  const links=[['home','01','家庭状态','一眼知道家里怎么样'],['attention','02','我的关注','10 个场景均可建立关注'],['agent','03','Home Pulse Agent','自动执行，仅在不确定时询问'],['notifications','04','通知与处理','按状态分配注意力']].map(([key,no,title,sub])=>`<button class="stage-link ${state.page===key?'active':''}" data-page="${key}"><span class="num">${no}</span><span><strong>${title}</strong><small>${sub}</small></span>${icon('chevron')}</button>`).join('');
  const s=scene(),p=phase();
  const options=SCENARIOS.map(x=>`<option value="${x.id}" ${x.id===s.id?'selected':''}>${x.no} · ${x.name}</option>`).join('');
  const controls=PHASES.slice(1).map(key=>`<button class="control-phase ${p===key?'active':''}" data-console-phase="${key}" ${!state.created.has(s.id)?'disabled':''}><span class="phase-light ${key}"></span>${PHASE_LABEL[key]}</button>`).join('');
  const spec=noticeSpec(s.id,p);
  const route=s.id==='petdamage'&&p==='normal'?'<strong>普通活动 L1 · 晚间回忆 L2</strong><span>首页静默更新 · 晚间一条邀请</span>':spec?`<strong>${esc(NOTICE_TYPES[spec.type].name)} · L${spec.level}</strong><span>${esc(ATTENTION_DELIVERY[spec.level])}</span>`:'<strong>观察中</strong><span>尚未形成提醒结论</span>';
  const showcase=NOTICE_SHOWCASES.map(item=>`<button class="showcase-button ${item.type}" data-console-showcase="${item.type}"><span class="showcase-icon">${icon(NOTICE_TYPES[item.type].icon,16)}</span><span>${esc(item.label)}</span>${icon('chevron',14)}</button>`).join('');
  return `<aside class="stage-aside left"><div class="eyebrow">HOME PULSE · PRODUCT STORY</div><h1 class="stage-title">让家里的状态，<br>一眼就懂。</h1><p class="stage-description">从一句关心出发，经过可观察性确认，再用合适的方式把变化告诉你。</p><div class="step-list">${links}</div></aside><aside class="stage-aside right operator-console" aria-label="演示操作台"><div class="side-card"><div class="side-label"><span class="spark">✦</span> 场景操作台 · App 外</div><label class="console-label" for="console-scene">选择需求</label><select id="console-scene" class="console-select">${options}</select><p class="console-prompt">“${esc(s.prompt)}”</p><div class="console-actions"><button class="console-main" data-action="console-create">走完整创建链路</button><button class="console-secondary" data-action="console-seed">直接载入已创建</button></div><div class="console-divider"></div><label class="console-label">推进这个关注的状态</label><div class="phase-grid">${controls}</div><p class="console-status">当前：${esc(PHASE_LABEL[p])} · ${state.created.has(s.id)?'关注已创建':'请先创建关注'}</p><div class="console-route">${route}</div><div class="console-actions"><button class="console-secondary" data-action="console-home">查看 App 首页</button><button class="console-secondary" data-action="console-reset">重置此场景</button></div><div class="console-divider"></div><label class="console-label">一键演示四种通知</label><div class="showcase-list">${showcase}</div><p class="console-status">选择上方任一状态，也会按该对象的类型和注意力等级决定是否出现横幅。</p></div><div class="side-footnote">操作台只负责推进故事时间。App 内的页面、通知、判断依据和处理动作会随之变化。公开照片仅用于界面预览，不代表真实设备取证。</div></aside>`;
}
function homeMood(){const active=SCENARIOS.filter(s=>state.created.has(s.id));return active.some(s=>phase(s.id)==='attention'&&noticeSpec(s.id,'attention')?.type==='alert')?'security':active.some(s=>phase(s.id)==='attention')?'care':active.some(s=>phase(s.id)==='unknown')?'unknown':'normal';}
function mascot(){const mood=homeMood();return `<div class="mascot ${mood}" aria-hidden="true"><div class="face"><span class="eye left"></span><span class="eye right"></span><span class="mouth"></span></div></div>`;}
function attentionCount(){return SCENARIOS.filter(s=>isPending(phase(s.id))).length;}
function activeCount(){return state.created.size;}
function sceneCard(s, opts={}){
  const p=phase(s.id), f=phaseInfo(s,p), selected=state.sceneId===s.id;
  return `<button class="story-card glass-card ${selected?'selected':''}" data-open-scene="${s.id}"><span class="story-image"><img src="${image(s.photo)}" alt="${esc(s.object)}区域预览"><span class="story-icon">${icon(s.icon)}</span></span><span class="story-copy"><small>${s.no} · ${esc(s.group)}</small><strong>${esc(s.name)}</strong><em>${esc(f[0])}</em></span><span class="story-state ${p}">${esc(PHASE_LABEL[p])}</span></button>`;
}
function homePage(){
  const pending=attentionCount();
  const mood=homeMood();
  const title=mood==='security'?'家里有安全事项需要处理':mood==='care'?`${pending} 项状态需要你关注`:mood==='unknown'?`${pending} 项状态还无法确认`:'今天家里很安心';
  const summary=mood==='normal'?'你关注的人与事都在各自的节奏里。':`${pending} 项关注出现变化，点开对应事项查看依据。`;
  const current=OBJECTS.find(item=>item.id===state.objectTab)||OBJECTS[0];
  const active=current.scenes.map(id=>SCENE_MAP[id]).filter(s=>s&&state.created.has(s.id));
  const remaining=current.scenes.map(id=>SCENE_MAP[id]).filter(s=>s&&!state.created.has(s.id));
  const tabs=OBJECTS.map(item=>{
    const count=item.scenes.filter(id=>state.created.has(id)).length;
    const alert=item.scenes.some(id=>isPending(phase(id)));
    return `<button class="object-tab ${item.id===current.id?'active':''}" data-object-tab="${item.id}" aria-pressed="${item.id===current.id}"><span class="object-tab-icon">${icon(item.icon,17)}${alert?'<i class="object-alert"></i>':''}</span><span>${esc(item.name)}</span>${count?`<small>${count}</small>`:''}</button>`;
  }).join('');
  const cards=active.map(s=>{
    const p=phase(s.id),f=phaseInfo(s,p);
    return `<button class="concern-card glass-card ${p}" data-open-scene="${s.id}"><span class="concern-icon ${badgeClass(p)}">${icon(s.icon,20)}</span><span class="concern-copy"><span class="concern-top"><strong>${esc(s.name)}</strong><em class="badge ${badgeClass(p)}">${esc(PHASE_LABEL[p])}</em></span><span class="concern-status">${esc(f[0])}</span><span class="concern-meta">${esc(f[2])}</span></span><span class="concern-arrow">${icon('chevron',16)}</span></button>`;
  }).join('');
  const ideas=remaining.map(s=>`<button class="concern-create" data-create="${s.id}">${icon('plus',16)} 新建「${esc(s.name)}」</button>`).join('');
  return `<section class="hero home-hero"><div class="mascot-space">${mascot()}</div><h1>${title}</h1><p>${esc(summary)}</p><button class="attention-pill ${mood}" data-page="attention">${icon(pending?'alert':'checkCircle')} ${pending?`${pending} 项需要留意`:`${activeCount()} 项关注守护中`} ${icon('chevron')}</button></section><div class="section-heading object-heading"><div><h2>关注对象</h2><p>选择一个对象，快速查看它的每件事</p></div></div><div class="object-tabs" aria-label="关注对象">${tabs}</div><div class="object-section-head"><img src="${image(current.photo)}" alt=""><span><strong>${esc(current.name)}</strong><small>${esc(current.kind)} · ${active.length} 项持续关注</small></span></div><div class="concern-list">${cards||'<div class="glass-card empty-object">这里还没有关注事项。点按下方新建，让 Home Pulse 先理解你在意什么。</div>'}${ideas}</div><div class="home-section-end">每件关注都有自己的判断依据与提醒方式</div>`;
}
function attentionPage(){
  const active=SCENARIOS.filter(s=>state.created.has(s.id));
  const remaining=SCENARIOS.filter(s=>!state.created.has(s.id));
  return `<div class="page-heading"><div class="eyebrow">THINGS THAT MATTER</div><h1>每件关心，都有回应</h1><p>关注是有对象、有范围、有判断边界的持续任务。</p></div><div class="attention-summary glass-card"><div><strong>${active.length}</strong><span>持续关注</span></div><div><strong>${attentionCount()}</strong><span>需要留意</span></div><div><strong>${SCENARIOS.length}</strong><span>可创建场景</span></div></div><div class="section-heading"><div><h2>正在关注</h2><p>点开可查看状态依据</p></div></div>${active.map(s=>sceneCard(s)).join('')||'<div class="glass-card blank-card">还没有关注。选择下面的一件事开始。</div>'}<div class="section-heading"><div><h2>你还可以关注</h2><p>从真实生活中的一句话开始</p></div></div>${remaining.map(s=>`<button class="idea-card" data-create="${s.id}"><span class="mini-icon">${icon(s.icon)}</span><span><strong>${esc(s.name)}</strong><small>“${esc(s.prompt)}”</small></span>${icon('plus')}</button>`).join('')}`;
}
function agentRow(body){return `<div class="agent-row"><div class="agent-mini">✦</div><div class="glass-card agent-card">${body}</div></div>`;}
function agentManagePage(){
  const s=SCENE_MAP[state.manageSceneId]||scene();
  const pref=state.focusPrefs[s.id]==='exception'?'仅异常提醒':'智能提醒';
  const messages=state.manageMessages.map(item=>`<div class="chat-message ${item.role}">${item.role==='assistant'?'<span class="chat-avatar">✦</span>':''}<div class="chat-bubble">${esc(item.text)}${item.done?`<button data-open-scene="${s.id}">返回关注详情 ${icon('chevron',14)}</button>`:''}</div></div>`).join('');
  return `<div class="manage-intro"><span class="agent-orb">✦</span><small>正在调整 · ${esc(s.object)}</small><h1>${esc(s.name)}</h1><p>告诉我你希望怎样被提醒，我会保留原有观察与判断边界。</p></div><div class="glass-card manage-current"><span>当前提醒方式</span><strong>${pref}</strong><small>${esc(s.schedule)} · ${esc(s.source)}</small></div><div class="chat-thread manage-thread"><div class="chat-message assistant"><span class="chat-avatar">✦</span><div class="chat-bubble">我会继续关注${esc(s.object)}。你想调整提醒方式吗？例如「只在异常时提醒我」。</div></div>${messages}${state.manageBusy?`<div class="chat-message assistant"><span class="chat-avatar">✦</span><div class="chat-bubble typing"><span class="thinking-orb"><i></i></span>正在核对提醒偏好与现有关注<span class="thinking-dots"><b></b><b></b><b></b></span></div></div>`:''}</div><div class="manage-quick"><button data-manage-choice="只在异常时提醒我">只在异常时提醒</button><button data-manage-choice="恢复智能提醒">恢复智能提醒</button></div><form class="agent-input chat-input" id="manage-form"><label class="sr-only" for="manage-prompt">调整这项关注</label><input id="manage-prompt" placeholder="说说你想怎样调整提醒…" autocomplete="off" ${state.manageBusy?'disabled':''}><button type="submit" aria-label="发送调整要求" ${state.manageBusy?'disabled':''}>${icon('send')}</button></form>`;
}
function agentProgress(){
  const steps=['理解关注目标','匹配可用设备','确定观察区域','建立判断与提醒','启动持续关注'];
  return `<section class="glass-card agent-progress" aria-label="创建关注进度"><div class="agent-progress-head"><span class="agent-progress-orb ${state.agentBusy?'spinning':''}">✦</span><span><strong>${state.agentStep===5?'关注已创建':state.agentAwaiting?'还需要你判断一件事':'正在创建关注事项'}</strong><small>${state.agentStep===5?'已开始持续观察，可随时调整':state.agentAwaiting?'其余步骤会自动继续':'我会自动完成能确定的步骤'}</small></span></div><div class="agent-progress-steps">${steps.map((label,index)=>{const n=index+1,done=state.agentStep>=n,working=state.agentBusy?.next===n;return `<div class="agent-progress-step ${done?'done':working?'working':state.agentAwaiting&&n===3?'waiting':''}"><span class="agent-step-mark">${done?icon('check',12):working?'<i class="agent-step-spinner"></i>':state.agentAwaiting&&n===3?'?':String(n).padStart(2,'0')}</span><span>${label}</span>${working?'<small>进行中</small>':state.agentAwaiting&&n===3?'<small>待你选择</small>':''}</div>`;}).join('')}</div></section>`;
}
function agentPage(){
  if(state.agentMode==='chat')return agentChatPage();
  if(state.agentMode==='manage')return agentManagePage();
  const s=scene(),plan=AGENT_PLANS[s.id],hasRun=state.agentStep>0||state.agentBusy||state.agentAwaiting;
  let flow='';
  if(hasRun){
    flow+=`<div class="user-message">${esc(state.agentPrompt||s.prompt)}</div>${agentProgress()}`;
    if(state.agentStep>=1)flow+=agentRow(`<h3>我会关注这件事</h3><div class="agent-result-main"><span class="mini-icon">${icon(s.icon,20)}</span><span><strong>${esc(s.name)}</strong><small>${esc(plan.goal)}</small></span></div><div class="agent-fact-line"><span>对象</span><strong>${esc(s.object)}</strong></div><div class="agent-fact-line"><span>时机</span><strong>${esc(s.schedule)}</strong></div>`);
    if(state.agentStep>=2)flow+=agentRow(`<h3>找到相关观察区域</h3><div class="agent-found-media"><img src="${image(s.photo)}" alt="${esc(s.zone)}示意预览"><span><strong>${esc(s.source)}</strong><small>${esc(plan.found)}</small></span></div><p>${esc(plan.sourceWhy)}</p><small class="agent-demo-caption">示意图片用于说明观察位置，不代表真实设备识别结果</small>`);
    if(state.agentAwaiting&&plan.ask)flow+=agentRow(`<h3>需要你决定</h3><p>${esc(plan.ask.title)}</p><div class="agent-ambiguity-preview"><img src="${image(s.photo)}" alt="${esc(s.object)}位置示意"><span class="agent-map-pin one">1</span><span class="agent-map-pin two">2</span><small>位置示意</small></div><div class="agent-choice-list">${plan.ask.choices.map((label,index)=>`<button data-agent-choice="${index}"><span>${String(index+1).padStart(2,'0')}</span><strong>${esc(label)}</strong>${icon('chevron',15)}</button>`).join('')}</div><div class="agent-note">${esc(plan.ask.body)}</div>`);
    if(state.agentStep>=3)flow+=agentRow(`<h3>观察位置已确定</h3><div class="agent-fact-line"><span>位置</span><strong>${esc(state.agentChoice===null?s.zone:plan.ask.choices[state.agentChoice])}</strong></div><p>${esc(s.limit)}</p>`);
    if(state.agentStep>=4)flow+=agentRow(`<h3>判断与提醒已安排</h3><div class="agent-rule-item"><span>判断</span><p>${esc(plan.decision)}</p></div><div class="agent-rule-item"><span>反馈</span><p>${esc(plan.notify)}</p></div><div class="agent-rule-item"><span>证据不足</span><p>${esc(s.unknownRoute)}</p></div>`);
    if(state.agentStep>=5)flow+=agentRow(`<div class="agent-created-head"><span>${icon('check',20)}</span><div><small>已创建并开始守护</small><h3>${esc(s.name)}</h3></div></div><p>以后状态有变化，我会按这件事的注意力等级告诉你。</p><div class="agent-created-summary"><span>${icon('eye',15)} ${esc(state.agentChoice===null?s.zone:plan.ask.choices[state.agentChoice])}</span><span>${icon('bell',15)} ${esc(plan.notify)}</span></div><div class="button-row"><button class="primary-button" data-action="open-detail">查看关注详情</button><button class="secondary-button" data-action="agent-adjust">调整观察区域</button></div><button class="agent-manage-link" data-action="manage-focus">告诉我如何调整提醒 ${icon('chevron',14)}</button>`);
    if(state.agentStep>=5&&state.agentAdjust)flow+=agentRow(`<h3>调整观察区域</h3><p>你可以主动改动观察框。画面为示意，正式接入后以授权设备为准。</p><div class="camera-frame region-frame ${state.zoneEdit?'editing':''}" data-action="position-zone"><img src="${image(s.photo)}" alt="${esc(s.zone)}示意画面"><span class="camera-label">${esc(s.source)} · 示意预览</span><span class="selection-box" style="--zone-x:${state.zoneX}%;--zone-y:${state.zoneY}%"><span>${esc(s.object)}</span></span></div><button class="secondary-button full" data-action="adjust-zone">${state.zoneEdit?'停止移动观察框':'点击后调整观察框'}</button><button class="primary-button full agent-save-zone" data-action="agent-save-adjust">保存调整</button>`);
    if(state.agentBusy){const task=['理解关注目标','匹配可用设备','确定观察区域','建立判断与提醒','启动持续关注'][state.agentBusy.next-1];flow+=`<div class="thinking-row" role="status"><span class="thinking-orb"><i></i></span><span><strong>正在执行：${task}</strong><small>完成后会自动继续<span class="thinking-dots"><b></b><b></b><b></b></span></small></span></div>`;}
  }
  const ideas=SCENARIOS.map(x=>`<button data-create="${x.id}">${icon(x.icon)} ${esc(x.name)}</button>`).join('');
  return `<div class="agent-intro"><div class="agent-orb">✦</div><h1>${state.agentStep===5?'这件事已经安排好了':hasRun?'我正在把关心变成持续观察':'有什么想让我留意的？'}</h1><p>${state.agentStep===5?'现在开始持续观察，有变化会按约定告诉你。':hasRun?'确定的部分自动完成；需要你决定时才会询问。':'说出你在意的事，其余交给我来安排。'}</p></div><div class="conversation">${flow}</div>${!hasRun?`<form class="agent-input" id="agent-form"><label class="sr-only" for="agent-prompt">你想让我关注什么</label><input id="agent-prompt" value="${esc(state.agentPrompt)}" placeholder="例如：帮我留意门口的包裹…" autocomplete="off"><button type="submit" aria-label="发送">${icon('send')}</button></form><div class="suggestions">${ideas}</div>`:''}`;
}
function chatReply(question){
  const matched=matchScene(question);
  if(matched){
    if(!state.created.has(matched.id))return {text:`我还没有开始关注「${matched.name}」。如果你愿意，可以先建立这个关注；我会确认观察区域和提醒边界。`,create:matched.id};
    const p=phase(matched.id),f=phaseInfo(matched,p);
    return {text:`${f[0]}。${f[1]} 当前状态是「${PHASE_LABEL[p]}」。你可以点开查看判断依据。`,detail:matched.id};
  }
  const pending=SCENARIOS.filter(s=>state.created.has(s.id)&&isPending(phase(s.id)));
  if(pending.length)return {text:`家里有 ${pending.length} 项关注需要留意：${pending.map(s=>s.name).join('、')}。其他关注仍在持续观察。`,detail:pending[0].id};
  return {text:`目前有 ${activeCount()} 项关注在运行，暂时没有需要你处理的变化。你可以问我具体对象，比如「Buddy 午餐怎么样？」或「门口包裹还在吗？」`};
}
function agentChatPage(){
  const messages=state.chatMessages.map(message=>`<div class="chat-message ${message.role}">${message.role==='assistant'?'<span class="chat-avatar">✦</span>':''}<div class="chat-bubble">${esc(message.text)}${message.detail?`<button data-chat-detail="${message.detail}">查看这项关注 ${icon('chevron',14)}</button>`:''}${message.create?`<button data-create="${message.create}">建立这项关注 ${icon('plus',14)}</button>`:''}</div></div>`).join('');
  return `<div class="chat-intro"><span class="agent-orb">✦</span><h1>聊聊家里的事</h1><p>我会根据已建立的关注，解释此刻的状态。</p></div><div class="chat-thread">${messages||'<div class="chat-welcome">家里现在怎么样？或者告诉我，你想了解谁的近况。</div>'}${state.chatBusy?`<div class="chat-message assistant"><span class="chat-avatar">✦</span><div class="chat-bubble typing"><span class="thinking-orb"><i></i></span>正在核对相关关注与最新状态<span class="thinking-dots"><b></b><b></b><b></b></span></div></div>`:''}</div>${!state.chatMessages.length?'<div class="chat-prompts"><button data-chat-suggest="家里现在怎么样？">家里现在怎么样？</button><button data-chat-suggest="Buddy 午餐怎么样？">Buddy 午餐怎么样？</button><button data-chat-suggest="门口包裹还在吗？">门口包裹还在吗？</button></div>':''}<form class="agent-input chat-input" id="chat-form"><label class="sr-only" for="chat-prompt">询问家庭状态</label><input id="chat-prompt" placeholder="问问家里现在怎么样…" autocomplete="off" ${state.chatBusy?'disabled':''}><button type="submit" aria-label="发送" ${state.chatBusy?'disabled':''}>${icon('send')}</button></form>`;
}
function noticesPage(){
  const cards=state.notices.slice().reverse();
  const quiet=SCENARIOS.filter(s=>state.created.has(s.id)&&['normal','unknown'].includes(phase(s.id))&&(noticeSpec(s.id,phase(s.id))?.level??0)<2);
  const rows=cards.map(n=>`<button class="notification ${n.type} ${n.handled?'handled':''}" data-notice="${n.id}"><div class="notice-top"><span class="notice-app-icon">${noticeIcon(n)}</span><span>HOME PULSE · ${esc(NOTICE_TYPES[n.type].short)}${n.handled?' · 已处理':''}</span><time>${esc(n.time)}</time></div><div class="notice-body"><div><strong>${esc(n.title)}</strong><p>${esc(n.body)}</p></div><img src="${image(SCENE_MAP[n.sceneId].photo)}" alt="${esc(SCENE_MAP[n.sceneId].object)}预览"></div></button>`).join('');
  return `<div class="page-heading"><div class="eyebrow">HOME PULSE · 通知</div><h1>值得打扰时，才打扰你</h1><p>安全、照护、回忆和日常行动，各用合适的语气告诉你。</p></div>${cards.length?`<div class="notice-stack">${rows}</div>`:'<div class="glass-card blank-card">目前没有主动通知。家庭状态仍在首页持续更新。</div>'}<div class="section-heading"><div><h2>留在家里的更新</h2><p>低注意力变化只更新状态，不弹出横幅</p></div></div>${quiet.map(s=>`<button class="quiet-row" data-open-scene="${s.id}"><span class="mini-icon green">${icon('checkCircle')}</span><span><strong>${esc(phaseInfo(s,phase(s.id))[0])}</strong><small>${esc(PHASE_LABEL[phase(s.id)])} · 未发送通知</small></span>${icon('chevron')}</button>`).join('')||'<p class="micro">当前没有静默更新。</p>'}`;
}
function noticeDetailPage(){
  const n=activeNotice();if(!n)return '<div class="glass-card blank-card">这条通知暂时无法打开。</div>';
  const s=SCENE_MAP[n.sceneId], type=NOTICE_TYPES[n.type];
  const head=`<div class="notice-detail-head ${n.type}"><span class="notice-detail-icon">${noticeIcon(n)}</span><span class="notice-detail-type">${esc(type.name)} · ${esc(n.time)}</span><h1>${esc(n.title)}</h1><p>${esc(n.body)}</p></div>`;
  if(n.type==='memory')return `${head}<div class="memory-hero notice-memory-photo"><img src="${image(s.photo)}" alt="Buddy 在客厅的回忆画面"><div class="memory-overlay"><small>今日 · Buddy</small><h1>三个值得回看的瞬间</h1></div></div><div class="glass-card notice-detail-section"><h2>今天的故事</h2><p>${esc(n.description)}</p><div class="notice-action-row"><button class="primary-button" data-action="save-memory">${icon('heart')} ${state.savedMemories.has(n.id)?'已收藏':'收藏回忆'}</button><button class="secondary-button" data-action="open-related-detail">查看关注记录</button></div></div><div class="notice-explanation">${icon('spark')} ${esc(n.why)}</div>`;
  if(n.type==='alert')return `${head}<div class="glass-card notice-detail-section"><div class="notice-risk"><span>${icon('alert')} 需要关注</span><strong>${n.level===4?'立即处理':'高优先级'}</strong></div><h2>AI 发现了什么</h2><div class="notice-timeline"><div><time>01</time><span>${esc(s.evidence[0])}</span></div><div><time>02</time><span>${esc(s.evidence[1])}</span></div><div><time>03</time><span>${esc(s.evidence[3])}</span></div></div></div><div class="glass-card notice-detail-section"><h2>关键画面</h2><div class="evidence-frame"><img src="${image(s.photo)}" alt="${esc(s.object)}画面示意"><span class="camera-label">${esc(s.zone)} · 演示画面</span></div><p>${esc(n.why)}</p></div><div class="glass-card notice-detail-section"><h2>建议你现在</h2><p>${esc(n.action)}</p><div class="notice-action-row"><button class="primary-button" data-action="view-frame">查看实时画面</button><button class="secondary-button" data-action="guard-on">${state.guardEnabled?'已开启警戒':'开启警戒'}</button></div><button class="notice-text-button" data-action="resolve-notice">确认已处理</button></div>`;
  if(n.type==='insight')return `${head}<div class="glass-card notice-detail-section"><h2>${esc(s.object)} · 当前状态</h2><div class="insight-current">${icon('clock')}<strong>${esc(PHASE_LABEL[n.phase])}</strong><span>${esc(n.body)}</span></div>${n.baseline?`<div class="insight-baseline"><small>日常节奏</small><strong>${esc(n.baseline)}</strong></div>`:''}<div class="insight-baseline"><small>判断依据</small><strong>${esc(n.why)}</strong></div></div><div class="glass-card notice-detail-section"><h2>可以怎么做</h2><p>${esc(n.action)}</p><div class="notice-action-row"><button class="primary-button" data-action="view-frame">查看相关画面</button><button class="secondary-button" data-action="resolve-notice">确认并处理</button></div></div>`;
  return `${head}<div class="glass-card notice-detail-section"><h2>现在的情况</h2><div class="routine-photo"><img src="${image(s.photo)}" alt="${esc(s.object)}区域预览"><span>${esc(s.zone)}</span></div><p>${esc(n.why)}</p></div><div class="glass-card notice-detail-section"><h2>建议行动</h2><p>${esc(n.action)}</p><div class="notice-action-row"><button class="primary-button" data-action="resolve-notice">${n.handled?'已确认':'确认已处理'}</button><button class="secondary-button" data-action="view-frame">查看画面</button></div></div>`;
}
function detailPage(){
  const s=scene(),p=phase(),f=phaseInfo(),meta=FOCUS_DETAILS[s.id],shownZone=state.focusZones[s.id]?.label||s.zone;
  const status=meta.status[p]||PHASE_LABEL[p];
  const recent=state.notices.filter(n=>n.sceneId===s.id).slice(-3).reverse();
  const lastPhase=p==='resolved'?recent.find(n=>n.phase==='attention'||n.phase==='unknown')?.phase||'normal':p;
  const facts=meta.timeline[lastPhase]||(p==='observing'?[[s.observing[2].split(' · ')[0],s.observing[1]],['核对中',s.limit]]:[[s.armed[2].split(' · ')[0],s.armed[0]],['等待触发',s.rule]]);
  const rows=facts.map(([time,fact],i)=>`<div class="focus-observation-row"><time>${esc(time)}</time><span class="focus-timeline-node ${i===facts.length-1?'last':''}"></span><p>${esc(fact)}</p></div>`).join('');
  const conclusion=p==='armed'||p==='observing'?'继续观察，尚未形成最终判断':p==='unknown'?'证据不足，保持待确认':p==='resolved'?'本次已由你确认，持续关注仍在运行':f[0];
  const currentMark=p==='normal'?'normal':p==='attention'?'attention':p==='unknown'?'unknown':'idle';
  const marks=['normal','normal','normal','normal','unknown','normal',currentMark].map((mark,i)=>`<span class="focus-history-day ${mark}" aria-label="${i===6?'本次':`第 ${i+1} 次`}：${mark==='normal'?'正常':mark==='attention'?'需要关注':mark==='unknown'?'无法确认':'观察中'}"><span>${mark==='normal'?icon('check',13):mark==='attention'?icon('alert',13):mark==='unknown'?'?':'·'}</span><small>${i===6?'本次':String(i+1).padStart(2,'0')}</small></span>`).join('');
  const spec=noticeSpec(s.id,p);
  const route=spec?`L${spec.level} · ${ATTENTION_DELIVERY[spec.level]}`:'尚未触发提醒';
  const preview=`<div class="focus-preview"><img src="${image(s.photo)}" alt="${esc(shownZone)}示意画面"><div><strong>${esc(shownZone)}</strong><small>公开图片仅用于演示界面，不是设备证据</small></div><button data-action="view-frame" aria-label="查看观察区域">${icon('chevron',17)}</button></div>`;
  const action=isPending(p)?`<section class="glass-card focus-section focus-next ${meta.kind}"><div class="focus-section-title"><span class="mini-icon orange">${icon('spark')}</span><h2>现在可以做什么</h2></div><p>${esc(p==='unknown'?'查看当前画面；若仍被遮挡，等待下一次复核。':s.action)}</p><div class="button-row"><button class="primary-button" data-action="view-frame">${icon('eye')} 查看画面</button><button class="secondary-button" data-action="resolve">确认并处理</button></div></section>`:'';
  const related=recent.length?recent.map(n=>{
    const media=n.type==='memory'?`<img class="focus-related-thumb" src="${image(s.photo)}" alt="Buddy 回忆预览">`:`<span class="focus-related-icon ${n.type}">${noticeIcon(n)}</span>`;
    return `<button class="focus-related-row" data-notice="${n.id}">${media}<span><strong>${esc(n.title)}</strong><small>${esc(n.time)} · ${esc(NOTICE_TYPES[n.type].name)}${n.handled?' · 已处理':''}</small></span>${icon('chevron',16)}</button>`;
  }).join(''):`<div class="focus-related-empty"><span class="mini-icon green">${icon('checkCircle')}</span><span>${isPending(p)?'本次变化留在首页，尚未发送主动通知。':'最近没有需要处理的相关通知。'}<br><small>${esc(f[2])}</small></span></div>`;
  return `<div class="focus-detail ${meta.kind}"><section class="focus-hero ${p}"><div class="focus-hero-icon">${icon(s.icon,28)}</div><span class="focus-eyebrow">持续关注 · ${esc(s.group)}</span><h1>${esc(meta.title)}</h1><div class="focus-status ${p}">${icon(p==='attention'?'alert':p==='unknown'?'info':p==='normal'?'checkCircle':'clock',25)}<strong>${esc(status)}</strong></div><p>${esc(f[1])}</p><div class="focus-hero-meta"><span>${icon('clock',13)} ${esc(s.schedule)}</span><span>${icon('camera',13)} ${esc(s.source)}</span></div></section><div class="focus-why"><span>为什么关注</span><p>${esc(s.understand)}</p></div><section class="glass-card focus-section"><div class="focus-section-title"><span class="mini-icon">${icon('eye')}</span><h2>AI 观察</h2><small>可核对的事实</small></div><div class="focus-observation">${rows}</div><div class="focus-verdict"><span>${icon('spark',16)} 本次判断</span><strong>${esc(conclusion)}</strong></div>${meta.kind==='security'?preview:''}</section>${meta.kind==='security'||meta.kind==='routine'?action:''}<section class="glass-card focus-section focus-trend"><div class="focus-section-title"><span class="mini-icon green">${icon('activity')}</span><h2>状态趋势</h2><small>模拟历史</small></div><div class="focus-trend-caption"><strong>${esc(meta.trend.window)}</strong><span>近期观察节奏</span></div><div class="focus-history">${marks}</div><div class="focus-trend-stats"><div><small>${esc(meta.trend.label)}</small><strong>${esc(meta.trend.value)}</strong></div><div><small>本次观察</small><strong>${esc(f[2].split(' · ')[0])}</strong></div></div><p class="focus-trend-note">${esc(meta.trend.note)}</p></section><section class="glass-card focus-section"><div class="focus-section-title"><span class="mini-icon purple">${icon(s.id==='petdamage'?'spark':'clock')}</span><h2>相关记录</h2><small>最新变化</small></div>${related}</section>${meta.kind==='care'?action:''}<section class="glass-card focus-section"><div class="focus-section-title"><span class="mini-icon">${icon('shield')}</span><h2>判断边界</h2></div><p class="focus-reason">${esc(s.rule)}</p><div class="focus-limit">${icon('info',16)} <span>${esc(s.limit)}</span></div>${meta.kind!=='security'?preview:''}</section><section class="glass-card focus-section focus-settings"><div class="focus-section-title"><span class="mini-icon purple">${icon('settings')}</span><h2>关注设置</h2></div><div class="focus-setting-row"><span>关注对象</span><strong>${esc(s.object)}</strong></div><div class="focus-setting-row"><span>关注事项</span><strong>${esc(meta.title)}</strong></div><div class="focus-setting-row"><span>提醒方式</span><strong>${state.focusPrefs[s.id]==='exception'?'仅异常提醒':'智能提醒'}</strong></div><div class="focus-setting-row"><span>当前触达</span><strong>${esc(route)}</strong></div><div class="focus-setting-row"><span>判断方式</span><strong>AI 自动 · 证据不足则待确认</strong></div><button class="focus-manage-button" data-action="manage-focus">${icon('chat',17)} 用 Agent 调整关注 ${icon('chevron',15)}</button></section></div>`;
}
function detailHeader(title,ic,t=''){return `<h2><span class="mini-icon ${t}">${icon(ic)}</span>${title}</h2>`;}
function modalHtml(){if(!state.modal)return '';const s=scene();const view=state.modal==='frame';return `<div class="modal-backdrop" data-action="close-modal"><div class="modal ${view?'frame-modal':''}" role="dialog" aria-modal="true"><h2>${view?'观察区域预览':'调整关注'}</h2>${view?`<img src="${image(s.photo)}" alt="${esc(s.object)}画面预览"><p>这是公开图片构成的界面预览。真实接入后，此处显示用户授权的设备画面。</p>`:`<p>当前关注：${esc(s.name)}。可以重新确认摄像头与观察区域，提醒将按新规则继续。</p>`}<button class="primary-button full" data-action="close-modal">完成</button></div></div>`;}
function bannerHtml(){
  const n=state.notices.find(item=>item.id===state.bannerNoticeId);if(!n)return '';
  return `<div class="ios-banner ${n.type}" role="alert" aria-label="Home Pulse 通知横幅"><div class="ios-banner-main" data-banner-open="${n.id}" role="button" tabindex="0"><div class="ios-banner-top"><span class="ios-banner-icon">${noticeIcon(n)}</span><strong>HOME PULSE</strong><time>现在</time></div><strong class="ios-banner-title">${esc(n.title)}</strong><p>${esc(n.body)}</p>${n.type==='memory'?`<img src="${image(SCENE_MAP[n.sceneId].photo)}" alt="Buddy 回忆缩略图">`:''}</div><button class="ios-banner-close" data-action="dismiss-banner" aria-label="关闭通知横幅">×</button></div>`;
}
function render(opts={}){
  const root=document.getElementById('app');const old=document.getElementById('phone-scroll')?.scrollTop||0;
  const pages={home:homePage,attention:attentionPage,agent:agentPage,notifications:noticesPage,detail:detailPage,'notice-detail':noticeDetailPage};
  root.innerHTML=`<main class="workspace">${sidePanels()}<div class="phone-wrap"><div class="phone">${statusBar()}${appBar()}<div class="content-scroll" id="phone-scroll">${pages[state.page]()}</div>${state.page==='home'?`<div class="home-float-actions"><button class="float-action" data-action="open-agent-create" aria-label="创建新关注" title="创建新关注">${icon('plus',25)}</button><button class="float-action" data-action="open-agent-chat" aria-label="与 Home Pulse 对话" title="与 Home Pulse 对话">${icon('chat',23)}</button></div>`:''}${footer()}<div class="home-indicator"></div>${state.toast?`<div class="toast">${icon('checkCircle')} ${esc(state.toast)}</div>`:''}${bannerHtml()}${modalHtml()}</div></div></main>`;
  const sc=document.getElementById('phone-scroll');sc.scrollTop=opts.scroll==='top'?0:opts.scroll==='bottom'?sc.scrollHeight:old;
}
function navigate(page,opts={}){if(!opts.keepBanner){state.bannerNoticeId=null;clearTimeout(bannerTimer);}state.page=page;state.modal='';render({scroll:'top'});if(window.innerWidth<=760)window.scrollTo(0,0);}
function flash(message){clearTimeout(toastTimer);state.toast=message;render();toastTimer=setTimeout(()=>{state.toast='';render();},2600);}
function selectScene(id,show='home'){
  if(!SCENE_MAP[id])return;clearTimeout(busyTimer);state.agentRunId++;state.agentBusy=null;state.sceneId=id;state.objectTab=objectForScene(id).id;state.agentStep=0;state.agentPrompt='';state.agentSource='best';state.agentAwaiting=false;state.agentChoice=null;state.agentAdjust=false;state.zoneEdit=false;state.zoneX=35;state.zoneY=27;navigate(show);
}
function startAgent(id,prompt){
  state.agentMode='create';selectScene(id,'agent');state.agentPrompt=prompt||SCENE_MAP[id].prompt;startBusy(1);
}
function openAgent(mode){clearTimeout(busyTimer);state.agentRunId++;state.agentMode=mode;state.agentBusy=null;state.agentStep=0;state.agentAwaiting=false;state.agentChoice=null;state.agentAdjust=false;state.agentPrompt='';navigate('agent');}
function openManage(){
  state.manageReturn=state.page==='agent'?'agent':'detail';state.manageSceneId=state.sceneId;state.manageMessages=[];state.manageBusy=false;state.agentMode='manage';navigate('agent');
}
function submitManage(text){
  if(state.manageBusy)return;
  const id=state.manageSceneId,thread=state.manageMessages;
  state.manageMessages.push({role:'user',text});state.manageBusy=true;render({scroll:'bottom'});
  setTimeout(()=>{
    if(!SCENE_MAP[id]||state.manageSceneId!==id||state.manageMessages!==thread)return;
    const exception=/异常|不正常|有问题|需要关注/.test(text)&&/只|仅|才|不要|别|不再/.test(text);
    const smart=/恢复|智能|默认|原来|正常提醒/.test(text);
    let reply;
    if(exception){state.focusPrefs[id]='exception';reply='已改为仅异常提醒。正常完成仍会更新首页；需要关注或无法确认时，我会按原注意力等级告诉你。';}
    else if(smart){delete state.focusPrefs[id];reply='已恢复智能提醒。我会按这件事原先约定的方式报告状态变化。';}
    else reply='我还不能可靠地把这句话转成提醒调整。你可以说「只在异常时提醒我」或「恢复智能提醒」。';
    state.manageMessages.push({role:'assistant',text:reply,done:exception||smart});state.manageBusy=false;
    if(state.page==='agent'&&state.agentMode==='manage')render({scroll:'bottom'});
  },2200);
}
function askChat(question){
  if(state.chatBusy)return;
  state.chatMessages.push({role:'user',text:question});state.chatBusy=true;render({scroll:'bottom'});
  setTimeout(()=>{state.chatMessages.push({role:'assistant',...chatReply(question)});state.chatBusy=false;if(state.page==='agent'&&state.agentMode==='chat')render({scroll:'bottom'});},2100);
}
function startBusy(next){
  clearTimeout(busyTimer);const runId=state.agentRunId,sceneId=state.sceneId;state.agentBusy={next};state.agentAwaiting=false;render({scroll:next===1?'top':'bottom'});
  const delay=next===1?1800:next===2?1900:next===3?1700:next===4?2100:1600;
  busyTimer=setTimeout(()=>{
    if(runId!==state.agentRunId||sceneId!==state.sceneId||state.agentMode!=='create')return;
    state.agentStep=next;state.agentBusy=null;
    if(next===5){if(!state.created.has(sceneId)){state.created.add(sceneId);state.phaseById[sceneId]='armed';}state.focusZones[sceneId]={label:state.agentChoice===null?SCENE_MAP[sceneId].zone:AGENT_PLANS[sceneId].ask.choices[state.agentChoice],x:state.zoneX,y:state.zoneY};render({scroll:'bottom'});return;}
    if(next===2&&AGENT_PLANS[sceneId].ask&&state.agentChoice===null){state.agentAwaiting=true;render({scroll:'bottom'});return;}
    render({scroll:'bottom'});busyTimer=setTimeout(()=>{if(runId===state.agentRunId&&sceneId===state.sceneId&&state.agentMode==='create')startBusy(next+1);},450);
  },delay);
}
function recordNotice(spec){
  if(!spec||spec.level<2)return null;
  const n={...spec,id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),handled:false};
  state.notices.push(n);state.notices=state.notices.slice(-30);state.bannerNoticeId=n.id;
  clearTimeout(bannerTimer);
  bannerTimer=setTimeout(()=>{if(state.bannerNoticeId===n.id){state.bannerNoticeId=null;render();}},10000);
  return n;
}
function advancePhase(p){
  const s=scene();if(!state.created.has(s.id))return;
  state.phaseById[s.id]=p;
  if(p==='normal'||p==='resolved')state.notices.filter(n=>n.sceneId===s.id).forEach(n=>n.handled=true);
  state.bannerNoticeId=null;clearTimeout(bannerTimer);
  recordNotice(noticeSpec(s.id,p));
  navigate('home',{keepBanner:true});
}
function triggerShowcase(type){
  if(type==='memory'){
    state.created.add(MEMORY_DIGEST.sceneId);
    state.sceneId=MEMORY_DIGEST.sceneId;state.objectTab=objectForScene(state.sceneId).id;
    recordNotice(MEMORY_DIGEST);navigate('home',{keepBanner:true});return;
  }
  const item=NOTICE_SHOWCASES.find(x=>x.type===type);if(!item)return;
  state.sceneId=item.sceneId;state.objectTab=objectForScene(item.sceneId).id;
  state.created.add(item.sceneId);advancePhase('attention');
}
function matchScene(text){const lower=text.toLowerCase();const ranked=SCENARIOS.map(s=>({s,score:s.keywords.reduce((n,k)=>n+(lower.includes(k.toLowerCase())?k.length:0),0)})).sort((a,b)=>b.score-a.score);return ranked[0]?.score?ranked[0].s:null;}

document.addEventListener('change',event=>{
  if(event.target.id==='console-scene')selectScene(event.target.value);
});
document.addEventListener('click',event=>{
  if(event.target.classList.contains('modal-backdrop')){state.modal='';render();return;}
  const showcase=event.target.closest('[data-console-showcase]');if(showcase){triggerShowcase(showcase.dataset.consoleShowcase);return;}
  const phaseControl=event.target.closest('[data-console-phase]');if(phaseControl){advancePhase(phaseControl.dataset.consolePhase);return;}
  const banner=event.target.closest('[data-banner-open]');if(banner){const n=state.notices.find(x=>x.id===banner.dataset.bannerOpen);if(n){state.noticeReturnPage=state.page;state.activeNoticeId=n.id;state.sceneId=n.sceneId;state.bannerNoticeId=null;clearTimeout(bannerTimer);navigate('notice-detail');}return;}
  const objectTab=event.target.closest('[data-object-tab]');if(objectTab){const object=OBJECTS.find(x=>x.id===objectTab.dataset.objectTab);if(object){state.objectTab=object.id;state.sceneId=object.scenes.find(id=>state.created.has(id))||object.scenes[0];render();}return;}
  const item=event.target.closest('[data-open-scene]');if(item){state.sceneId=item.dataset.openScene;state.returnPage=state.page;navigate('detail');return;}
  const chatDetail=event.target.closest('[data-chat-detail]');if(chatDetail){state.sceneId=chatDetail.dataset.chatDetail;state.returnPage='agent';navigate('detail');return;}
  const chatSuggest=event.target.closest('[data-chat-suggest]');if(chatSuggest){askChat(chatSuggest.dataset.chatSuggest);return;}
  const manageChoice=event.target.closest('[data-manage-choice]');if(manageChoice){submitManage(manageChoice.dataset.manageChoice);return;}
  const create=event.target.closest('[data-create]');if(create){startAgent(create.dataset.create);return;}
  const notice=event.target.closest('[data-notice]');if(notice){const n=state.notices.find(x=>x.id===notice.dataset.notice);if(n){state.noticeReturnPage=state.page;state.activeNoticeId=n.id;state.sceneId=n.sceneId;state.bannerNoticeId=null;clearTimeout(bannerTimer);navigate('notice-detail');}return;}
  const choice=event.target.closest('[data-agent-choice]');if(choice){const index=Number(choice.dataset.agentChoice),ask=AGENT_PLANS[state.sceneId]?.ask;if(state.agentAwaiting&&Number.isInteger(index)&&ask?.choices[index]){state.agentChoice=index;startBusy(3);}return;}
  const page=event.target.closest('[data-page]');if(page){if(page.dataset.page==='agent')state.agentMode='create';navigate(page.dataset.page);return;}
  const action=event.target.closest('[data-action]');if(!action)return;event.preventDefault();
  switch(action.dataset.action){
    case 'back':if(state.page==='agent'&&state.agentMode==='manage'&&state.manageReturn==='agent'){state.agentMode='create';navigate('agent');}else navigate(state.page==='detail'?state.returnPage:state.page==='notice-detail'?state.noticeReturnPage:state.page==='agent'&&state.agentMode==='manage'?'detail':'home');break;
    case 'dismiss-banner':state.bannerNoticeId=null;clearTimeout(bannerTimer);render();break;
    case 'open-agent-create':openAgent('create');break;
    case 'open-agent-chat':openAgent('chat');break;
    case 'manage-focus':openManage();break;
    case 'console-create':state.created.delete(state.sceneId);delete state.phaseById[state.sceneId];delete state.focusZones[state.sceneId];state.notices=state.notices.filter(n=>n.sceneId!==state.sceneId);startAgent(state.sceneId);break;
    case 'console-seed':state.created.add(state.sceneId);state.phaseById[state.sceneId]='armed';navigate('home');break;
    case 'console-home':navigate('home');break;
    case 'console-reset':state.created.delete(state.sceneId);delete state.phaseById[state.sceneId];delete state.focusZones[state.sceneId];state.notices=state.notices.filter(n=>n.sceneId!==state.sceneId);navigate('home');break;
    case 'create-current':startAgent(state.sceneId);break;
    case 'open-detail':state.returnPage=state.page;navigate('detail');break;
    case 'agent-adjust':state.agentAdjust=!state.agentAdjust;state.zoneEdit=false;render({scroll:'bottom'});break;
    case 'agent-save-adjust':state.focusZones[state.sceneId]={label:state.focusZones[state.sceneId]?.label||scene().zone,x:state.zoneX,y:state.zoneY};state.agentAdjust=false;state.zoneEdit=false;flash('观察区域已更新');break;
    case 'adjust-zone':state.zoneEdit=!state.zoneEdit;render();break;
    case 'position-zone':if(state.zoneEdit){const rect=action.getBoundingClientRect();state.zoneX=Math.max(4,Math.min(58,(event.clientX-rect.left)/rect.width*100-17));state.zoneY=Math.max(10,Math.min(60,(event.clientY-rect.top)/rect.height*100-18));render();}break;
    case 'view-frame':state.modal='frame';render();break;
    case 'guard-on':state.guardEnabled=true;flash('已开启本次事件的警戒演示');break;
    case 'save-memory':if(state.savedMemories.has(state.activeNoticeId))state.savedMemories.delete(state.activeNoticeId);else state.savedMemories.add(state.activeNoticeId);render();break;
    case 'open-related-detail':state.returnPage='notice-detail';navigate('detail');break;
    case 'resolve-notice':{const n=activeNotice();if(n){n.handled=true;if(['attention','unknown'].includes(n.phase))state.phaseById[n.sceneId]='resolved';flash('已记录你的处理，关注仍会继续');}break;}
    case 'close-modal':state.modal='';render();break;
    case 'resolve':state.phaseById[state.sceneId]='resolved';state.notices.filter(n=>n.sceneId===state.sceneId).forEach(n=>n.handled=true);flash('已记录你的处理，关注仍会继续');break;
  }
});
document.addEventListener('keydown',event=>{
  if((event.key==='Enter'||event.key===' ')&&event.target.matches('[data-banner-open]')){event.preventDefault();event.target.click();}
});
document.addEventListener('submit',event=>{
  if(event.target.id==='chat-form'){event.preventDefault();const value=event.target.querySelector('input').value.trim();if(value)askChat(value);return;}
  if(event.target.id==='manage-form'){event.preventDefault();const value=event.target.querySelector('input').value.trim();if(value)submitManage(value);return;}
  if(event.target.id!=='agent-form')return;event.preventDefault();const value=event.target.querySelector('input').value.trim();if(!value){flash('告诉我你想关注什么');return;}
  const s=matchScene(value);if(!s){state.agentPrompt=value;state.agentSuggestion=true;flash('请选择下方最接近的关注场景');return;}
  startAgent(s.id,value);
});
render({scroll:'top'});
