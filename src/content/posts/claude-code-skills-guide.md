---
title: "Claude Code Skill 详解：把重复提示词变成可复用能力"
description: "系统讲清 Claude Code Skills 的目录结构、SKILL.md 写法、触发方式、团队共享和调试方法。"
published: 2026-05-14
tags: ["Claude Code", "Skills", "AI 编程", "自动化"]
---

如果你经常对 Claude Code 重复说同一段话，比如“请按我们团队的代码审查标准检查这个 PR”，或者“生成文章时使用固定结构和语气”，那就应该考虑把它做成 Skill。

Skill 的本质是把一段专业工作流包装成一个可发现、可复用、可共享的能力。Claude Code 会在合适的时候加载它，也可以通过斜杠命令直接调用。

## Skill 适合放什么

适合做成 Skill 的内容通常有这些特征：

- 你会反复使用同一套步骤。
- 它有明确输入和输出格式。
- 它依赖项目约定、团队规范或固定检查表。
- 它需要附带模板、示例、脚本或参考资料。

不适合做成 Skill 的内容是“某个临时问题的一次性答案”。如果只是今天问一次，直接在对话里说清楚即可。

## 基本目录结构

一个最小 Skill 是一个目录加一个 `SKILL.md`：

```text
.claude/
  skills/
    code-reviewer/
      SKILL.md
```

项目级 Skill 放在项目内的 `.claude/skills/`，适合团队共享。个人级 Skill 通常放在用户目录下，适合自己的长期习惯。

更完整的 Skill 可以包含参考文件、模板和脚本：

```text
code-reviewer/
  SKILL.md
  checklist.md
  examples/
    review-output.md
  scripts/
    collect-diff.sh
```

Claude Code 会先读 `SKILL.md`，只有需要时才加载额外文件。这种渐进加载能减少上下文浪费。

## SKILL.md 怎么写

`SKILL.md` 顶部需要 YAML frontmatter，至少写清楚名称和描述：

```md
---
name: Code Reviewer
description: Review code changes for correctness, maintainability, tests, and security. Use when reviewing pull requests or checking uncommitted changes.
---

# Code Reviewer

## Instructions

1. Inspect the current diff before commenting.
2. Prioritize bugs, regressions, security issues, and missing tests.
3. Report findings first, ordered by severity.
4. Include file and line references when possible.
```

`description` 非常关键。Claude Code 判断是否使用某个 Skill，主要靠它理解描述里的触发场景。描述太泛，比如“helps with code”，就容易误触发或不触发。

## 自动触发与手动调用

Skill 有两种使用方式。

第一种是自动触发。你说：

```text
帮我 review 当前分支的改动。
```

如果 Skill 描述明确包含 review、diff、pull request 等触发词，Claude Code 就可能自动加载它。

第二种是手动调用。新版 Claude Code 中，Skill 可以像命令一样通过 `/skill-name` 调用：

```text
/code-reviewer
```

手动调用适合你很确定要使用某个 Skill 的场景，自动触发适合自然语言工作流。

## 支持文件怎么组织

如果 Skill 内容较长，不要把所有东西塞进 `SKILL.md`。可以把主文件写成入口，把细节拆到附加文件里：

```md
## Detailed Checklist

For the full review checklist, read [checklist.md](checklist.md).

## Output Format

Use the format shown in [examples/review-output.md](examples/review-output.md).
```

这样 Claude Code 只有在需要深挖时才加载大文件，平时只读核心指令。

## 团队共享建议

团队 Skill 推荐放进项目仓库：

```text
.claude/skills/team-review/SKILL.md
.claude/skills/release-note/SKILL.md
.claude/skills/db-migration-check/SKILL.md
```

适合团队共享的 Skill 包括：

- 代码审查标准。
- 发布说明格式。
- 数据库迁移检查清单。
- 前端组件规范。
- 安全敏感操作前的确认流程。

这比把所有规则写进一个巨大的 `CLAUDE.md` 更灵活，因为 Skill 只有在相关任务中才加载。

## 调试 Skill 不生效

如果 Claude Code 没有使用你的 Skill，优先检查：

1. 路径是否正确，是否存在 `SKILL.md`。
2. YAML frontmatter 是否合法。
3. `description` 是否足够具体。
4. 当前任务描述是否包含触发场景。
5. Claude Code 是否需要重启才能加载新 Skill。

一个好用的测试提示是：

```text
当前有哪些 Skills 可用？请说明每个 Skill 适合什么场景。
```

如果列表里没有你的 Skill，先查路径和 YAML；如果列表里有但不触发，再优化 description。

## 参考资料

- [Agent Skills 官方文档](https://docs.claude.com/en/docs/claude-code/skills)
- [Claude Code：Extend Claude with skills](https://code.claude.com/docs/en/skills)
- [Claude Help Center：Use Skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude)
