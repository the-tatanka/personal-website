---
sidebar_position: 4
---

# Metrics

## Impact

| Level   | Description                                                                                                             |
| ------- | ----------------------------------------------------------------------------------------------------------------------- |
| Low     | Minimal control over the software being analyzed, or only access to relatively unimportant information can be obtained. |
| Medium  | Moderate control over the software being analyzed, or access to moderately important information can be obtained.       |
| High    | Significant control over the software being analyzed, or access to critical information can be obtained.                |
| Maximum | Complete control over the software being analyzed, to the point where operations cannot take place.                     |

## Likelihood

| Level   | Description                                                                                                                                                                            |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Low     | Due to the absence of security controls, an attacker probably would not target this weakness, or could have very limited chances of success.                                           |
| Medium  | Due to the absence of security controls, an attacker would probably target this weakness successfully, but the chances of success might vary, or require multiple attempts to succeed. |
| High    | Due to the absence of security controls, it is highly likely that an attacker would target this weakness successfully, with a reliable exploit that is easy to develop.                |
| Maximum | The absence of security controls will cause a risk.                                                                                                                                    |

## Risk

| Level   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Maximum | This is the most important level, where the risk is especially great. <ul><li>Attention: Full attention from all concerned parties required. </li><li>Impact: High or maximum impact.</li><li>Effort: All resources engaged on fixing issues. Following standard/guidelines is required.</li><li>Risk acceptance: Rarely accepted as residual risk, must be discussed, and must be mitigated or remediated.</li><li>Exception time (SLA): Recommend fixing immediately.</li></ul> |
| High    | <ul><li>Attention: Full attention from all concerned parties required.</li><li>Impact: Medium, high or maximum impact.</li><li>Effort: Some key resources engaged on fixing the issue. Following standard/guidelines is required.</li><li>Risk acceptance: Risk must be discussed, and must at least be mitigated.</li><li>Exception time (SLA): Recommend remediation within 7 days.</li></ul>                                                                                   |
| Medium  | <ul><li>Attention: Attention from all concerned parties.</li><li>Impact: Low, medium or high impact.</li><li>Effort: Best effort. Following standard/guidelines is required.</li><li>Risk acceptance: Risk should be discussed, and at least mitigated.</li><li>Exception time (SLA): Recommend remediation within 90 days.</li></ul>                                                                                                                                             |
| Low     | <ul><li>Attention: Expected but not required.</li><li>Impact: Low or medium impact.</li><li>Effort: Best effort and best practices expected.</li><li>Risk acceptance: Risk may often be accepted as residual risk.</li><li>Exception time (SLA): Indefinitely.</li></ul>                                                                                                                                                                                                          |

| Likelihood (x) \ Impact (y) | Low    | Medium | High    | Maximum |
| --------------------------- | ------ | ------ | ------- | ------- |
| Low                         | Low    | Low    | Medium  | Medium  |
| Medium                      | Low    | Medium | High    | High    |
| High                        | Medium | High   | High    | Maximum |
| Maximum                     | Medium | High   | Maximum | Maximum |
