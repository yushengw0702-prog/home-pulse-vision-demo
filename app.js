const asset = (name) => window.HOME_PULSE_IMAGES?.[name] || `./assets/${name}?v=image-recovery-1`;

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
const phaseLabel = (id,p) => id==='moments'?({draft:'尚未创建',armed:'正在发现',observing:'正在整理',normal:'今日已生成',attention:'特别发现',unknown:'暂无内容',resolved:'已收藏'}[p]||PHASE_LABEL[p]):PHASE_LABEL[p];
const OBJECTS = [
  {id:'buddy',name:'Buddy',kind:'金毛 · 3岁',icon:'paw',photo:'buddy-feeding.jpg',scenes:['meal','petdamage','moments']},
  {id:'doorstep',name:'门口',kind:'包裹与来访',icon:'package',photo:'package-door.jpg',scenes:['parcel','basket']},
  {id:'entry',name:'玄关',kind:'出入与离家',icon:'home',photo:'front-door-day.jpg',scenes:['away','briefcase']},
  {id:'child',name:'小朋友',kind:'到家状态',icon:'person',photo:'front-door-day.jpg',scenes:['child']},
  {id:'living',name:'客厅',kind:'日常活动',icon:'yard',photo:'dog-sofa.jpg',scenes:['cleaning']},
  {id:'balcony',name:'阳台',kind:'天气变化',icon:'yard',photo:'front-door-day.jpg',scenes:['rain']},
  {id:'aquarium',name:'鱼缸',kind:'水位观察',icon:'eye',photo:'front-door-day.jpg',scenes:['turtle']},
];
const objectForScene = id => OBJECTS.find(item=>item.scenes.includes(id)) || OBJECTS[0];
const state = {
  page:'home', sceneId:'meal', objectTab:'buddy', phaseById:{meal:'normal',petdamage:'normal',moments:'normal',parcel:'normal',basket:'normal',child:'normal',rain:'normal'}, created:new Set(['meal','petdamage','moments','parcel','basket','child','rain']),
  returnPage:'home', agentStep:0, agentBusy:null, agentPrompt:'', agentSource:'best', agentAwaiting:false, agentChoice:null, agentCustomArea:false, agentAreaMarked:false, agentAdjust:false, agentRunId:0,
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
const tone = (s=scene(),p=phase()) => s.id==='moments'?'normal':p==='attention' ? (s.priority==='urgent'?'security':'care') : p==='unknown'?'unknown':'normal';
const badgeClass = (p,id) => id==='moments'&&['normal','attention'].includes(p)?'purple':p==='attention'?'orange':p==='unknown'?'gray':p==='normal'||p==='resolved'?'green':'';
const isPending = (p,id) => id!=='moments'&&(p==='attention'||p==='unknown');
let busyTimer, toastTimer, bannerTimer;
function noticeSpec(id,p){
  const s=SCENE_MAP[id], policy=NOTICE_POLICIES[id]?.[p];
  if(!s||!policy)return null;
  const level=(state.focusPrefs[id]==='exception'||id==='moments'&&state.focusPrefs[id]==='special')&&p==='normal'?Math.min(policy.level,1):policy.level;
  return {sceneId:id,phase:p,type:policy.type,level,title:policy.title||s[p][0],body:policy.body||s[p][1],time:s[p][2].split(' · ')[0],why:policy.why||s.ground,baseline:policy.baseline||'',description:policy.description||'',action:s.action};
}
function activeNotice(){return state.notices.find(n=>n.id===state.activeNoticeId)||null;}
function noticeIcon(n){return icon(NOTICE_TYPES[n.type]?.icon||'bell',17);}

function statusBar(){return `<div class="status-bar"><span>9:41</span><span class="status-icons">${icon('bars')}${icon('wifi')}<span class="battery"></span></span></div>`;}
function appBar(){
  const noticeTask=activeNotice()?FOCUS_DETAILS[activeNotice().sceneId]?.watchType:null;
  const title={home:'Home Pulse',attention:'我的关注',agent:'Home Pulse AI',notifications:'通知',detail:'关注详情','notice-detail':noticeTask==='discovery'?'生活回忆':noticeTask==='risk'?'风险事件':'状态事件'}[state.page];
  const sub={attention:'值得留意的家与人',agent:state.agentMode==='chat'?'聊聊家里现在怎么样':state.agentMode==='manage'?'调整一件持续关注':'把关心变成持续观察',notifications:'按意义触达',detail:'持续关注事项','notice-detail':'AI 判断与下一步'}[state.page];
  return `<header class="app-bar"><button class="round-button" ${state.page==='home'?'data-page="attention" aria-label="我的关注"':'data-action="back" aria-label="返回"'}>${icon(state.page==='home'?'heart':'back')}</button><div class="app-bar-title">${esc(title)}${sub?`<small>${esc(sub)}</small>`:''}</div><button class="round-button ${state.notices.length?'alert-dot':''}" data-page="notifications" aria-label="查看通知">${icon('bell')}</button></header>`;
}
function footer(){return `<nav class="phone-footer" aria-label="主导航"><button class="nav-button ${state.page==='home'?'active':''}" data-page="home">${icon('home')}<span>首页</span></button><button class="nav-button ${state.page==='attention'?'active':''}" data-page="attention">${icon('heart')}<span>关注</span></button><button class="nav-button ${state.page==='agent'?'active':''}" data-page="agent">${icon('chat')}<span>Agent</span></button><button class="nav-button ${state.page==='notifications'||state.page==='notice-detail'?'active':''}" data-page="notifications">${icon('bell')}<span>通知</span></button></nav>`;}
function sidePanels(){
  const links=[['home','01','家庭状态','一眼知道家里怎么样'],['attention','02','我的关注','十个核心场景与主动发现'],['agent','03','Home Pulse Agent','自动执行，关键节点确认'],['notifications','04','通知与处理','按状态分配注意力']].map(([key,no,title,sub])=>`<button class="stage-link ${state.page===key?'active':''}" data-page="${key}"><span class="num">${no}</span><span><strong>${title}</strong><small>${sub}</small></span>${icon('chevron')}</button>`).join('');
  const s=scene(),p=phase();
  const options=SCENARIOS.map(x=>`<option value="${x.id}" ${x.id===s.id?'selected':''}>${x.no} · ${x.name}</option>`).join('');
  const controls=PHASES.slice(1).map(key=>`<button class="control-phase ${p===key?'active':''}" data-console-phase="${key}" ${!state.created.has(s.id)?'disabled':''}><span class="phase-light ${key}"></span>${phaseLabel(s.id,key)}</button>`).join('');
  const spec=noticeSpec(s.id,p);
  const route=spec?`<strong>${esc(NOTICE_TYPES[spec.type].name)} · L${spec.level}</strong><span>${esc(ATTENTION_DELIVERY[spec.level])}</span>`:'<strong>观察中</strong><span>尚未形成提醒结论</span>';
  const showcase=NOTICE_SHOWCASES.map(item=>`<button class="showcase-button ${item.type}" data-console-showcase="${item.type}"><span class="showcase-icon">${icon(NOTICE_TYPES[item.type].icon,16)}</span><span>${esc(item.label)}</span>${icon('chevron',14)}</button>`).join('');
  return `<aside class="stage-aside left"><div class="eyebrow">HOME PULSE · PRODUCT STORY</div><h1 class="stage-title">让家里的状态，<br>一眼就懂。</h1><p class="stage-description">从一句关心出发，经过可观察性确认，再用合适的方式把变化告诉你。</p><div class="step-list">${links}</div></aside><aside class="stage-aside right operator-console" aria-label="演示操作台"><div class="side-card"><div class="side-label"><span class="spark">✦</span> 场景操作台 · App 外</div><label class="console-label" for="console-scene">选择需求</label><select id="console-scene" class="console-select">${options}</select><p class="console-prompt">“${esc(s.prompt)}”</p><div class="console-actions"><button class="console-main" data-action="console-create">走完整创建链路</button><button class="console-secondary" data-action="console-seed">直接载入已创建</button></div><div class="console-divider"></div><label class="console-label">推进这个关注的状态</label><div class="phase-grid">${controls}</div><p class="console-status">当前：${esc(phaseLabel(s.id,p))} · ${state.created.has(s.id)?'关注已创建':'请先创建关注'}</p><div class="console-route">${route}</div><div class="console-actions"><button class="console-secondary" data-action="console-home">查看 App 首页</button><button class="console-secondary" data-action="console-reset">重置此场景</button></div><div class="console-divider"></div><label class="console-label">一键演示四种通知</label><div class="showcase-list">${showcase}</div><p class="console-status">选择上方任一状态，也会按该对象的类型和注意力等级决定是否出现横幅。</p></div><div class="side-footnote">操作台只负责推进故事时间。App 内的页面、通知、判断依据和处理动作会随之变化。公开照片仅用于界面预览，不代表真实设备取证。</div></aside>`;
}
function homeMood(){const active=SCENARIOS.filter(s=>state.created.has(s.id)&&s.id!=='moments');return active.some(s=>phase(s.id)==='attention'&&noticeSpec(s.id,'attention')?.type==='alert')?'security':active.some(s=>phase(s.id)==='attention')?'care':active.some(s=>phase(s.id)==='unknown')?'unknown':'normal';}
function mascot(){const mood=homeMood();return `<div class="mascot ${mood}" aria-hidden="true"><div class="face"><span class="eye left"></span><span class="eye right"></span><span class="mouth"></span></div></div>`;}
function attentionCount(){return SCENARIOS.filter(s=>isPending(phase(s.id),s.id)).length;}
function activeCount(){return state.created.size;}
function sceneCard(s, opts={}){
  const p=phase(s.id), f=phaseInfo(s,p), selected=state.sceneId===s.id;
  return `<button class="story-card glass-card ${selected?'selected':''}" data-open-scene="${s.id}"><span class="story-image"><img src="${image(s.photo)}" alt="${esc(s.object)}区域预览"><span class="story-icon">${icon(s.icon)}</span></span><span class="story-copy"><small>${s.no} · ${esc(s.group)}</small><strong>${esc(s.name)}</strong><em>${esc(f[0])}</em></span><span class="story-state ${p}">${esc(phaseLabel(s.id,p))}</span></button>`;
}
const HOME_CARD_TITLES={parcel:'包裹状态',away:'门窗状态',petdamage:'客厅活动',child:'放学到家',meal:'饮食状态',cleaning:'保洁状态',briefcase:'公文包',rain:'雨天阳台',basket:'零食篮位置',turtle:'乌龟越线',moments:'精彩瞬间'};
const HOME_CARD_ICONS={petdamage:'activity',meal:'food',moments:'spark'};
function homeCard(s){
  const p=phase(s.id),f=phaseInfo(s,p),task=FOCUS_DETAILS[s.id],isDiscovery=task.watchType==='discovery';
  const status=isDiscovery?(p==='normal'?'3 个发现':p==='attention'?'特别发现':phaseLabel(s.id,p)):(task.status[p]||phaseLabel(s.id,p));
  const critical=p==='attention'&&noticeSpec(s.id,p)?.type==='alert';
  const tone=isDiscovery?'discovery':critical?'critical':p;
  const visual=isDiscovery?`<span class="home-card-thumbnails" aria-hidden="true">${task.discoveries.slice(0,3).map(item=>`<img src="${image(item.photo)}" alt="">`).join('')}</span>`:`<span class="home-card-bars" aria-hidden="true">${[36,56,43,76,60,92,68].map((height,i)=>`<i style="--bar-height:${height}%;--bar-delay:${i*28}ms"></i>`).join('')}</span>`;
  return `<button class="concern-card ${tone}" data-open-scene="${s.id}" aria-label="${esc(s.name)}，${esc(status)}，查看关注详情"><span class="home-card-top"><span class="concern-icon">${icon(HOME_CARD_ICONS[s.id]||s.icon,24)}</span><span class="home-card-chevron">${icon('chevron',15)}</span></span><span class="home-card-name">${esc(HOME_CARD_TITLES[s.id]||s.name)}</span><strong class="home-card-status">${esc(status)}</strong><span class="home-card-note">${esc(f[1])}</span><span class="home-card-foot"><small>${esc(f[2])}</small>${visual}</span></button>`;
}
function homePage(){
  const pending=attentionCount();
  const mood=homeMood();
  const title=mood==='security'?'家里有安全事项需要处理':mood==='care'?`${pending} 项状态需要你关注`:mood==='unknown'?`${pending} 项状态还无法确认`:'今天家里很安心';
  const summary=mood==='normal'?'你关注的人与事都在各自的节奏里。':`${pending} 项关注出现变化，点开对应事项查看依据。`;
  const stable=SCENARIOS.filter(s=>state.created.has(s.id)&&['normal','resolved'].includes(phase(s.id))).length;
  const tabs=OBJECTS.map(item=>{
    const count=item.scenes.filter(id=>state.created.has(id)).length;
    const alert=item.scenes.some(id=>isPending(phase(id),id));
    return `<button class="object-tab ${item.id===state.objectTab?'active':''}" data-object-tab="${item.id}" aria-pressed="${item.id===state.objectTab}"><span class="object-tab-icon">${icon(item.icon,17)}${alert?'<i class="object-alert"></i>':''}</span><span>${esc(item.name)}</span>${count?`<small>${count}</small>`:''}</button>`;
  }).join('');
  const groups=OBJECTS.map(item=>{
    const active=item.scenes.map(id=>SCENE_MAP[id]).filter(s=>s&&state.created.has(s.id));
    const remaining=item.scenes.map(id=>SCENE_MAP[id]).filter(s=>s&&!state.created.has(s.id));
    const ideas=remaining.map(s=>`<button class="home-create-card" data-create="${s.id}"><span>${icon('plus',22)}</span><strong>${esc(HOME_CARD_TITLES[s.id]||s.name)}</strong><small>创建新关注</small></button>`).join('');
    return `<section class="home-object-group" id="home-object-${item.id}" data-home-object="${item.id}"><div class="object-section-head"><img src="${image(item.photo)}" alt=""><span><strong>${esc(item.name)}</strong><small>${esc(item.kind)} · ${active.length} 项关注</small></span><em>${active.length?`${active.length} 项`:'待关注'}</em></div><div class="concern-list">${active.map(homeCard).join('')}${ideas}</div></section>`;
  }).join('');
  return `<div class="home-dashboard"><section class="hero home-hero"><div class="home-hero-eyebrow">HOME PULSE · 今日家庭状态</div><div class="mascot-space">${mascot()}</div><h1>${title}</h1><p>${esc(summary)}</p><div class="home-status-strip"><span><b>${stable}</b> 项状态稳定</span><i></i><span class="${pending?'has-attention':''}"><b>${pending}</b> 项需要留意</span></div><button class="attention-pill ${mood}" data-page="attention">查看全部关注 ${icon('chevron',14)}</button></section><div class="section-heading object-heading"><div><h2>我的关注</h2><p>选择对象，快速找到每一件关心的事</p></div></div><div class="object-tabs" aria-label="关注对象">${tabs}</div><div class="home-groups">${groups}</div></div>`;
}
function attentionPage(){
  const active=SCENARIOS.filter(s=>state.created.has(s.id));
  const remaining=SCENARIOS.filter(s=>!state.created.has(s.id));
  return `<div class="page-heading"><div class="eyebrow">THINGS THAT MATTER</div><h1>每件关心，都有回应</h1><p>关注是有对象、有范围、有判断边界的持续任务。</p></div><div class="attention-summary glass-card"><div><strong>${active.length}</strong><span>持续关注</span></div><div><strong>${attentionCount()}</strong><span>需要留意</span></div><div><strong>${SCENARIOS.length}</strong><span>可创建场景</span></div></div><div class="section-heading"><div><h2>正在关注</h2><p>点开可查看状态依据</p></div></div>${active.map(s=>sceneCard(s)).join('')||'<div class="glass-card blank-card">还没有关注。选择下面的一件事开始。</div>'}<div class="section-heading"><div><h2>你还可以关注</h2><p>从真实生活中的一句话开始</p></div></div>${remaining.map(s=>`<button class="idea-card" data-create="${s.id}"><span class="mini-icon">${icon(s.icon)}</span><span><strong>${esc(s.name)}</strong><small>“${esc(s.prompt)}”</small></span>${icon('plus')}</button>`).join('')}`;
}
function agentRow(body){return `<div class="agent-row"><div class="agent-mini">✦</div><div class="glass-card agent-card">${body}</div></div>`;}
function agentManagePage(){
  const s=SCENE_MAP[state.manageSceneId]||scene();
  if(s.id==='moments'){
    const preference=state.focusPrefs.moments==='special'?'仅特别瞬间通知':'每天 10:00 回忆邀请';
    const messages=state.manageMessages.map(item=>`<div class="chat-message ${item.role}">${item.role==='assistant'?'<span class="chat-avatar">✦</span>':''}<div class="chat-bubble">${esc(item.text)}${item.done?`<button data-open-scene="moments">返回发现任务 ${icon('chevron',14)}</button>`:''}</div></div>`).join('');
    return `<div class="manage-intro"><span class="agent-orb">✦</span><small>正在调整 · Buddy</small><h1>Buddy 精彩瞬间</h1><p>我会继续寻找有趣与温馨的片段。你可以调整回忆送达的方式。</p></div><div class="glass-card manage-current"><span>当前反馈</span><strong>${preference}</strong><small>照片 + AI 描述 · 画面不清晰时不生成</small></div><div class="chat-thread manage-thread"><div class="chat-message assistant"><span class="chat-avatar">✦</span><div class="chat-bubble">想继续每天 10:00 看回忆，还是只在发现特别瞬间时通知？</div></div>${messages}${state.manageBusy?`<div class="chat-message assistant"><span class="chat-avatar">✦</span><div class="chat-bubble typing">正在核对回忆反馈方式<span class="thinking-dots"><b></b><b></b><b></b></span></div></div>`:''}</div><div class="manage-quick"><button data-manage-choice="每天10点给我回忆">每天 10:00 回忆</button><button data-manage-choice="只在特别瞬间通知我">仅特别瞬间通知</button></div><form class="agent-input chat-input" id="manage-form"><label class="sr-only" for="manage-prompt">调整回忆反馈</label><input id="manage-prompt" placeholder="说说你想怎样收到回忆…" autocomplete="off" ${state.manageBusy?'disabled':''}><button type="submit" aria-label="发送调整要求" ${state.manageBusy?'disabled':''}>${icon('send')}</button></form>`;
  }
  const pref=state.focusPrefs[s.id]==='exception'?'仅异常提醒':'智能提醒';
  const messages=state.manageMessages.map(item=>`<div class="chat-message ${item.role}">${item.role==='assistant'?'<span class="chat-avatar">✦</span>':''}<div class="chat-bubble">${esc(item.text)}${item.done?`<button data-open-scene="${s.id}">返回关注详情 ${icon('chevron',14)}</button>`:''}</div></div>`).join('');
  return `<div class="manage-intro"><span class="agent-orb">✦</span><small>正在调整 · ${esc(s.object)}</small><h1>${esc(s.name)}</h1><p>告诉我你希望怎样被提醒，我会保留原有观察与判断边界。</p></div><div class="glass-card manage-current"><span>当前提醒方式</span><strong>${pref}</strong><small>${esc(s.schedule)} · ${esc(s.source)}</small></div><div class="chat-thread manage-thread"><div class="chat-message assistant"><span class="chat-avatar">✦</span><div class="chat-bubble">我会继续关注${esc(s.object)}。你想调整提醒方式吗？例如「只在异常时提醒我」。</div></div>${messages}${state.manageBusy?`<div class="chat-message assistant"><span class="chat-avatar">✦</span><div class="chat-bubble typing"><span class="thinking-orb"><i></i></span>正在核对提醒偏好与现有关注<span class="thinking-dots"><b></b><b></b><b></b></span></div></div>`:''}</div><div class="manage-quick"><button data-manage-choice="只在异常时提醒我">只在异常时提醒</button><button data-manage-choice="恢复智能提醒">恢复智能提醒</button></div><form class="agent-input chat-input" id="manage-form"><label class="sr-only" for="manage-prompt">调整这项关注</label><input id="manage-prompt" placeholder="说说你想怎样调整提醒…" autocomplete="off" ${state.manageBusy?'disabled':''}><button type="submit" aria-label="发送调整要求" ${state.manageBusy?'disabled':''}>${icon('send')}</button></form>`;
}
function agentAreaLabel(s,plan){
  return state.agentCustomArea?'你标记的观察位置':state.agentChoice===null?s.zone:plan.ask.choices[state.agentChoice];
}
function agentAction(text,active=false){
  return `<div class="agent-action ${active?'running':''}"><span class="agent-action-mark">${active?'<i class="agent-step-spinner"></i>':icon('check',12)}</span><span>${esc(text)}</span></div>`;
}
function agentSection(title,body){
  return `<section class="agent-timeline-section"><h3>${esc(title)}</h3>${body}</section>`;
}
function agentProgress(){
  const labels=['理解关注','建立状态模型','寻找观察能力','确认观察范围','建立判断规则','分配注意力','准备启动'];
  const current=state.agentBusy?.next;
  return `<div class="agent-stream-status" role="status"><span class="agent-stream-dot ${current?'active':''}"></span><span>${state.agentStep===8?'持续守护已启动':state.agentAwaiting?'等待你确认观察位置':state.agentStep===7?'等待你确认守护方式':current?`正在${labels[current-1]}…`:'正在整理观察方式…'}</span><small>${Math.min(state.agentStep,7)}/7</small></div>`;
}
function agentPage(){
  if(state.agentMode==='chat')return agentChatPage();
  if(state.agentMode==='manage')return agentManagePage();
  const s=scene(),plan=AGENT_PLANS[s.id],hasRun=state.agentStep>0||state.agentBusy||state.agentAwaiting;
  const policy=NOTICE_POLICIES[s.id],isDiscovery=s.id==='moments',kind={security:'安全守护',care:'状态照护',routine:'日常行动',discovery:'主动发现'}[FOCUS_DETAILS[s.id].kind]||'持续关注';
  const route=(p)=>`L${policy[p].level} · ${ATTENTION_DELIVERY[policy[p].level]}`;
  let flow='';
  if(hasRun){
    flow+=`<div class="user-message">${esc(state.agentPrompt||s.prompt)}</div><div class="agent-timeline"><div class="agent-stream-lead"><span class="agent-mini">✦</span><p>好的，我会先确认这件事能否持续观察，再安排判断和提醒。</p></div>${agentProgress()}`;
    if(state.agentStep>=1)flow+=agentSection('正在理解你的关注',`<p>你希望我长期留意 <strong>${esc(s.object)}</strong>，目标是${esc(plan.goal)}。</p>${agentAction(`已识别关注对象：${s.object}`)}${agentAction(`已识别目标：${plan.goal}`)}${agentAction(`关注时机：${s.schedule}`)}`);
    if(state.agentStep>=2)flow+=agentSection(isDiscovery?'正在建立发现方式':'正在建立关注模型',`<p>${isDiscovery?'这是「主动发现」。我会寻找值得记录的内容，而不是把每次活动都当成提醒。':`这是「${esc(kind)}」。我会跟踪状态变化，而不把每次画面活动都当作提醒。`}</p><div class="agent-inline-rules"><p><b>${isDiscovery?'发现':'正常'}</b>${esc(s.normal[0])}</p><p><b>${isDiscovery?'特别':'需要关注'}</b>${esc(s.attention[0])}</p><p><b>${isDiscovery?'未发现':'无法确认'}</b>${esc(s.unknown[0])}</p></div>`);
    if(state.agentStep>=3)flow+=agentSection('正在寻找可以观察它的“眼睛”',`${agentAction(`已匹配：${s.source}`)}${agentAction(`找到：${plan.found}`)}<p>${esc(plan.sourceWhy)}</p><div class="agent-inline-media"><img src="${image(s.photo)}" alt="${esc(s.zone)}示意预览"><span><strong>${esc(s.source)}</strong><small>公开图片仅示意观察范围，不代表真实设备识别结果</small></span></div>`);
    if(state.agentAwaiting&&plan.ask){
      flow+=agentSection('这里需要你判断',`<p>${esc(plan.ask.title)} ${esc(plan.ask.body)}</p><div class="agent-ambiguity-card"><div class="agent-ambiguity-preview"><img src="${image(s.photo)}" alt="${esc(s.object)}位置示意"><span class="agent-map-pin one">1</span><span class="agent-map-pin two">2</span><small>观察位置示意</small></div>${state.agentCustomArea?`<div class="camera-frame region-frame editing" data-action="position-zone"><img src="${image(s.photo)}" alt="请点选观察位置"><span class="selection-box" style="--zone-x:${state.zoneX}%;--zone-y:${state.zoneY}%"><span>观察位置</span></span></div><p class="agent-choice-hint">点击画面标记位置，再继续。</p><button class="primary-button full" data-action="agent-mark-area" ${state.agentAreaMarked?'':'disabled'}>使用我标记的位置</button>`:`<div class="agent-choice-list">${plan.ask.choices.map((label,index)=>`<button data-agent-choice="${index}"><span>${index+1}</span><strong>${esc(label)}</strong>${icon('chevron',15)}</button>`).join('')}<button data-action="agent-none"><span>?</span><strong>都不是，我来标记</strong>${icon('chevron',15)}</button></div>`}</div>`);
    }
    if(state.agentStep>=4)flow+=agentSection('观察范围已确定',`<p>我会看 <strong>${esc(agentAreaLabel(s,plan))}</strong>，并在证据不足时保留“无法确认”。</p>${agentAction(`观察范围：${agentAreaLabel(s,plan)}`)}<p class="agent-subtle">${esc(s.limit)}</p>`);
    if(state.agentStep>=5)flow+=agentSection('正在建立判断规则',`<p>${esc(plan.decision)}</p>${agentAction(`触发时机：${s.trigger}`)}${agentAction(`判断依据：${s.rule}`)}<p class="agent-subtle">证据边界：${esc(s.limit)}</p>`);
    if(state.agentStep>=6)flow+=agentSection('正在分配注意力与反馈',`<p>${isDiscovery?'我会把发现汇成回忆邀请，没有可靠内容时保持安静。':'我会按变化的重要程度决定何时打扰你。'}</p><div class="agent-routing"><p><span>${isDiscovery?'每日回忆':'正常'} · ${route('normal')}</span>${esc(s.normalRoute)}</p><p><span>${isDiscovery?'特别瞬间':'异常'} · ${route('attention')}</span>${esc(s.alertRoute)}</p><p><span>${isDiscovery?'无可靠内容':'未知'} · ${route('unknown')}</span>${esc(s.unknownRoute)}</p></div><p class="agent-subtle">${esc(plan.notify)}</p>`);
    if(state.agentStep===7)flow+=`<div class="agent-final-lead">观察方式已准备好。确认后，我会按下面的约定开始守护。</div><div class="glass-card agent-confirm-card"><div class="agent-confirm-head"><span class="mini-icon">${icon(s.icon,21)}</span><div><small>持续关注 · ${esc(kind)}</small><h3>${esc(s.name)}</h3></div></div><div class="agent-confirm-row"><span>关注对象</span><strong>${esc(s.object)}</strong></div><div class="agent-confirm-row"><span>观察位置</span><strong>${esc(agentAreaLabel(s,plan))}</strong></div><div class="agent-confirm-row"><span>关注时机</span><strong>${esc(s.schedule)}</strong></div><div class="agent-confirm-row"><span>判断</span><strong>${isDiscovery?'发现 / 特别 / 未发现':'正常 / 异常 / 无法确认'}</strong></div><div class="agent-confirm-row"><span>提醒</span><strong>${esc(plan.notify)}</strong></div><button class="primary-button full agent-start-button" data-action="agent-confirm">开始守护</button></div>`;
    if(state.agentStep>=8)flow+=`<div class="agent-complete-message"><span class="agent-mini">✦</span><div><p>好的，<strong>${esc(s.name)}</strong>已经开始。</p><p>${isDiscovery?'我会继续寻找值得记录的瞬间，并按约定送来回忆邀请。':'正常时我会按约定更新状态；需要你关注或无法确认时，我会说明原因并提供下一步。'}</p><div class="agent-complete-actions"><button data-action="open-detail">查看关注详情 ${icon('chevron',14)}</button><button data-action="agent-adjust">调整观察区域</button><button data-action="manage-focus">调整提醒</button></div></div></div>`;
    if(state.agentStep>=8&&state.agentAdjust)flow+=agentRow(`<h3>调整观察区域</h3><p>你可以主动改动观察框。画面为示意，正式接入后以授权设备为准。</p><div class="camera-frame region-frame ${state.zoneEdit?'editing':''}" data-action="position-zone"><img src="${image(s.photo)}" alt="${esc(s.zone)}示意画面"><span class="camera-label">${esc(s.source)} · 示意预览</span><span class="selection-box" style="--zone-x:${state.zoneX}%;--zone-y:${state.zoneY}%"><span>${esc(s.object)}</span></span></div><button class="secondary-button full" data-action="adjust-zone">${state.zoneEdit?'停止移动观察框':'点击后调整观察框'}</button><button class="primary-button full agent-save-zone" data-action="agent-save-adjust">保存调整</button>`);
    if(state.agentBusy){const tasks=['识别关注对象与目标','建立正常、异常与未知状态','检查设备与可见区域','确认观察范围','整理判断依据','匹配提醒方式','生成守护约定'];flow+=`<div class="agent-working" role="status"><span class="thinking-orb"><i></i></span><span>正在${tasks[state.agentBusy.next-1]}<span class="thinking-dots"><b></b><b></b><b></b></span></span></div>`;}
    flow+='</div>';
  }
  const ideas=SCENARIOS.map(x=>`<button data-create="${x.id}">${icon(x.icon)} ${esc(x.name)}</button>`).join('');
  return `<div class="agent-intro"><div class="agent-orb">✦</div><h1>${state.agentStep===8?'这件事已经安排好了':hasRun?'我正在把关心变成持续观察':'有什么想让我留意的？'}</h1><p>${state.agentStep===8?'现在开始持续观察，有变化会按约定告诉你。':hasRun?'执行过程会逐步出现；位置不明确或启动前会请你确认。':'说出你在意的事，其余交给我来安排。'}</p></div><div class="conversation">${flow}</div>${!hasRun?`<form class="agent-input" id="agent-form"><label class="sr-only" for="agent-prompt">你想让我关注什么</label><input id="agent-prompt" value="${esc(state.agentPrompt)}" placeholder="例如：帮我留意门口的包裹…" autocomplete="off"><button type="submit" aria-label="发送">${icon('send')}</button></form><div class="suggestions">${ideas}</div>`:''}`;
}
function chatReply(question){
  const matched=matchScene(question);
  if(matched){
    if(!state.created.has(matched.id))return {text:`我还没有开始关注「${matched.name}」。如果你愿意，可以先建立这个关注；我会确认观察区域和提醒边界。`,create:matched.id};
    const p=phase(matched.id),f=phaseInfo(matched,p);
    return {text:`${f[0]}。${f[1]} 当前状态是「${phaseLabel(matched.id,p)}」。你可以点开查看判断依据。`,detail:matched.id};
  }
  const pending=SCENARIOS.filter(s=>state.created.has(s.id)&&isPending(phase(s.id),s.id));
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
  return `<div class="page-heading"><div class="eyebrow">HOME PULSE · 通知</div><h1>值得打扰时，才打扰你</h1><p>安全、照护、回忆和日常行动，各用合适的语气告诉你。</p></div>${cards.length?`<div class="notice-stack">${rows}</div>`:'<div class="glass-card blank-card">目前没有主动通知。家庭状态仍在首页持续更新。</div>'}<div class="section-heading"><div><h2>留在家里的更新</h2><p>低注意力变化只更新状态，不弹出横幅</p></div></div>${quiet.map(s=>`<button class="quiet-row" data-open-scene="${s.id}"><span class="mini-icon green">${icon('checkCircle')}</span><span><strong>${esc(phaseInfo(s,phase(s.id))[0])}</strong><small>${esc(phaseLabel(s.id,phase(s.id)))} · 未发送通知</small></span>${icon('chevron')}</button>`).join('')||'<p class="micro">当前没有静默更新。</p>'}`;
}
function noticeDetailPage(){return renderNoticeEventPage();}
function detailPage(){return renderFocusDetailPage();}
function detailHeader(title,ic,t=''){return `<h2><span class="mini-icon ${t}">${icon(ic)}</span>${title}</h2>`;}
function modalHtml(){
  if(!state.modal)return '';
  const s=scene(),view=state.modal==='frame',facts=(FOCUS_DETAILS[s.id]?.timeline[phase()]||FOCUS_DETAILS[s.id]?.timeline.normal||[]);
  const frame=view?`<div class="frame-modal-image"><img src="${image(s.photo)}" alt="${esc(s.zone)}观察位置示意画面"><span>观察位置示意 · ${esc(s.zone)}</span></div><div class="frame-modal-timeline">${facts.map(([time,fact])=>`<div><time>${esc(time)}</time><span>${esc(fact)}</span></div>`).join('')}</div><p>画面为公开示意素材；关键节点为本 Demo 的模拟记录。真实设备接入后，可在此查看授权的截图或视频片段。</p>`:`<p>当前关注：${esc(s.name)}。可以重新确认摄像头与观察区域，提醒将按新规则继续。</p>`;
  return `<div class="modal-backdrop" data-action="close-modal"><div class="modal ${view?'frame-modal':''}" role="dialog" aria-modal="true"><h2>${view?'观察画面与关键节点':'调整关注'}</h2>${frame}<button class="primary-button full" data-action="close-modal">完成</button></div></div>`;
}
function bannerHtml(){
  const n=state.notices.find(item=>item.id===state.bannerNoticeId);if(!n)return '';
  return `<div class="ios-banner ${n.type}" role="alert" aria-label="Home Pulse 通知横幅"><div class="ios-banner-main" data-banner-open="${n.id}" role="button" tabindex="0"><div class="ios-banner-top"><span class="ios-banner-icon">${noticeIcon(n)}</span><strong>HOME PULSE</strong><time>现在</time></div><strong class="ios-banner-title">${esc(n.title)}</strong><p>${esc(n.body)}</p>${n.type==='memory'?`<img src="${image(SCENE_MAP[n.sceneId].photo)}" alt="Buddy 回忆缩略图">`:''}</div><button class="ios-banner-close" data-action="dismiss-banner" aria-label="关闭通知横幅">×</button></div>`;
}
function render(opts={}){
  const root=document.getElementById('app');const old=document.getElementById('phone-scroll')?.scrollTop||0;
  const pages={home:homePage,attention:attentionPage,agent:agentPage,notifications:noticesPage,detail:detailPage,'notice-detail':noticeDetailPage};
  root.innerHTML=`<main class="workspace">${sidePanels()}<div class="phone-wrap"><div class="phone ${state.page==='home'?'home-screen':''}">${statusBar()}${appBar()}<div class="content-scroll" id="phone-scroll">${pages[state.page]()}</div>${state.page==='home'?`<div class="home-float-actions"><button class="float-action" data-action="open-agent-create" aria-label="创建新关注" title="创建新关注">${icon('plus',25)}</button><button class="float-action" data-action="open-agent-chat" aria-label="与 Home Pulse 对话" title="与 Home Pulse 对话">${icon('chat',23)}</button></div>`:''}${footer()}<div class="home-indicator"></div>${state.toast?`<div class="toast">${icon('checkCircle')} ${esc(state.toast)}</div>`:''}${bannerHtml()}${modalHtml()}</div></div></main>`;
  const sc=document.getElementById('phone-scroll');sc.scrollTop=opts.scroll==='top'?0:opts.scroll==='bottom'?sc.scrollHeight:old;
}
function navigate(page,opts={}){if(!opts.keepBanner){state.bannerNoticeId=null;clearTimeout(bannerTimer);}state.page=page;state.modal='';render({scroll:'top'});if(window.innerWidth<=760)window.scrollTo(0,0);}
function scrollHomeObject(id,smooth=true){
  const sc=document.getElementById('phone-scroll'),target=document.getElementById(`home-object-${id}`);
  if(!sc||!target||state.page!=='home')return;
  const top=target.getBoundingClientRect().top-sc.getBoundingClientRect().top+sc.scrollTop-72;
  sc.scrollTo({top:Math.max(0,top),behavior:smooth?'smooth':'auto'});
}
function flash(message){clearTimeout(toastTimer);state.toast=message;render();toastTimer=setTimeout(()=>{state.toast='';render();},2600);}
function selectScene(id,show='home'){
  if(!SCENE_MAP[id])return;clearTimeout(busyTimer);state.agentRunId++;state.agentBusy=null;state.sceneId=id;state.objectTab=objectForScene(id).id;state.agentStep=0;state.agentPrompt='';state.agentSource='best';state.agentAwaiting=false;state.agentChoice=null;state.agentCustomArea=false;state.agentAreaMarked=false;state.agentAdjust=false;state.zoneEdit=false;state.zoneX=35;state.zoneY=27;navigate(show);if(show==='home')scrollHomeObject(state.objectTab,false);
}
function startAgent(id,prompt){
  state.agentMode='create';selectScene(id,'agent');state.agentPrompt=prompt||SCENE_MAP[id].prompt;startBusy(1);
}
function openAgent(mode){clearTimeout(busyTimer);state.agentRunId++;state.agentMode=mode;state.agentBusy=null;state.agentStep=0;state.agentAwaiting=false;state.agentChoice=null;state.agentCustomArea=false;state.agentAreaMarked=false;state.agentAdjust=false;state.agentPrompt='';navigate('agent');}
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
    if(id==='moments'){
      if(/特别|只在|仅/.test(text)){state.focusPrefs[id]='special';reply='已改为仅在发现特别瞬间时通知。日常回忆仍会留在 Buddy 的发现任务里。';}
      else if(/每天|10|恢复|默认/.test(text)){delete state.focusPrefs[id];reply='已恢复每天 10:00 的回忆邀请；没有可靠内容时不会打扰你。';}
      else reply='我还不能可靠地理解这个反馈调整。你可以说「每天10点给我回忆」或「只在特别瞬间通知我」。';
    }
    else if(exception){state.focusPrefs[id]='exception';reply='已改为仅异常提醒。正常完成仍会更新首页；需要关注或无法确认时，我会按原注意力等级告诉你。';}
    else if(smart){delete state.focusPrefs[id];reply='已恢复智能提醒。我会按这件事原先约定的方式报告状态变化。';}
    else reply='我还不能可靠地把这句话转成提醒调整。你可以说「只在异常时提醒我」或「恢复智能提醒」。';
    state.manageMessages.push({role:'assistant',text:reply,done:id==='moments'?/特别|只在|仅|每天|10|恢复|默认/.test(text):exception||smart});state.manageBusy=false;
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
  const delay=[0,1800,1700,2000,1500,1900,1900,1500][next];
  busyTimer=setTimeout(()=>{
    if(runId!==state.agentRunId||sceneId!==state.sceneId||state.agentMode!=='create')return;
    state.agentStep=next;state.agentBusy=null;
    if(next===7){render({scroll:'bottom'});return;}
    if(next===3&&AGENT_PLANS[sceneId].ask&&state.agentChoice===null&&!state.agentCustomArea){state.agentAwaiting=true;render({scroll:'bottom'});return;}
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
  navigate('home',{keepBanner:true});scrollHomeObject(state.objectTab,false);
}
function triggerShowcase(type){
  if(type==='memory'){
    state.created.add(MEMORY_DIGEST.sceneId);state.phaseById[MEMORY_DIGEST.sceneId]='normal';
    state.sceneId=MEMORY_DIGEST.sceneId;state.objectTab=objectForScene(state.sceneId).id;
    recordNotice(MEMORY_DIGEST);navigate('home',{keepBanner:true});scrollHomeObject(state.objectTab,false);return;
  }
  const item=NOTICE_SHOWCASES.find(x=>x.type===type);if(!item)return;
  state.sceneId=item.sceneId;state.objectTab=objectForScene(item.sceneId).id;
  state.created.add(item.sceneId);advancePhase('attention');
}
function matchScene(text){const lower=text.toLowerCase();const ranked=SCENARIOS.map(s=>({s,score:s.keywords.reduce((n,k)=>n+(lower.includes(k.toLowerCase())?k.length:0),0)})).sort((a,b)=>b.score-a.score);return ranked[0]?.score?ranked[0].s:null;}
async function shareMemory(){
  const n=activeNotice();if(!n)return;
  const item={title:n.title,text:n.description||n.body,url:'https://yushengw0702-prog.github.io/home-pulse-vision-demo/'};
  try {
    if(navigator.share)await navigator.share(item);
    else if(navigator.clipboard){await navigator.clipboard.writeText(`${item.title}\n${item.text}\n${item.url}`);flash('已复制回忆描述与 Demo 链接');}
    else flash('当前浏览器暂不支持分享');
  } catch(error){if(error?.name!=='AbortError')flash('分享暂未完成，请稍后重试');}
}

document.addEventListener('change',event=>{
  if(event.target.id==='console-scene')selectScene(event.target.value);
});
document.addEventListener('click',event=>{
  if(event.target.classList.contains('modal-backdrop')){state.modal='';render();return;}
  const showcase=event.target.closest('[data-console-showcase]');if(showcase){triggerShowcase(showcase.dataset.consoleShowcase);return;}
  const phaseControl=event.target.closest('[data-console-phase]');if(phaseControl){advancePhase(phaseControl.dataset.consolePhase);return;}
  const banner=event.target.closest('[data-banner-open]');if(banner){const n=state.notices.find(x=>x.id===banner.dataset.bannerOpen);if(n){state.noticeReturnPage=state.page;state.activeNoticeId=n.id;state.sceneId=n.sceneId;state.bannerNoticeId=null;clearTimeout(bannerTimer);navigate('notice-detail');}return;}
  const objectTab=event.target.closest('[data-object-tab]');if(objectTab){const object=OBJECTS.find(x=>x.id===objectTab.dataset.objectTab);if(object){state.objectTab=object.id;state.sceneId=object.scenes.find(id=>state.created.has(id))||object.scenes[0];document.querySelectorAll('.object-tab').forEach(tab=>{const selected=tab.dataset.objectTab===object.id;tab.classList.toggle('active',selected);tab.setAttribute('aria-pressed',String(selected));});scrollHomeObject(object.id);}return;}
  const item=event.target.closest('[data-open-scene]');if(item){state.sceneId=item.dataset.openScene;state.returnPage=state.page;navigate('detail');return;}
  const chatDetail=event.target.closest('[data-chat-detail]');if(chatDetail){state.sceneId=chatDetail.dataset.chatDetail;state.returnPage='agent';navigate('detail');return;}
  const chatSuggest=event.target.closest('[data-chat-suggest]');if(chatSuggest){askChat(chatSuggest.dataset.chatSuggest);return;}
  const manageChoice=event.target.closest('[data-manage-choice]');if(manageChoice){submitManage(manageChoice.dataset.manageChoice);return;}
  const create=event.target.closest('[data-create]');if(create){startAgent(create.dataset.create);return;}
  const notice=event.target.closest('[data-notice]');if(notice){const n=state.notices.find(x=>x.id===notice.dataset.notice);if(n){state.noticeReturnPage=state.page;state.activeNoticeId=n.id;state.sceneId=n.sceneId;state.bannerNoticeId=null;clearTimeout(bannerTimer);navigate('notice-detail');}return;}
  const choice=event.target.closest('[data-agent-choice]');if(choice){const index=Number(choice.dataset.agentChoice),ask=AGENT_PLANS[state.sceneId]?.ask;if(state.agentAwaiting&&Number.isInteger(index)&&ask?.choices[index]){state.agentChoice=index;startBusy(4);}return;}
  const page=event.target.closest('[data-page]');if(page){if(page.dataset.page==='agent')state.agentMode='create';navigate(page.dataset.page);return;}
  const action=event.target.closest('[data-action]');if(!action)return;event.preventDefault();
  switch(action.dataset.action){
    case 'back':if(state.page==='agent'&&state.agentMode==='manage'&&state.manageReturn==='agent'){state.agentMode='create';navigate('agent');}else navigate(state.page==='detail'?state.returnPage:state.page==='notice-detail'?state.noticeReturnPage:state.page==='agent'&&state.agentMode==='manage'?'detail':'home');break;
    case 'dismiss-banner':state.bannerNoticeId=null;clearTimeout(bannerTimer);render();break;
    case 'open-agent-create':openAgent('create');break;
    case 'open-agent-chat':openAgent('chat');break;
    case 'manage-focus':openManage();break;
    case 'agent-none':if(state.agentAwaiting){state.agentCustomArea=true;state.agentAreaMarked=false;render({scroll:'bottom'});}break;
    case 'agent-mark-area':if(state.agentAwaiting&&state.agentCustomArea&&state.agentAreaMarked)startBusy(4);break;
    case 'agent-confirm':if(state.agentStep===7&&!state.agentBusy){const id=state.sceneId;if(!state.created.has(id)){state.created.add(id);state.phaseById[id]='armed';}state.focusZones[id]={label:agentAreaLabel(scene(),AGENT_PLANS[id]),x:state.zoneX,y:state.zoneY};state.agentStep=8;render({scroll:'bottom'});}break;
    case 'console-create':state.created.delete(state.sceneId);delete state.phaseById[state.sceneId];delete state.focusZones[state.sceneId];state.notices=state.notices.filter(n=>n.sceneId!==state.sceneId);startAgent(state.sceneId);break;
    case 'console-seed':state.created.add(state.sceneId);state.phaseById[state.sceneId]='armed';navigate('home');scrollHomeObject(state.objectTab,false);break;
    case 'console-home':navigate('home');break;
    case 'console-reset':state.created.delete(state.sceneId);delete state.phaseById[state.sceneId];delete state.focusZones[state.sceneId];state.notices=state.notices.filter(n=>n.sceneId!==state.sceneId);navigate('home');break;
    case 'create-current':startAgent(state.sceneId);break;
    case 'open-detail':state.returnPage=state.page;navigate('detail');break;
    case 'agent-adjust':state.agentAdjust=!state.agentAdjust;state.zoneEdit=false;render({scroll:'bottom'});break;
    case 'agent-save-adjust':state.focusZones[state.sceneId]={label:state.focusZones[state.sceneId]?.label||scene().zone,x:state.zoneX,y:state.zoneY};state.agentAdjust=false;state.zoneEdit=false;flash('观察区域已更新');break;
    case 'adjust-zone':state.zoneEdit=!state.zoneEdit;render();break;
    case 'position-zone':if(state.zoneEdit||state.agentAwaiting&&state.agentCustomArea){const rect=action.getBoundingClientRect();state.zoneX=Math.max(4,Math.min(58,(event.clientX-rect.left)/rect.width*100-17));state.zoneY=Math.max(10,Math.min(60,(event.clientY-rect.top)/rect.height*100-18));if(state.agentAwaiting)state.agentAreaMarked=true;render({scroll:'bottom'});}break;
    case 'view-frame':state.modal='frame';render();break;
    case 'guard-on':state.guardEnabled=true;flash('已开启本次事件的警戒演示');break;
    case 'save-memory':if(state.savedMemories.has(state.activeNoticeId))state.savedMemories.delete(state.activeNoticeId);else state.savedMemories.add(state.activeNoticeId);render();break;
    case 'share-memory':shareMemory();break;
    case 'open-related-detail':state.returnPage='notice-detail';navigate('detail');break;
    case 'confirm-status':{const n=activeNotice();if(n){n.handled=true;if(['attention','unknown'].includes(n.phase))state.phaseById[n.sceneId]='resolved';flash('已记录你的确认，持续关注仍会继续');}break;}
    case 'continue-observing':{const n=activeNotice();if(n){n.handled=true;state.phaseById[n.sceneId]='observing';flash('已继续观察，这次提醒已收起');}break;}
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
