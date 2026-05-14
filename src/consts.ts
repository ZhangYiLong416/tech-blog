export const SITE = {
  title: "技术手记",
  description: "记录工程实践、系统设计、工具链与日常踩坑。",
  author: "Your Name",
  url: "https://ZhangYiLong416.github.io/tech-blog"
};

export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, "/");
  const cleanPath = path.replace(/^\/+/, "");

  return `${base}${cleanPath}`;
}
