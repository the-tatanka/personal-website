---
sidebar_position: 3
---

# Tool Selection

## Tool selection criteria

These criteria were considered in the selection of the tools:

- Developer friendliness!

- Can be executed in the pipeline. Tool can be run in one Docker container or binary. No need to deploy a separate service.

- Findings do not need to be retrieved in a separate UI, but can be displayed directly in GitHub.

- Ability to use the tools as status checks for pull requests - automatically enforce checks.

- No differences in high findings compared to commercial tools.

- Runtime under three minutes.

A tool dashboard for central security teams is not a criteria.

Multiple tools must always be used, even if each of these individual tools has its own dashboard - all findings must ultimately be transferred to a single dashboard. Therefore, it makes no sense to make sure that a single tool has a fancy dashboard for the overview of its findings.

## Test bed for tools

- [Goolge firing range](https://github.com/google/firing-range)

- [Appsecco Damn Vulnerable NodeJS Application (DVNA)](https://github.com/appsecco/dvna)

- [OWASP WebGoat](https://github.com/WebGoat/WebGoat)

- [OWASP NodeGoat](https://github.com/OWASP/NodeGoat)
