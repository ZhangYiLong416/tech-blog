---
title: "Anthropic 收购 Stainless：Agent 时代的 SDK 会变成基础设施"
description: "Anthropic 收购 SDK 与 MCP 工具公司 Stainless，说明 Agent 能否真正执行任务，越来越取决于 API 连接层的质量。"
published: 2026-05-19
tags: ["Anthropic", "Stainless", "MCP", "SDK", "智能体"]
category: "智能体"
author: "柚子是只猫"
---

Anthropic 在 2026 年 5 月 18 日宣布收购 Stainless。Stainless 的核心能力是从 API 规范生成 SDK、CLI 和 MCP server，并且已经为 Anthropic 官方 SDK 提供过长期支持。Anthropic 在公告中把这件事放在“模型从回答问题走向执行任务”的语境里：Agent 只有能稳定连接数据和工具，才真正有用。

这对开发者是一个重要信号。过去 SDK 常被视为 API 的配套材料，写得好是加分项，写得差也可以用 HTTP 请求绕过去。但 Agent 时代不同，SDK、工具描述、鉴权流程、错误语义和可恢复性会直接影响 Agent 能否安全地完成任务。

## API 体验会影响 Agent 能力上限

一个人类开发者可以读文档、猜字段、调试返回值，甚至临时写脚本补洞。Agent 在这方面更脆弱。它需要清晰的类型、稳定的错误码、可预测的分页与重试机制，以及足够明确的工具说明。如果 API 连接层混乱，模型再强也会在调用工具时频繁失败。

Stainless 的价值正在这里：把 API spec 转换成多语言 SDK、CLI 和 MCP server，让连接层更标准、更可维护。对于企业来说，这类能力会逐渐从“开发者体验优化”变成“Agent 可用性保障”。

## MCP 让工具连接更标准，也更需要治理

MCP 的目标是让模型应用以更统一的方式连接外部工具。它能降低集成成本，但不会自动解决所有安全问题。一个 MCP server 本质上仍然暴露了可执行能力：读数据、写系统、调用内部服务、触发业务流程。

因此，企业在引入 MCP 时，不能只看“能不能接上”。更关键的是权限边界、输入校验、审计日志、速率限制和高风险动作确认。Agent 连接工具越容易，工具治理越不能滞后。

## 开发团队该怎么准备

第一，把内部 API 当成 Agent 会使用的产品来设计。文档、类型、错误、幂等性和示例都需要更严格。第二，把工具调用分成只读、草稿、可逆写入和高风险写入，不同级别对应不同确认策略。第三，给 Agent 留出失败恢复路径，例如明确的错误码、可重试提示和状态查询接口。

如果你的团队正在做企业 Agent，不要把所有精力放在提示词上。提示词只能改善一部分行为，真正决定稳定性的往往是工具层工程质量。

## 结论

Anthropic 收购 Stainless 说明，Agent 生态的竞争正在向连接层延伸。未来好用的 AI 平台不只是模型强，还要有高质量 SDK、标准化工具接口和严肃的执行治理。API 不再只是给人调用，也要为 Agent 调用做好准备。

## 参考资料

- [Anthropic: Anthropic acquires Stainless](https://www.anthropic.com/news/anthropic-acquires-stainless)

