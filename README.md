# Home Pulse · 十场景产品链路 Demo

[在线体验 Home Pulse Demo](https://yushengw0702-prog.github.io/home-pulse-vision-demo/)

独立静态工程。原生 HTML、CSS、JavaScript，无需安装依赖。App 画面固定为 430 × 932 逻辑像素（6.7 英寸手机原型比例），不随浏览器窗口缩放；窄于画面的窗口可横向滚动。手机画框内是用户 App；场景和时间推进只在画框外的操作台进行。

## 打开

直接打开 `index.html`，或在本目录运行：

```sh
python3 -m http.server 4175
```

浏览器访问 `http://127.0.0.1:4175/`。

## 演示方法

1. 在右侧（窄屏时在手机画框下方）操作台选择需求。
2. 点「走完整创建链路」，体验 Agent 理解需求、匹配设备、确认观察区域、审阅提醒规则。Agent 每步都有等待和分析动画；观察区域可点击调整。
3. 创建后，在操作台按「守护中 → 核对中 → 已确认 / 需要关注 / 无法确认」推进。也可用「直接载入已创建」快速查看某一状态。
4. 点击首页的单个关注卡片，进入该事项的长期详情：当前状态 → AI 观察事实 → 状态趋势 → 相关记录 → 判断边界 → 关注设置。安全事项将证据与行动提前，照护事项突出历史规律，日常事项突出下一步。
5. 在关注详情点「用 Agent 调整关注」，可说「只在异常时提醒我」或「恢复智能提醒」。调整后，正常状态是否主动通知会同步变化；异常与无法确认仍按原有注意力等级处理。
6. 通知横幅点开进入单次事件处理页。它与长期关注详情是两层不同页面：前者处理这一次变化，后者解释持续关注的状态和规则。

操作台底部的四个通知演示入口，可分别唤起安全、照护、回忆、日常的 iOS 风格横幅。点击横幅进入对应详情；选择任一场景并推进其状态时，通知由 `notification-policy.js` 的事件类型与 Attention Level 共同决定。L0/L1 留在后台或首页，L2 以上显示横幅。回忆来自 Buddy 客厅活动的晚间摘要，不会把白天的普通活动逐条推送。横幅是网页中的视觉模拟，不会调用真实 iOS 系统推送、声音或设备联动。

| 已有关注事项 | 正常 | 需要关注 | 无法确认 |
| --- | --- | --- | --- |
| 门口包裹 | 日常 L0 | 安全 L3 | 照护 L2 |
| 离家门窗 | 日常 L1 | 日常 L3 | 日常 L2 |
| Buddy 客厅活动 | 回忆 L1 | 照护 L3 | 照护 L1 |
| 孩子放学到家 | 日常 L2，报平安 | 照护 L3 | 照护 L3 |
| Buddy 午餐 | 照护 L0 | 照护 L2 | 照护 L2 |
| 保洁完成 | 日常 L2，结束总结 | 照护 L2 | 照护 L1 |
| 出门公文包 | 日常 L0 | 日常 L3 | 日常 L2 |
| 雨天阳台 | 日常 L1 | 日常 L3 | 日常 L3 |
| 零食篮位置 | 日常 L0 | 安全 L3 | 照护 L1 |
| 乌龟越线 | 照护 L0 | 照护 L3 | 照护 L2 |

L4 留给有可靠证据的即时危险。现有十个场景未模拟这种结论，所以不会把一般异常包装成立即警报。

关注详情中的七次趋势和观察时间线是 `focus-data.js` 中的演示样本，界面已标注「模拟历史」。它们用于展示长期 Agent 的解释方式，不代表真实家庭记录或摄像头取证。

首页按关注对象快速定位。每个对象下的关注事项是独立小卡片，例如 Buddy 的午餐与客厅活动、门口的包裹与零食篮。右下角玻璃悬浮加号进入 Agent 新建关注流程；对话图标进入家庭状态问答，可按当前关注状态解释并跳转到依据详情。

手机 App 内没有任何场景切换或模拟状态按钮。正式状态由设备事件、时间窗或外部信号驱动；操作台仅服务方案展示。

## 10 个需求

| 编号 | 关注 | 特别展示 |
| --- | --- | --- |
| 1.1 | 门口包裹守护 | 仍在时静默，移走时高优先提醒 |
| 1.2 | 离家门窗确认 | 多模态状态断言，不让用户逐段看录像 |
| 1.3 | Buddy 客厅活动 | 普通活动静默，持续破坏才提醒 |
| 1.4 | 孩子放学到家 | 时间窗与身份核对，确认后报平安 |
| 2.1 | Buddy 午餐观察 | 饭点内事件唤醒，超时温和提醒 |
| 2.2 | 保洁工作完成 | 工作时静默，离开并静置后总结 |
| 2.3 | 出门公文包提醒 | 开门 Hook 唤醒快照，不全天录像 |
| 2.4 | 雨天阳台检查 | 天气信号与可视证据联动 |
| 2.5 | 零食篮位置关注 | 非标准目标遮挡时输出 Unknown |
| 2.6 | 鱼缸乌龟越线 | 小目标降级为低频轮询与越线判断 |

每个需求都具有：创建关注 → 守护中 → 事件核对 → 正常 / 关注 / 未知 → 适当触达 → 详情解释 → 用户处理的完整路径。具体文案、证据边界和提醒方式配置在 `scenario-data.js`。

## 原型边界

- 尚未连接官方 SDK、真实摄像头、天气 API、系统推送或 AI 服务。事件和状态由操作台推进，Agent 的等待动画模拟系统处理节奏。
- 公开图片只用于界面构图，不代表任何真实设备证据。真实接入时需用授权画面与设备事件替换。
- `buddy-feeding.jpg` 来自 PawPick 网站，仅供本地方案演示；公开发布前请换成团队自有或明确获许可的素材。

## 图片来源与授权

| 文件 | 来源 | 授权 |
| --- | --- | --- |
| `package-door.jpg` | [Meanwell Packaging / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Fragile_Parcel_left_outside_door.jpg) | CC BY 2.0 |
| `front-door-day.jpg` | [Wilfredor / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Black_door_of_a_white_clapboard_house_in_Quebec_City.jpg) | CC0 |
| `dog-sofa.jpg` | [Obamabbba / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dog_Couch.jpg) | CC BY-SA 4.0 |
| `briefcase.jpg` | [Nikowsk / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Briefcase_and_phone.jpg) | CC BY-SA 4.0 |
| `rain-window.jpg` | [W.carter / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Rain_on_a_window.jpg) | CC BY-SA 4.0 |
| `basket.jpg` | [Bonnie Kittle / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Picnic_basket_(Unsplash).jpg) | CC0 |
| `turtle.jpg` | [Awewewe / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Trachemys_scripta_elegans_v_akvariu.jpg) | CC BY-SA 4.0 |
| `living-room.jpg` | [Unsplash 图片](https://images.unsplash.com/photo-1600210492486-724fe5c67fb0) | [Unsplash License](https://unsplash.com/license) |
| `buddy-feeding.jpg` | [PawPick NZ](https://pawpick.co.nz/guides/best-grain-free-dog-food-nz/) | 仅供本地方案演示 |

发布或改编 CC BY / BY-SA 素材时，请保留作者、来源、许可证及改动说明。此工程保存了适合界面预览的尺寸，没有编辑照片内容。
