import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/avatar_1.avif",

	// 名字
	name: "柚子是只猫",

	// 个人签名
	bio: "记录工程实践、AI 编程和长期可复用的技术经验。",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "YouTube",
			icon: "simple-icons:youtube",
			url: "https://www.youtube.com/@%E5%BC%A0%E4%B8%80%E9%BE%99-k7l",
			showName: true,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/ZhangYiLong416",
			showName: true,
		},
		{
			name: "BiliBili",
			icon: "simple-icons:bilibili",
			url: "https://space.bilibili.com/402195048",
			showName: true,
		},
		{
			name: "Mail",
			icon: "fa7-solid:envelope",
			url: "mailto:zhang1042405153@gmail.com",
			showName: true,
		},
	],
};
