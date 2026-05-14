---
title: "在 Claude Code 里使用 DeepSeek V4：配置、模型映射与排错"
description: "通过 DeepSeek 的 Anthropic 兼容接口，把 Claude Code 的终端工作流接到 DeepSeek V4，并说明 Windows PowerShell 配置方式。"
published: 2026-05-14
tags: ["Claude Code", "DeepSeek", "AI 编程", "模型配置"]
---

Claude Code 默认面向 Anthropic 的 Claude 模型，但它的请求形态可以通过环境变量指向 Anthropic 兼容接口。DeepSeek 官方提供了 Claude Code 接入说明，因此可以把 Claude Code 的终端交互体验和 DeepSeek V4 的模型能力结合起来。

这篇文章只讲配置方法和排错，不会保存任何 API Key 到项目里。

## 先理解几个环境变量

接入第三方兼容接口时，核心变量是：

```bash
ANTHROPIC_BASE_URL
ANTHROPIC_AUTH_TOKEN
ANTHROPIC_MODEL
ANTHROPIC_DEFAULT_OPUS_MODEL
ANTHROPIC_DEFAULT_SONNET_MODEL
ANTHROPIC_DEFAULT_HAIKU_MODEL
CLAUDE_CODE_SUBAGENT_MODEL
```

它们分别控制请求地址、认证令牌、默认模型，以及 Claude Code 内部不同模型槽位对应的模型。

DeepSeek 官方文档给出的 Anthropic 兼容地址是：

```text
https://api.deepseek.com/anthropic
```

API Key 需要去 DeepSeek Platform 获取。不要把真实 Key 写入博客、仓库或截图里。

## Windows PowerShell 配置

如果你在 Windows 上使用 PowerShell，可以在启动 Claude Code 前设置环境变量：

```powershell
$env:ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
$env:ANTHROPIC_AUTH_TOKEN="<你的 DeepSeek API Key>"
$env:ANTHROPIC_MODEL="deepseek-v4-pro[1m]"
$env:ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-v4-pro[1m]"
$env:ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-v4-pro[1m]"
$env:ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-v4-flash"
$env:CLAUDE_CODE_SUBAGENT_MODEL="deepseek-v4-flash"
$env:CLAUDE_CODE_EFFORT_LEVEL="max"
claude
```

这组变量只对当前 PowerShell 窗口有效。关闭窗口后不会继续保留，适合先测试。

如果你想长期使用，可以把它们写进你的 shell profile，但不要写进项目仓库。

## Mac 或 Linux 配置

在 bash、zsh 里可以使用：

```bash
export ANTHROPIC_BASE_URL="https://api.deepseek.com/anthropic"
export ANTHROPIC_AUTH_TOKEN="<你的 DeepSeek API Key>"
export ANTHROPIC_MODEL="deepseek-v4-pro[1m]"
export ANTHROPIC_DEFAULT_OPUS_MODEL="deepseek-v4-pro[1m]"
export ANTHROPIC_DEFAULT_SONNET_MODEL="deepseek-v4-pro[1m]"
export ANTHROPIC_DEFAULT_HAIKU_MODEL="deepseek-v4-flash"
export CLAUDE_CODE_SUBAGENT_MODEL="deepseek-v4-flash"
export CLAUDE_CODE_EFFORT_LEVEL="max"
claude
```

建议先在临时终端里验证，再决定是否写入 `~/.zshrc` 或 `~/.bashrc`。

## 模型映射怎么选

一个实用配置是：复杂规划和主任务用 V4 Pro，子任务或轻量任务用 V4 Flash。

- `deepseek-v4-pro[1m]`：适合架构分析、复杂重构、长上下文任务。
- `deepseek-v4-flash`：适合快速问答、子代理、简单检索和较轻的代码改动。

如果你发现响应速度比预期慢，可以把默认模型先换成 Flash，再只在复杂任务时切回 Pro。

## 常见错误排查

第一类是认证失败。检查 `ANTHROPIC_AUTH_TOKEN` 是否真的设置在启动 Claude Code 的同一个终端里：

```powershell
echo $env:ANTHROPIC_AUTH_TOKEN
```

不要把 Key 粘到命令历史、截图或仓库文件里。

第二类是地址拼错。Claude Code 会在兼容接口基础上调用消息接口，所以 `ANTHROPIC_BASE_URL` 要使用 DeepSeek 文档给出的 Anthropic 兼容地址，不要随意混用 OpenAI 兼容地址。

第三类是模型名不匹配。优先使用 DeepSeek 当前文档列出的模型 ID。如果模型名发生更新，以官方文档为准。

第四类是项目里误提交了配置。建议 `.gitignore` 忽略 `.env` 和 `.env.*`，并只提供 `.env.example` 作为示例。

## 适用边界

这类接入方式适合希望保留 Claude Code 工作流，同时尝试 DeepSeek 模型成本、速度或上下文能力的开发者。它不等于 Claude 官方模型，也不保证所有 Claude Code 特性在第三方模型上体验完全一致。

我的建议是：先用一个小项目验证读代码、改文件、跑测试、总结风险这些基本流程，再决定是否作为主力配置。

## 参考资料

- [DeepSeek：接入 Claude Code](https://api-docs.deepseek.com/zh-cn/quick_start/agent_integrations/claude_code)
- [DeepSeek API SDK 与 Anthropic 兼容接口说明](https://deepseekai.guide/api/deepseek-api-sdk/)
- [Claude Code 环境变量参考](https://claude-codex.fr/en/reference/environment)
