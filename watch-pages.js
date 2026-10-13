// The long-lived focus and one-time event have different jobs.
// All facts below are demo fixtures from scenario-data.js and focus-data.js.
const WATCH_TYPE_NAME = {state:'状态守护',risk:'异常检测',discovery:'主动发现'};

function watchSection(title,iconName,body,extra=''){
  return `<section class="glass-card focus-section watch-section ${extra}"><div class="focus-section-title"><span class="mini-icon">${icon(iconName)}</span><h2>${esc(title)}</h2></div>${body}</section>`;
}
function watchHero(s,p,meta){
  const f=phaseInfo(s,p),task=meta.watchType;
  const lead=task==='risk'?'当前安全状态':'当前状态';
  const stamp=f[2]?.split(' · ')[0]||'持续观察中';
  return `<section class="focus-hero watch-hero ${task} ${p}"><div class="focus-hero-icon">${icon(s.icon,28)}</div><span class="focus-eyebrow">${esc(WATCH_TYPE_NAME[task])} · ${esc(s.object)}</span><h1>${esc(meta.title)}</h1><small class="watch-hero-lead">${lead}</small><div class="focus-status ${p}">${icon(p==='attention'?'alert':p==='normal'?'checkCircle':'eye',24)}<strong>${esc(meta.status[p]||phaseLabel(s.id,p))}</strong></div><p>${esc(f[1])}</p><div class="focus-hero-meta"><span>${icon('clock',13)} 最近更新 ${esc(stamp)}</span><span>${icon('camera',13)} ${esc(s.source)}</span></div></section>`;
}
function watchPreview(s,caption){
  const zone=state.focusZones[s.id]?.label||s.zone;
  return `<div class="watch-preview"><img src="${image(s.photo)}" alt="${esc(zone)}示意画面"><div><strong>${esc(zone)}</strong><small>${esc(caption)}</small></div></div><p class="watch-demo-note">公开图片仅示意观察范围；真实设备画面尚未接入。</p>`;
}
function watchBullet(label,text){
  return `<div class="watch-bullet"><span>${icon('check',13)}</span><p><strong>${esc(label)}</strong>${esc(text)}</p></div>`;
}
function watchPolicy(s,phases){
  const level=p=>noticeSpec(s.id,p)?.level??NOTICE_POLICIES[s.id]?.[p]?.level??0;
  const route=p=>`L${level(p)} · ${ATTENTION_DELIVERY[level(p)]}`;
  return `<div class="watch-policy-list">${phases.map(([p,label,text])=>`<div class="watch-policy-row"><span class="${p}">${esc(label)}</span><div><strong>${esc(route(p))}</strong><small>${esc(text)}</small></div></div>`).join('')}</div>`;
}
function watchManage(s,task){
  const preference=task==='discovery'?(state.focusPrefs[s.id]==='special'?'仅特别瞬间通知':'每天 10:00 回忆邀请'):(state.focusPrefs[s.id]==='exception'?'仅异常提醒':'智能提醒');
  return watchSection('关注约定','settings',`<div class="focus-setting-row"><span>关注对象</span><strong>${esc(s.object)}</strong></div><div class="focus-setting-row"><span>任务类型</span><strong>${esc(WATCH_TYPE_NAME[task])}</strong></div><div class="focus-setting-row"><span>观察时机</span><strong>${esc(s.schedule)}</strong></div><div class="focus-setting-row"><span>反馈方式</span><strong>${esc(preference)}</strong></div><button class="focus-manage-button" data-action="manage-focus">${icon('chat',17)} 告诉 Agent 调整关注 ${icon('chevron',15)}</button>`,'watch-manage');
}
function watchRecent(s){
  const recent=state.notices.filter(n=>n.sceneId===s.id).slice(-3).reverse();
  const content=recent.length?recent.map(n=>`<button class="focus-related-row" data-notice="${n.id}"><span class="focus-related-icon ${n.type}">${noticeIcon(n)}</span><span><strong>${esc(n.title)}</strong><small>${esc(n.time)} · ${esc(NOTICE_TYPES[n.type].name)}${n.handled?' · 已处理':''}</small></span>${icon('chevron',16)}</button>`).join(''):`<div class="focus-related-empty">最近没有需要单独处理的变化。持续关注仍在进行。</div>`;
  return watchSection('最近的变化','clock',content,'watch-recent');
}
function watchStateDetail(s,p,meta){
  const history=['normal','normal','normal','normal','unknown','normal',p==='attention'?'attention':p==='unknown'?'unknown':'normal'];
  const labels=history.map((mark,i)=>`<span class="focus-history-day ${mark}"><span>${mark==='normal'?icon('check',13):mark==='attention'?icon('alert',13):'?'}</span><small>${i===6?'本次':String(i+1).padStart(2,'0')}</small></span>`).join('');
  const currentNotice=state.notices.filter(n=>n.sceneId===s.id&&n.phase===p).at(-1);
  const currentLink=currentNotice&&['attention','unknown'].includes(p)?`<button class="watch-current-link" data-notice="${currentNotice.id}">查看这次提醒的原因与处理 ${icon('chevron',14)}</button>`:'';
  const observation=watchSection('AI 观察对象','eye',`${watchPreview(s,'我会在这里核对你关心的状态')}${watchBullet('观察区域',s.zone)}${watchBullet('核对线索',s.evidence[1])}<p class="watch-section-note">${esc(s.limit)}</p>`);
  const model=watchSection('我会关注哪些结果','activity',`<div class="watch-state-model"><div class="normal">${icon('checkCircle',17)}<span><strong>预期已达成</strong><small>${esc(meta.status.normal)}</small></span></div><div class="attention">${icon('alert',17)}<span><strong>与预期有偏离</strong><small>${esc(meta.status.attention)}</small></span></div><div class="unknown">${icon('info',17)}<span><strong>证据还不够</strong><small>${esc(meta.status.unknown)}</small></span></div></div>`);
  const trend=watchSection('历史状态趋势','activity',`<div class="focus-trend-caption"><strong>${esc(meta.trend.window)}</strong><span>模拟历史</span></div><div class="focus-history">${labels}</div><div class="focus-trend-stats"><div><small>${esc(meta.trend.label)}</small><strong>${esc(meta.trend.value)}</strong></div><div><small>本次更新</small><strong>${esc(phaseInfo(s,p)[2].split(' · ')[0])}</strong></div></div><p class="focus-trend-note">${esc(meta.trend.note)}</p>`);
  const policy=watchSection('何时告诉你','bell',watchPolicy(s,[['normal','正常',s.normalRoute],['attention','偏离',s.alertRoute],['unknown','不确定',s.unknownRoute]]));
  return `<div class="focus-detail watch-detail state">${watchHero(s,p,meta)}${currentLink}${observation}${model}${trend}${policy}${watchRecent(s)}${watchManage(s,'state')}</div>`;
}
function watchRiskDetail(s,p,meta){
  const stages=[['01','平时安全','常规活动留在记录'],['02','事件出现',meta.riskStages[0]],['03','继续核对',meta.riskStages[1]],['04','形成风险',meta.riskStages[2]]];
  const guard=watchSection('守护范围','shield',`${watchPreview(s,'只关注这个区域内的风险行为')}${watchBullet('触发线索',s.trigger)}${watchBullet('风险条件',s.rule)}<p class="watch-section-note">${esc(s.limit)}</p>`);
  const model=watchSection('风险如何形成','alert',`<div class="watch-risk-stages">${stages.map(([no,title,text])=>`<div><b>${no}</b><span><strong>${esc(title)}</strong><small>${esc(text)}</small></span></div>`).join('')}</div>`);
  const h=meta.riskHistory;
  const history=watchSection('安全记录','activity',`<div class="watch-history-head">${esc(h.window)} <small>模拟历史</small></div><div class="watch-risk-stats"><div><strong>${esc(h.quiet)}</strong><small>无异常</small></div><div><strong>${esc(h.events)}</strong><small>风险事件</small></div></div><p class="focus-trend-note">${esc(h.note)}</p>`);
  const policy=watchSection('风险提醒策略','bell',watchPolicy(s,[['normal','普通活动',s.normalRoute],['attention','达到风险条件',s.alertRoute],['unknown','无法核实',s.unknownRoute]]));
  return `<div class="focus-detail watch-detail risk">${watchHero(s,p,meta)}${guard}${model}${history}${policy}${watchRecent(s)}${watchManage(s,'risk')}</div>`;
}
function watchDiscoveryDetail(s,p,meta){
  const count=p==='normal'||p==='attention'?3:0;
  const cards=count?meta.discoveries.map(item=>`<article class="watch-discovery-item"><img src="${image(item.photo)}" alt="${esc(item.title)}示意照片"><div><time>${esc(item.time)}</time><strong>${esc(item.title)}</strong><p>${esc(item.description)}</p></div></article>`).join(''):'<p class="watch-empty">最近 24 小时还没有可靠的内容。我会继续寻找，不会编造画面。</p>';
  const hero=`<section class="watch-discovery-hero"><img src="${image(s.photo)}" alt="Buddy 客厅活动示意照片"><div><small>主动发现 · Buddy</small><h1>${esc(meta.title)}</h1><strong>最近 24 小时发现 ${count} 个值得记录的时刻</strong><span>${esc(phaseLabel(s.id,p))} · ${esc(s.schedule)} 汇总</span></div></section>`;
  const finds=watchSection('最近的发现','spark',`<div class="watch-discovery-list">${cards}</div><p class="watch-demo-note">图片与时刻为演示样本，不是真实家庭记录。</p>`);
  const taste=watchSection('我在寻找什么','heart',`${watchBullet('有趣动作','值得回看的小表情与动作')}${watchBullet('互动瞬间','Buddy 与家人的自然互动')}${watchBullet('温馨时刻','安静休息、迎接回家等日常片段')}<p class="watch-section-note">${esc(s.limit)}</p>`);
  const library=watchSection('历史收藏','image',`<div class="watch-library-stat"><strong>${esc(meta.trend.value)}</strong><span>${esc(meta.trend.window)} · 模拟历史</span></div><p class="watch-section-note">${esc(meta.trend.note)}</p>`);
  const feedback=watchSection('回忆如何送达','bell',`<div class="focus-setting-row"><span>汇总时间</span><strong>${esc(s.schedule)}</strong></div><div class="focus-setting-row"><span>内容形式</span><strong>照片 + AI 描述</strong></div><div class="focus-setting-row"><span>没有可靠内容</span><strong>不生成、不打扰</strong></div>`);
  return `<div class="focus-detail watch-detail discovery">${hero}${finds}${taste}${library}${feedback}${watchRecent(s)}${watchManage(s,'discovery')}</div>`;
}
function renderFocusDetailPage(){
  const s=scene(),p=phase(),meta=FOCUS_DETAILS[s.id];
  return meta.watchType==='discovery'?watchDiscoveryDetail(s,p,meta):meta.watchType==='risk'?watchRiskDetail(s,p,meta):watchStateDetail(s,p,meta);
}

