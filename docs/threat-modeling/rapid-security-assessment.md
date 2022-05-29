---
sidebar_position: 3
---

# Rapid Security Assessment

Often there is no time or resources available for a detailed security assessment.

Therefore, an security assessment is needed that can be performed very rapidly - similar to **Rapid Risk Assessment (RRA)** from Mozillla.

The most important assets in an service are the data. That is why this approach is based on the data processed, stored or simply accessible by services.

This approach is intended for analyzing and assessing services, not processes or individual controls.

---

The rapid security assessment does not include a likelihood rating. The risk is determined by the impact (risk = impact).

Do not forget that it is a rapid assessment that does not include controls.

Worst case scenarios are considered, therefore only the impact rating.

## Process

1. Create an assessment page / document with the assessment template

2. Send invitation to project teams with email kickoff template:

- Agenda

- Necessary materials (link to project-specific page created in step 1)

- Objectives

- One hour meeting block

3. Create threats through CIA per data

- Confidentiality: What happens if all the data is disclosed to the world?

- Integrity: What happens if the data is incorrect, misleading, website defaced, etc.?

- Availability: What happens if the data or service is missing, deleted, or currently unreachable?

4. Access risk by determining the impact

5. Make recommendations

6. Send follow-up invitation with email follow-up template

7. Discuss recommendations with project team

## Email Kickoff Template

Dear \<REPLACEME\>,

this is the kick-off appointment for the rapid security assessment of your project \<REPLACEME\>.

Agenda:

- Short introduction

- Presentation of rapid security assessment objectives

- Arrangement of collaboration

- Rapid security assessment

The main scope of the meeting will be the Services Notes and Data list: \<REPLACEME - Rapid Risk Assessment page link\>.

**Please fill in sections 1 and 2** - the questionnaire does not need to be filled in.

Our Rapid Risk Assessment objectives are:

- Identify what the mission-critical, processing sensitive or valuable data is

- Identify potential threats and their risks

- Proposal for the treatment of risks

Kind regards

\<REPLACEME\>

## Email Follow-up Template

Dear \<REPLACEME\>,

as promised, here is the invitation for the rapid security assessment’s follow-up meeting.

The objectives of the follow-up meeting are:

- Presentation of threats and risks

- Presentation of the risk mitigation recommendations

Kind regards

\<REPLACEME\>

## Assessment Template

### Rapid Security Assessment for \<REPLACEME service name\>

|                             |     |
| --------------------------- | --- |
| Service / Product Owner     |     |
| Contact Person (Security)   |     |
| Github Repository           |     |
| Service Data Classification |     |
| Highest Risk Impact         |     |
| Status                      |     |
| RRA responsibles            |     |

### 1. Service Notes

_How does the service work? Do we have diagrams, demos, examples? Is the service in production yet?_
_Please describe (or link) the items._

### 2. Data

_We want to know about all data the service will process, store or receive (and not just store). Any data the service can touch or see must be considered._

### 3. Threats

_CIA per data._
_How might an attacker benefit from capturing or modifying the data?_

\<REPLACEME data\>

- Affecting confidentiality

- Affecting integrity

- Affecting availability

### 4. Risks

_Risk is commonly defined as: risk = impact_

### 5. Recommendations

_Recommendations are ordered by how much risk we're taking by not implementing the recommendation._
_MAXIMUM is we need to fix this right now, HIGH is we need to fix this within a week, MEDIUM is we’ve to look at this in the next 3mo, LOW is this would be also interesting to do or look at._

## References

- https://infosec.mozilla.org/guidelines/risk/rapid_risk_assessment.html
