---
title: "别再用默认桌宠了：2668 个免费 Codex 宠物，一键下载就能换"
description: "介绍 Codex 宠物画廊的使用方式：从筛选、查看、下载到复制安装命令，完整演示如何给 Codex 换一个专属桌宠。"
published: 2026-05-16
tags: ["Codex", "桌宠", "AI 工具", "效率工具"]
category: "AI 编程"
author: "柚子是只猫"
image: "/assets/images/posts/codex-pet-gallery/gallery-home.png"
---

Codex 自带的桌宠能用，但选择确实比较单一。用久了以后，很多人都会想换一个更符合自己风格的宠物：像素风、动漫风、机器人、游戏角色、可爱吉祥物，最好还能直接下载，不需要自己从零制作。

问题是，官方虽然提供了宠物制作技能，但完整制作一个可用桌宠并不轻。你需要准备角色图、生成多行动画、拼 spritesheet、校验 `pet.json`，再反复预览调整。如果没有 Plus 订阅或足够额度，免费额度基本很难支撑一次完整制作流程。

所以我做了一个免费的 Codex 宠物画廊：

[Codex 宠物画廊](https://codexpet.1024588.xyz/?style=cartoon)

目前站内已经收集了 **2668 个宠物**，后续还会继续增加。页面提供五种主题风格、搜索、标签筛选、热门/最新/下载排序、详情预览、下载和一键安装命令。

![Codex 宠物画廊首页](/assets/images/posts/codex-pet-gallery/gallery-home.png)

## 为什么需要一个宠物画廊

Codex 的桌宠本质上是一个本地宠物包，通常包含：

- `pet.json`：宠物元信息和动画配置。
- `spritesheet`：把多个动作帧拼在一起的精灵图。
- 多个动作状态：待机、奔跑、挥手、跳跃、失败、等待、处理中、检查等。

自己做当然自由度最高，但成本也最高。一个完整宠物不是一张图就结束，而是要能在 Codex 里正常动起来。

宠物画廊解决的是另一个需求：先把社区里已经做好的宠物集中起来，让大多数用户可以直接选择、下载和使用。你不需要理解 spritesheet 细节，也不需要反复调试动画，只要找到喜欢的宠物，复制安装命令即可。

## 第一步：打开画廊并选择风格

访问：

```text
https://codexpet.1024588.xyz/?style=cartoon
```

页面右上角可以切换风格，目前提供五种主题：

- 展示橱窗
- 清爽社区
- 紧凑信息
- 夜间像素
- 卡通花园

如果只是浏览，我更推荐从“卡通花园”开始，视觉上更轻松；如果你想快速扫大量宠物，可以切到紧凑信息。

## 第二步：用搜索和标签快速缩小范围

画廊支持按宠物名称、作者或关键词搜索，也可以直接点标签。

当前热门标签包括：

- `cute`
- `animated`
- `pixel`
- `anime`
- `mascot`
- `game`
- `robot`
- `retro`
- `animal`

如果你想找像素风，可以点 `pixel`；想找动漫角色，可以点 `anime`；想要更通用的桌面吉祥物，可以从 `mascot` 或 `cute` 开始。

排序也有三个入口：

- 热门：适合第一次浏览。
- 最新：适合找新上传内容。
- 下载：适合看大家实际使用较多的宠物。

## 第三步：查看详情，确认动画和信息

每个宠物卡片上都有“查看”和“下载”按钮。建议先点“查看”，进入详情页确认宠物信息、作者、下载量、版本和动画状态。

![Codex 宠物详情页](/assets/images/posts/codex-pet-gallery/gallery-detail.png)

详情页会展示宠物的 spritesheet 和动作状态。一个可用的 Codex 宠物通常不是静态头像，而是一整套动画帧。

例如下面是热门宠物 `鸡哥ikun` 的 spritesheet：

![鸡哥ikun spritesheet](/assets/images/posts/codex-pet-gallery/ikun-pet-spritesheet.png)

再看另一个 `GUGUGAGA`：

![GUGUGAGA spritesheet](/assets/images/posts/codex-pet-gallery/gugugaga-spritesheet.png)

这些 spritesheet 会被 Codex 按行和帧数切分，映射到待机、移动、等待、检查等动作状态。你在页面上看到的是宠物包能否正常工作的关键资产。

## 第四步：下载宠物包

如果你只想先保存宠物，可以直接点击卡片或详情页里的“下载”按钮。下载得到的是一个宠物压缩包，文件名类似：

```text
ikun-pet.codex-pet.zip
```

这个方式适合你想先收藏，或者准备手动检查包内容。

但如果目标是直接安装到 Codex，本页面更推荐用“复制安装命令”。

## 第五步：复制安装命令并执行

每个宠物都会生成一条 PowerShell 安装命令，格式如下：

```powershell
irm https://codexpet.xyz/install/ikun-pet?platform=ps1 | iex
```

使用方式：

1. 在画廊里找到喜欢的宠物。
2. 点击“复制安装命令”。
3. 打开 Windows PowerShell。
4. 粘贴命令并回车。
5. 等待脚本下载并安装宠物包。

安装后，宠物会放到类似下面的位置：

```text
~/.codex/pets/ikun-pet/
```

如果你使用的是其他宠物，路径里的 `ikun-pet` 会替换成对应的宠物 slug。

## 第六步：在 Codex 中使用

安装完成后，重新打开 Codex 或刷新桌宠配置。如果当前 Codex 环境支持宠物选择，就可以切换到刚安装的宠物。

建议你第一次安装后检查三件事：

1. 宠物目录是否存在。
2. 目录里是否包含 `pet.json` 和 spritesheet 图片。
3. Codex 里是否能正常显示待机、移动、等待等动作。

如果显示异常，优先换一个宠物再试。社区宠物来源多，个别包可能存在命名、尺寸或动画配置不一致的问题。

## 适合哪些人

这个画廊最适合三类用户：

第一类是刚开始用 Codex 的用户。你可以先换一个喜欢的宠物，降低工具的陌生感。

第二类是没有足够订阅额度制作宠物的用户。完整制作宠物比较消耗额度，直接使用现成宠物会更实际。

第三类是想收集不同风格桌宠的人。站内数量已经到 2668 个，并且后续还会增加，适合作为长期素材库。

## 使用建议

如果你只是想快速换一个好看的宠物，直接按“热门”排序，从前几页挑一个下载量高的即可。

如果你更看重风格统一，建议先选标签，例如 `pixel`、`anime`、`robot`，再按下载量排序。

如果你想找新的内容，就切到“最新”，这里更容易看到刚加入画廊的宠物。

最后提醒一点：桌宠是本地资源包，安装脚本会向本机写入文件。虽然画廊提供了一键安装，但你仍然应该只从可信页面复制命令，不要随便执行陌生来源的 PowerShell 脚本。

## 入口

画廊地址：

[https://codexpet.1024588.xyz/?style=cartoon](https://codexpet.1024588.xyz/?style=cartoon)

当前数量：

```text
2668 个宠物
```

支持能力：

- 五种页面主题
- 搜索宠物名称、作者或关键词
- 标签筛选
- 热门、最新、下载排序
- 查看详情
- 一键下载
- 复制安装命令

如果你已经厌倦默认桌宠，可以先从热门榜开始挑一个。换一个更像自己的 Codex 宠物，工具的使用体验会明显不一样。

## 参考资料

- [Codex 宠物画廊](https://codexpet.1024588.xyz/?style=cartoon)
- [Codex Pet Gallery API](https://codexpet.xyz/api/pets?page=1&limit=4&sort=hot)

