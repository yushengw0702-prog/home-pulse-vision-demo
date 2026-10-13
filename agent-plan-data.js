// Each focus uses the same autonomous flow, with a scene-specific observable result.
// These are demo plans, not claims about connected cameras or live recognition.
const AGENT_PLANS = {
  parcel: {goal:'确认包裹是否仍在门口', sourceWhy:'门铃事件定位送达时刻，门口画面覆盖包裹放置处。', found:'门口地面与包裹基线', decision:'送达后记录「仍在」状态；移动或被拿走时复核，遮挡时标为无法确认。', notify:'异常移动主动提醒；普通路过静默记录。'},
  away: {goal:'离家后确认门窗状态', sourceWhy:'离家事件唤醒门口画面，并结合门磁判断大门是否闭合。', found:'大门与已接入的窗户', decision:'只对可见或已接入的门窗给出结论；有缺口时明确标为未确认。', notify:'离家后生成一张状态卡；异常或未知时提醒。'},
  petdamage: {goal:'区分 Buddy 普通活动与破坏行为', sourceWhy:'客厅画面覆盖 Buddy 常活动的沙发与垃圾桶区域。', found:'沙发与垃圾桶附近', decision:'靠近家具不等于破坏；持续撕咬或翻动才升级判断。', notify:'普通活动静默；持续破坏才高优先提醒。'},
  child: {goal:'确认孩子在放学时段安全到家', sourceWhy:'入户画面与门磁共同核对进门、身份和关门状态。', found:'入户门与玄关', decision:'在约定时段确认孩子进门并关门；身份不清时保持待确认。', notify:'确认到家后发送一张安心状态卡。'},
  meal: {goal:'判断 Buddy 是否按时吃午餐', sourceWhy:'客厅画面覆盖饭盆区域，可在饭点核对持续进食行为。', found:'Buddy 与客厅饭盆', decision:'在午餐窗口内确认进食；超时未见进食时提醒，遮挡时不猜测。', notify:'正常只更新状态；超过约定时间提醒一次。'},
  cleaning: {goal:'保洁离开后给出空间状态总结', sourceWhy:'室内画面可对比客厅与厨房，离家事件用于判断工作结束。', found:'客厅与厨房可见区域', decision:'工作中静默；人员离开且画面静置后与早晨基线比较。', notify:'完成后汇总；未恢复的区域才主动提醒。'},
  briefcase: {goal:'出门时检查公文包是否带走', sourceWhy:'开门事件唤醒玄关画面，只在离家时检查桌面。', found:'玄关桌面与公文包', decision:'用出门前后快照核对桌上物品；看不清时不说仍在。', notify:'公文包仍在且正在离家时，发出行动提醒。'},
  rain: {goal:'下雨前检查阳台衣物和窗户', sourceWhy:'天气变化作为触发，阳台画面用于核实衣物与窗户。', found:'晾衣架与阳台窗', decision:'天气信号只负责唤醒；风险必须由画面中的可见事实支持。', notify:'窗户或衣物存在风险时高优先提醒。'},
  basket: {goal:'留意门口零食篮是否移动', sourceWhy:'门口快照能覆盖放置区域，但非标准物品的位置需要你指定。', found:'门口候选放置区', decision:'以指定位置作基线；移动后复核，遮挡时保持未知。', notify:'可靠位移时提醒；画面被遮挡时说明无法确认。', ask:{title:'零食篮放在画面的哪一侧？', body:'这是非标准物品，先由你指定初始位置，避免关注错对象。', choices:['靠门的一侧','靠墙的一侧']}},
  turtle: {goal:'发现乌龟越过鱼缸边缘', sourceWhy:'目标较小，采用室内摄像头低频快照与边界对比。', found:'鱼缸和乌龟的可见区域', decision:'每 30 分钟复核一次；越过指定边界才提醒，看不清则待确认。', notify:'跨线时提醒并附截图；不会承诺实时发现。', ask:{title:'乌龟通常从哪侧缸口爬出？', body:'警戒线仍沿着缸口内沿；你选择需要重点观察的一侧。', choices:['靠窗一侧缸口','靠墙一侧缸口']}},
  moments: {goal:'每天发现 Buddy 值得回看的瞬间', sourceWhy:'客厅画面覆盖 Buddy 的常见活动区域，可筛选清晰且有意义的片段。', found:'Buddy 常活动的客厅区域', decision:'从互动、有趣动作和温馨时刻里筛选内容；画面不清晰或没有合适片段时不编造。', notify:'每天 10:00 生成一份照片与描述的回忆邀请。'},
};
