# Home Pulse · 三类关注任务 Demo

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
2. 点「走完整创建链路」，体验对话时间线中的 Agent 执行过程：理解需求、匹配设备、确定观察区域、建立判断与分配注意力。零食篮的位置和乌龟重点观察的缸口一侧需要用户指定，流程会在这两处暂停询问，也可选择「都不是」并标记位置。其余步骤自动推进；最后用一张确认卡说明守护方式，点「开始守护」后才真正创建关注。创建后可主动调整观察框。
3. 创建后，在操作台按「守护中 → 核对中 → 已确认 / 需要关注 / 无法确认」推进。也可用「直接载入已创建」快速查看某一状态。
4. 点击首页的单个关注卡片，进入该事项的长期详情。状态守护说明当前结果、观察对象、历史趋势与提醒方式；异常检测说明守护范围、风险阶段与安全记录；主动发现展示近期回忆、内容偏好与发送时间。
5. 在关注详情点「告诉 Agent 调整关注」。状态与风险任务可说「只在异常时提醒我」或「恢复智能提醒」；发现任务可说「只在特别瞬间通知我」或「每天 10 点给我回忆」。调整后，通知方式同步变化。
6. 通知横幅点开进入单次事件页。状态变化解释为何提醒、证据边界与确认动作；风险事件展示发现过程、关键变化与处理动作；回忆通知展示内容、推荐原因与收藏分享。长期关注详情则解释 AI 之后如何持续帮你关注。

操作台底部的四个通知演示入口，可分别唤起安全、照护、回忆、日常的 iOS 风格横幅。点击横幅进入对应详情；选择任一场景并推进其状态时，通知由 `notification-policy.js` 的事件类型与 Attention Level 共同决定。L0/L1 留在后台或首页，L2 以上显示横幅。回忆属于独立的「Buddy 精彩瞬间」主动发现任务，每天 10:00 汇总最近 24 小时的内容；Buddy 客厅活动仍专注持续破坏风险。横幅是网页中的视觉模拟，不会调用真实 iOS 系统推送、声音或设备联动。

| 已有关注事项 | 正常 | 需要关注 | 无法确认 |
| --- | --- | --- | --- |
| 门口包裹 | 日常 L0 | 安全 L3 | 照护 L2 |
| 离家门窗 | 日常 L1 | 日常 L3 | 日常 L2 |
| Buddy 客厅活动 | 照护 L1 | 照护 L3 | 照护 L1 |
| 孩子放学到家 | 日常 L2，报平安 | 照护 L3 | 照护 L3 |
| Buddy 午餐 | 照护 L0 | 照护 L2 | 照护 L2 |
| 保洁完成 | 日常 L2，结束总结 | 照护 L2 | 照护 L1 |
| 出门公文包 | 日常 L0 | 日常 L3 | 日常 L2 |
| 雨天阳台 | 日常 L1 | 日常 L3 | 日常 L3 |
| 零食篮位置 | 日常 L0 | 安全 L3 | 照护 L1 |
| 乌龟越线 | 照护 L0 | 照护 L3 | 照护 L2 |
| Buddy 精彩瞬间（扩展） | 回忆 L2 | 回忆 L2 | 回忆 L1 |

L4 留给有可靠证据的即时危险。现有十个场景未模拟这种结论，所以不会把一般异常包装成立即警报。

关注详情中的趋势、观察时间线和发现照片是 `focus-data.js` 中的演示样本，界面已标注「模拟历史」或「示意图片」。它们用于展示长期 Agent 的解释方式，不代表真实家庭记录或摄像头取证。关注任务类型和通知语义分别建模，例如包裹移动属于状态守护，但可使用安全警报通知。

首页以家庭状态和守护形象开场，关注对象标签可快速滚动定位。各对象的关注事项以独立双列小卡片呈现，例如 Buddy 的午餐与客厅活动、门口的包裹与零食篮。右下角玻璃悬浮加号进入 Agent 新建关注流程；对话图标进入家庭状态问答，可按当前关注状态解释并跳转到依据详情。

手机 App 内没有任何场景切换或模拟状态按钮。正式状态由设备事件、时间窗或外部信号驱动；操作台仅服务方案展示。`agent-plan-data.js` 为十个官方需求和一项主动发现扩展分别定义可见的执行结果与必要的询问点。对话时间线展示正在执行的任务和可核对的结果，不展示模型的私有思考过程。

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
- 展示图片已内嵌在 `image-data.js` 中，避免演示时因单张资源请求或浏览器缓存失败而出现破图；`assets/` 保留原图作为后备来源。
- `buddy-feeding.jpg` 来自 PawPick 网站，仅供本地方案演示；公开发布前请换成团队自有或明确获许可的素材。

## 图片来源与授权

| 文件 | 来源 | 授权 |
| --- | --- | --- |
| `package-door.jpg` | [Meanwell Packaging / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Fragile_Parcel_left_outside_door.jpg) | CC BY 2.0 |
| `front-door-day.jpg` | [Wilfredor / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Black_door_of_a_white_clapboard_house_in_Quebec_City.jpg) | CC0 |
| `dog-sofa.jpg` | [Obamabbba / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dog_Couch.jpg) | CC BY-SA 4.0 |
| `buddy-rest.jpg` | [Barras / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Head_of_a_Golden_Retriever_lying_on_a_couch_(Barras).jpg) | CC BY-SA 3.0 |
| `buddy-play.jpg` | [HTO / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Retriever_06.jpg) | 作者发布至公有领域 |
| `briefcase.jpg` | [Nikowsk / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Briefcase_and_phone.jpg) | CC BY-SA 4.0 |
| `rain-window.jpg` | [W.carter / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Rain_on_a_window.jpg) | CC BY-SA 4.0 |
| `basket.jpg` | [Bonnie Kittle / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Picnic_basket_(Unsplash).jpg) | CC0 |
| `turtle.jpg` | [Awewewe / Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Trachemys_scripta_elegans_v_akvariu.jpg) | CC BY-SA 4.0 |
| `living-room.jpg` | [Unsplash 图片](https://images.unsplash.com/photo-1600210492486-724fe5c67fb0) | [Unsplash License](https://unsplash.com/license) |
| `buddy-feeding.jpg` | [PawPick NZ](https://pawpick.co.nz/guides/best-grain-free-dog-food-nz/) | 仅供本地方案演示 |

发布或改编 CC BY / BY-SA 素材时，请保留作者、来源、许可证及改动说明。此工程保存了适合界面预览的尺寸，没有编辑照片内容。
