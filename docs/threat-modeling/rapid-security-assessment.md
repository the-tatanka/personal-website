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

See [risk and impact metrics](./metrics.md).

## Process

1. Create an assessment page / document with the [assessment template](../templates/rapid-security-assessment)

2. Send invitation to project teams containing:

   1. Agenda

   2. Necessary materials (link to project-specific page created in step 1)

   3. Objectives

   4. One hour meeting block

3. Create threats through CIA per data

   1. Confidentiality: What happens if all the data is disclosed to the world?

   2. Integrity: What happens if the data is incorrect, misleading, website defaced, etc.?

   3. Availability: What happens if the data or service is missing, deleted, or currently unreachable?

4. Access risk by determining the impact

5. Make recommendations

6. Discuss recommendations with project team

## References

- https://infosec.mozilla.org/guidelines/risk/rapid_risk_assessment.html
