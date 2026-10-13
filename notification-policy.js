// Notification semantics are separate from attention level. This is a visual demo,
// so level 2+ is rendered as an in-app iOS-style banner rather than a system push.
const NOTICE_TYPES = {
  alert: {name:'安全警报',icon:'shield',short:'安全'},
  insight: {name:'状态洞察',icon:'heart',short:'照护'},
  memory: {name:'生活回忆',icon:'spark',short:'回忆'},
  routine: {name:'日常行动',icon:'bell',short:'日常'},
};
const ATTENTION_DELIVERY = {
  0:'后台记录',
  1:'首页与日报',
  2:'普通通知',
  3:'通知 + 首页强调',
  4:'立即警报 + 声音与设备联动',
};
const NOTICE_POLICIES = {
  parcel: {
    normal:{type:'routine',level:0},
    attention:{type:'alert',level:3,title:'门口包裹可能被拿走',body:'包裹离开原位置，建议查看门口。',why:'位置变化经过前后画面复核；优先提醒你确认门口。'},
    unknown:{type:'insight',level:2,title:'门口包裹暂时看不清',body:'门口区域被遮挡，无法判断包裹是否仍在。'},
  },
  away: {
    normal:{type:'routine',level:1},
    attention:{type:'routine',level:3,title:'离家后有一扇窗未关',body:'大门已反锁，阳台窗仍显示开启。',why:'离家事件触发门磁与窗户画面联合核对。'},
    unknown:{type:'routine',level:2,title:'离家门窗还有一处待确认',body:'大门已反锁，阳台窗未被画面完整覆盖。'},
  },
  petdamage: {
    normal:{type:'insight',level:1},
    attention:{type:'insight',level:3,title:'Buddy 在客厅持续咬扯沙发',body:'连续画面显示破坏行为，建议尽快查看。',why:'连续画面显示咬扯动作，而不是仅仅靠近沙发，因此升级提醒。'},
    unknown:{type:'insight',level:1},
  },
  child: {
    normal:{type:'routine',level:2,title:'孩子已安全到家',body:'15:30 确认进门并关门，给你报个平安。'},
    attention:{type:'insight',level:3,title:'放学后仍未确认孩子到家',body:'已过约定时间窗，建议联系孩子确认。',why:'没有足够证据证明孩子已入户，避免误报“安全到家”。'},
    unknown:{type:'insight',level:3,title:'有人入户，身份仍待确认',body:'画面看不清身份，暂不能确认孩子已到家。'},
  },
  meal: {
    normal:{type:'insight',level:0},
    attention:{type:'insight',level:2,title:'Buddy 午餐状态需要关注',body:'14:00 仍未检测到午餐进食，晚于近 7 天习惯。',baseline:'过去 7 天通常在 12:30 左右进食',why:'超过饭点后仍无连续进食证据，因此温和提醒一次。'},
    unknown:{type:'insight',level:2,title:'Buddy 午餐暂时无法确认',body:'饭盆或 Buddy 未完整入画，不能判断是否进食。'},
  },
  cleaning: {
    normal:{type:'routine',level:2,title:'保洁已完成并离开',body:'客厅和厨房恢复整洁，已生成今日总结。'},
    attention:{type:'insight',level:2,title:'保洁结束后有一处值得查看',body:'厨房区域仍有明显杂乱，建议看一眼。'},
    unknown:{type:'insight',level:1},
  },
  briefcase: {
    normal:{type:'routine',level:0},
    attention:{type:'routine',level:3,title:'出门前看看公文包',body:'检测到你正在离家，公文包还在玄关桌上。',why:'开门事件触发一次快照比对，提醒发生在仍可返回的时刻。'},
    unknown:{type:'routine',level:2,title:'公文包状态还需确认',body:'玄关桌面没有完整入画，无法判断是否带走。'},
  },
  rain: {
    normal:{type:'routine',level:1},
    attention:{type:'routine',level:3,title:'下雨前请查看阳台',body:'窗户似乎开着，晾衣架上仍有衣物。'},
    unknown:{type:'routine',level:3,title:'即将下雨，阳台暂时看不清',body:'天气信号已到，但窗户或衣物状态无法确认。'},
  },
  basket: {
    normal:{type:'routine',level:0},
    attention:{type:'alert',level:3,title:'门口零食篮被移动',body:'连续快照显示它离开了原位置。'},
    unknown:{type:'insight',level:1},
  },
  turtle: {
    normal:{type:'insight',level:0},
    attention:{type:'insight',level:3,title:'乌龟越过鱼缸边缘',body:'本轮快照显示乌龟在警戒线外侧，请尽快查看。',why:'本轮定时快照显示目标位于警戒线外侧；低频观察需要你及时核对。'},
    unknown:{type:'insight',level:2,title:'这一轮看不清乌龟',body:'鱼缸反光或遮挡，下轮会继续复核。'},
  },
  moments: {
    normal:{type:'memory',level:2,title:'Buddy 的生活回忆已生成',body:'最近 24 小时发现 3 个值得回看的瞬间。',why:'从清晰、非重复的片段中挑选互动与温馨时刻。',description:'Buddy 在沙发上安静休息，也留下了几个值得回看的小瞬间。'},
    attention:{type:'memory',level:2,title:'发现 Buddy 一个特别的瞬间',body:'一段有趣的玩耍片段，想邀请你看看。',why:'这个玩耍动作符合你想发现有趣瞬间的偏好。',description:'Buddy 抱着心爱的小玩具，玩得很投入。'},
    unknown:{type:'memory',level:1,title:'今天暂无可靠回忆',body:'画面不清晰，今天没有生成内容。'},
  },
};
const MEMORY_DIGEST = {
  sceneId:'moments',phase:'normal',type:'memory',level:2,
  title:'Buddy 的生活回忆已生成',body:'最近 24 小时发现 3 个值得回看的客厅瞬间。',time:'10:00',
  why:'从清晰、非重复的片段里，挑出符合你偏好的温馨时刻。',
  description:'Buddy 在沙发上安静休息，也留下了几个值得回看的小瞬间。',
};
const NOTICE_SHOWCASES = [
  {type:'alert',sceneId:'parcel',label:'安全 · 门口包裹被移动'},
  {type:'insight',sceneId:'meal',label:'照护 · Buddy 午餐延迟'},
  {type:'memory',sceneId:'moments',label:'回忆 · Buddy 精彩瞬间'},
  {type:'routine',sceneId:'briefcase',label:'日常 · 出门公文包提醒'},
];
