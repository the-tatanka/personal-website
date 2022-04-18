---
sidebar_position: 1
---

# Intro

You threat model to identify threats to your component, which then lets you know where you need to concentrate your resources.

It doesn't solve the problem. The threats and risks are not solved until they are eliminated.

The section [Security Assessment](./security-assessment.md) explains how to perform threat modeling.

## Training materials

All of the listed training materials are free, can also be useful for other security areas than threat modeling.

- [Microsoft - Threat Modeling Security Fundamentals](https://docs.microsoft.com/en-us/learn/paths/tm-threat-modeling-fundamentals/)

- Security [SANS glossary-of-terms](https://www.sans.org/security-resources/glossary-of-terms/)

- Security whitepapers:

  - [AWS](https://aws.amazon.com/de/whitepapers/?whitepapers-main.sort-by=item.additionalFields.sortDate&whitepapers-main.sort-order=desc&awsf.whitepapers-content-type=*all&awsf.whitepapers-tech-category=tech-category%23security-identity-compliance&awsf.whitepapers-industries=*all&awsf.whitepapers-business-category=*all&awsf.whitepapers-global-methodology=*all)

  - [Google Cloud Platform](https://cloud.google.com/docs/security)

- [Chief Information Security Officer (CISO) Workshop](https://docs.microsoft.com/en-us/security/ciso-workshop/ciso-workshop) - collection of security learnings, principles, and recommendations for modernizing security in your organization

- [AWS security awareness](https://learnsecurity.amazon.com/)

## OWASP resources walkthrough

[The Open Web Application Security Project (OWASP) is a nonprofit foundation that works to improve the security of software.](https://owasp.org/)

OWASP is the number one source for web application security.

OWASP has projects that are used across industries. If security resources are to be built up, these can be used.

All OWASP projects are listed here:

- https://owasp.org/projects/

The following flagship projects are particularly useful.

### Application Security Verification Standard (ASVS)

Provides a basis for testing web application technical security controls and also provides developers with a list of requirements for secure development.

The ASVS requirements are very detailed, therefore the Top 10 (Top 10, API Top 10, Top 10 Proactive Controls) can alternatively be used as requirements.

Depending on the size / criticality of the project or organization, one of the approaches can be chosen.

- https://github.com/OWASP/ASVS/tree/v4.0.3

### CheatSheet Series

The OWASP Cheat Sheet Series was created to provide a concise collection of high value information on specific application security topics.

Can be used as a reference manual.

- https://cheatsheetseries.owasp.org/

- https://github.com/OWASP/CheatSheetSeries

### Software Assurance Maturity Model (SAMM)

Helps organizations to assess, formulate, and implement a strategy for software security, that can be integrated into their existing Software Development Lifecycle (SDLC).

- https://github.com/owaspsamm

This project helps to implement a complete security strategy and is therefore extremely extensive.

The effort involved must therefore be estimated before starting to implement this project.

In order to achieve quick success in security, the other OWASP projects can be integrated first.

The SAMM can then be applied without any problems.

### Top 10

The OWASP Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.

Globally recognized by developers as the first step towards more secure coding.

- https://owasp.org/Top10/

### API Top 10

APIs expose application logic and sensitive data such as Personally Identifiable Information (PII) and because of this have increasingly become a target for attackers.

The top 10 list of the most critical security risks of APIs.

Overlap in part with the OWASP Top 10.

- https://owasp.org/www-project-api-security/

### Top 10 Proactive Controls

The OWASP Top Ten Proactive Controls describes the most important control and control categories that every architect and developer should absolutely include in every project.

- https://owasp.org/www-project-proactive-controls/