function watchEventHead(n,s,task){
  const subtitle=task==='risk'?'这次风险为什么需要你处理':task==='discovery'?'这次为什么值得与你分享':'这次状态变化为什么提醒你';
  return `<section class="notice-detail-head ${n.type} watch-event-head ${task}"><span class="notice-detail-icon">${noticeIcon(n)}</span><span class="notice-detail-type">${esc(WATCH_TYPE_NAME[task])} · ${esc(n.time)} · L${n.level}</span><h1>${esc(n.title)}</h1><p>${esc(n.body)}</p><small>${subtitle}</small></section>`;
}
function watchEventTimeline(meta,n){
  const facts=meta.timeline[n.phase]||[];
  return `<div class="focus-observation">${facts.map(([time,fact],i)=>`<div class="focus-observation-row"><time>${esc(time)}</time><span class="focus-timeline-node ${i===facts.length-1?'last':''}"></span><p>${esc(fact)}</p></div>`).join('')}</div>`;
}
function watchEventEvidence(s,n){
  return `<div class="watch-event-evidence"><img src="${image(s.photo)}" alt="${esc(s.zone)}示意画面"><div><strong>${esc(s.zone)}</strong><small>${esc(n.time)} · 观察位置示意</small></div></div><p class="watch-demo-note">此处为公开示意图片。真实接入后显示授权设备的关键画面。</p>`;
}
function watchStateEvent(n,s,meta){
  const result=n.body;
  const status=watchSection('为什么现在告诉你','info',`<p class="watch-event-copy">${esc(n.why)}</p>${n.baseline?`<div class="watch-baseline"><small>平时的节奏</small><strong>${esc(n.baseline)}</strong></div>`:''}`);
  const timeline=watchSection('AI 发现了什么','clock',watchEventTimeline(meta,n));
  const evidence=watchSection('关键观察位置','image',watchEventEvidence(s,n));
  const boundary=watchSection('这次判断的边界','shield',`<div class="watch-boundary-row"><span>可以说明</span><strong>${esc(result)}</strong></div><div class="watch-boundary-row"><span>还不能推断</span><strong>${esc(s.limit)}</strong></div>`);
  const confirm=n.phase==='normal'?'知道了':n.sceneId==='meal'?'确认已进食':'确认当前状态';
  const alertActions=n.type==='alert'?`<button class="secondary-button" data-action="guard-on">${state.guardEnabled?'已开启警戒':'开启警戒'}</button><button class="watch-text-action" data-action="confirm-status">${confirm}</button>`:`<button class="secondary-button" data-action="confirm-status">${confirm}</button>${n.phase!=='normal'?'<button class="watch-text-action" data-action="continue-observing">继续观察</button>':''}`;
  const actions=watchSection('现在可以怎么做','checkCircle',`<p class="watch-event-copy">${esc(s.action)}</p><div class="watch-event-actions"><button class="primary-button" data-action="view-frame">${icon('eye',16)} 查看相关画面</button>${alertActions}</div>`);
  return `<div class="watch-event state">${watchEventHead(n,s,'state')}${status}${timeline}${evidence}${boundary}${actions}<button class="watch-focus-link" data-action="open-related-detail">查看长期关注方式 ${icon('chevron',14)}</button></div>`;
}
function watchRiskEvent(n,s,meta){
  const facts=meta.timeline[n.phase]||[];
  const before=facts[0]?.[1]||s.evidence[0],after=facts.at(-1)?.[1]||s.evidence[3];
  const timeline=watchSection('AI 发现过程','clock',watchEventTimeline(meta,n));
  const evidence=watchSection('关键画面与变化','image',`${watchEventEvidence(s,n)}<div class="watch-change-pair"><div><small>先前基线</small><strong>${esc(before)}</strong></div><span>→</span><div><small>本次变化</small><strong>${esc(after)}</strong></div></div>`);
  const explanation=watchSection('风险解释与边界','shield',`<div class="watch-boundary-row"><span>判断依据</span><strong>${esc(s.rule)}</strong></div><div class="watch-boundary-row"><span>无法确认</span><strong>${esc(s.limit)}</strong></div><p class="watch-section-note">${esc(n.why)}</p>`);
  const resolvedLabel=s.id==='turtle'?'确认已放回':'确认已处理';
  const riskActions=n.phase==='unknown'?'<button class="secondary-button" data-action="continue-observing">继续观察</button>':`<button class="secondary-button" data-action="resolve-notice">${resolvedLabel}</button><button class="watch-text-action" data-action="continue-observing">暂不处理，继续观察</button>`;
  const actions=watchSection('建议立即处理','alert',`<p class="watch-event-copy">${esc(s.action)}</p><div class="watch-event-actions"><button class="primary-button" data-action="view-frame">${icon('eye',16)} 查看实时画面</button>${riskActions}</div>`);
  return `<div class="watch-event risk">${watchEventHead(n,s,'risk')}${timeline}${evidence}${explanation}${actions}<button class="watch-focus-link" data-action="open-related-detail">查看长期守护范围 ${icon('chevron',14)}</button></div>`;
}
function watchDiscoveryEvent(n,s,meta){
  const heroPhoto=n.phase==='attention'?meta.discoveries[1].photo:s.photo;
  const hero=`<div class="watch-memory-hero"><img src="${image(heroPhoto)}" alt="Buddy 回忆示意照片"><div><small>Buddy · ${esc(n.time)}</small><h1>${esc(n.title)}</h1></div></div>`;
  const clips=n.phase==='normal'?`<div class="watch-memory-clips">${meta.discoveries.map(item=>`<div><img src="${image(item.photo)}" alt="${esc(item.title)}示意照片"><span>${esc(item.time)} · ${esc(item.title)}</span></div>`).join('')}</div>`:'';
  const story=watchSection(n.phase==='normal'?'本次回忆':'这个瞬间','spark',`<p class="watch-memory-story">${esc(n.description||s.normal[1])}</p>${clips}<p class="watch-demo-note">画面为演示样本，不是真实设备记录。</p>`);
  const why=watchSection('为什么推荐给你','heart',`<p class="watch-event-copy">${esc(n.why)}</p><div class="watch-memory-signals"><span>有趣动作</span><span>温馨互动</span><span>符合你的偏好</span></div>`);
  const actions=watchSection('留下这个时刻','image',`<div class="watch-event-actions"><button class="primary-button" data-action="save-memory">${icon('heart',16)} ${state.savedMemories.has(n.id)?'已收藏':'收藏'}</button><button class="secondary-button" data-action="share-memory">分享</button><button class="watch-text-action" data-action="open-related-detail">查看更多 Buddy 回忆 ${icon('chevron',14)}</button></div>`);
  return `<div class="watch-event discovery">${hero}${story}${why}${actions}</div>`;
}
function renderNoticeEventPage(){
  const n=activeNotice();if(!n)return '<div class="glass-card blank-card">这条通知暂时无法打开。</div>';
  const s=SCENE_MAP[n.sceneId],meta=FOCUS_DETAILS[n.sceneId];
  return meta.watchType==='discovery'?watchDiscoveryEvent(n,s,meta):meta.watchType==='risk'?watchRiskEvent(n,s,meta):watchStateEvent(n,s,meta);
}
