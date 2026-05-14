# 技术手记

基于 [Firefly](https://github.com/CuteLeaf/Firefly) 主题迁移的个人技术博客，使用 Astro 构建并部署到 GitHub Pages。

## 本地开发

```bash
npx pnpm@9.14.4 install --frozen-lockfile
npx pnpm@9.14.4 exec astro dev --host 0.0.0.0 --port 4321
```

本地访问：

```text
http://localhost:4321/tech-blog/
```

## 写文章

文章放在：

```text
src/content/posts
```

新文章 frontmatter 示例：

```md
---
title: "文章标题"
description: "一句话摘要"
published: 2026-05-14
tags: ["Claude Code", "工程实践"]
category: "AI 编程"
draft: false
---
```

## 构建

```bash
npx pnpm@9.14.4 run build
```

## 部署

推送到 `main` 或 `firefly-migration` 分支会触发 GitHub Actions，自动构建并发布到 GitHub Pages。

线上地址：

```text
https://zhangyilong416.github.io/tech-blog/
```
