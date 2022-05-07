---
sidebar_position: 6
---

# Common Threats

There are common threats per STRIDE category. The following list is <b>not complete and is only meant to be a help</b>.

### Spoofing / Authentication

Broken authentication is an umbrella term for several vulnerabilities that attackers exploit to impersonate legitimate users. Broadly, broken authentication refers to weaknesses in two areas: session management and credential management.

For example, here are some common authentication methods and what would be required to spoof:

- Single key: Anyone who obtains the key would have access to the systems that trust it indefinitely.

- Access token: Anyone with an access token would have access before needing additional credentials to generate another token.

- Signatures: To spoof a signature, the attacker would need access to the sender's private key.

- Session ID: Attackers use stolen session IDs to impersonate identities.

The following types of attacks are considered authentication attacks:

- Brute Force: Allows an attacker to guess a person's user name, password, credit card number, or cryptographic key by using an automated process of trial and error. Weak of password policies simplify the attack.

  - Impact:

  - Mitigation:

- Insufficient Authentication: Allows an attacker to access a web site containing sensitive content or functions without having to properly authenticate with the web site - vulnerable authentication logic. Using a vulnerable authentication library. Missing rate limiters and lockout process. Insecure two-factor authentication. Uses plain text, encrypted, or weakly hashed passwords.

  - Impact:

  - Mitigation:

- Weak Password Recovery Validation: Allows an attacker to access a web site that provides them with the ability to illegally obtain, change, or recover another user's password.

  - Impact:

  - Mitigation:

- Insecure session handling: Authentication states are kept in a stateful session. Vulnerable session management allows a malicious user to ride on a valid authenticated session without the need for authentication. Improper user logout functionality, lack of session timeouts, insecure practices of storing session data in non httponly cookies, web pages, or browser storage are common attacks.

  - Impact:

  - Mitigation:

- Violation of the principle of least privilege: Access should only be granted for particular capabilities, roles, or users, but is available to anyone.

  - Impact:

  - Mitigation:

- Cross-Site Request Forgery (CSRF): When a web application is accessed via web protocols Cross-Site Request Forgery (CSRF) risks might arise.

  - Impact: If this risk remains unmitigated, attackers might be able to trick logged-in victim users into unwanted actions within the web application by visiting an attacker controlled web site.

  - Mitigation: Try to use anti-CSRF tokens ot the double-submit patterns (at least for logged-in requests). When your authentication scheme depends on cookies (like session or token cookies), consider marking them with the same-site flag. When a third-party product is used instead of custom developed software, check if the product applies the proper mitigation and ensure a reasonable patch-level.

- Missing File Validation: When a technical asset accepts files, these input files should be strictly validated about filename and type.

  - Impact: If this risk is unmitigated, attackers might be able to provide malicious files to the application.

  - Mitigation: Filter by file extension and discard (if feasible) the name provided. Whitelist the accepted file types and determine the mime-type on the server-side (for example via \"Apache Tika\" or similar checks). If the file is retrievable by endusers and/or backoffice employees, consider performing scans for popular malware (if the files can be retrieved much later than they were uploaded, also apply a fresh malware scan during retrieval to scan with newer signatures of popular malware). Also enforce limits on maximum file size to avoid denial-of-service like scenarios.

- Missing Identity Store: The modeled architecture does not contain an identity store, which might be the risk of a model missing critical assets (and thus not seeing their risks).

  - Impact: If this risk is unmitigated, attackers might be able to exploit risks unseen in this threat model in the identity provider/store that is currently missing in the model.

  - Mitigation: Include an identity store in the model if the application has a login.

- Service Registry Poisoning: When a service registry used for discovery of trusted service endpoints Service Registry Poisoning risks might arise.

  - Impact: If this risk remains unmitigated, attackers might be able to poison the service registry with malicious service endpoints or malicious lookup and config data leading to breach of sensitive data.

  - Mitigation: Try to strengthen the access control of the service registry and apply cross-checks to detect maliciously poisoned lookup data.

### Tampering / Integrity

When you retrieve data from a system, you should feel confident that it’s correct.

The following data is often tampered with:

- Access tokens: May be altered to spoof access.

- Updates / packages / plugins: Install malicious code.

- Logs: Overwrite log files that would show malicious activity.

- Business critical data: Billing addresses, ...

Common attacks are:

- SQL/NoSQL-Injection: "When a database is accessed via database access protocols SQL/NoSQL-Injection risks might arise. The risk rating depends on the sensitivity technical asset itself and of the data assets processed or stored.

  - Impact: If this risk is unmitigated, attackers might be able to modify SQL/NoSQL queries to steal and modify data and eventually further escalate towards a deeper system penetration via code executions.

  - Mitigation: Try to use parameter binding to be safe from injection vulnerabilities. When a third-party product is used instead of custom developed software, check if the product applies the proper mitigation and ensure a reasonable patch-level.

- Code Backdooring: For each build-pipeline component Code Backdooring risks might arise where attackers compromise the build-pipeline in order to let backdoored artifacts be shipped into production. Aside from direct code backdooring this includes backdooring of dependencies and even of more lower-level build infrastructure, like backdooring compilers (similar to what the XcodeGhost malware did) or dependencies.

  - Impact: If this risk remains unmitigated, attackers might be able to execute code on and completely takeover production environments.

  - Mitigation: Reduce the attack surface of backdooring the build pipeline by not directly exposing the build pipeline components on the public internet and also not exposing it in front of unmanaged (out-of-scope) developer clients. Also consider the use of code signing to prevent code modifications.

- Container Base Image Backdooring: When a technical asset is built using container technologies, Base Image Backdooring risks might arise where base images and other layers used contain vulnerable components or backdoors.

  - Impact: If this risk is unmitigated, attackers might be able to deeply persist in the target system by executing code in deployed containers.

  - Mitigation: Apply hardening of all container infrastructures (see for example the <i>CIS-Benchmarks for Docker and Kubernetes</i> and the <i>Docker Bench for Security</i>). Use only trusted base images of the original vendors, verify digital signatures and apply image creation best practices. Also consider using Google's <i>Distroless</i> base images or otherwise very small base images. Regularly execute container image scans with tools checking the layers for vulnerable components.

- Cross-Site Scripting (XSS): For each web application Cross-Site Scripting (XSS) risks might arise. In terms of the overall risk level take other applications running on the same domain into account as well.

  - Impact: If this risk remains unmitigated, attackers might be able to access individual victim sessions and steal or modify user data.

  - Mitigation: Try to encode all values sent back to the browser and also handle DOM-manipulations in a safe way to avoid DOM-based XSS. When a third-party product is used instead of custom developed software, check if the product applies the proper mitigation and ensure a reasonable patch-level.

- Missing Build Infrastructure: The modeled architecture does not contain a build infrastructure (devops-client, sourcecode-repo, build-pipeline, etc.), which might be the risk of a model missing critical assets (and thus not seeing their risks). If the architecture contains custom-developed parts, the pipeline where code gets developed and built needs to be part of the model.

  - Impact: If this risk is unmitigated, attackers might be able to exploit risks unseen in this threat model due to critical build infrastructure components missing in the model.

  - Mitigation: Include the build infrastructure in the model.

- Missing Cloud Hardening: Cloud components should be hardened according to the cloud vendor best practices. This affects their configuration, auditing, and further areas.

  - Impact: If this risk is unmitigated, attackers might access cloud components in an unintended way.

  - Mitigation: Apply hardening of all cloud components and services, taking special care to follow the individual risk descriptions.

- Missing Web Application Firewall (WAF): To have a first line of filtering defense, security architectures with web-services or web-applications should include a WAF in front of them. Even though a WAF is not a replacement for security (all components must be secure even without a WAF) it adds another layer of defense to the overall system by delaying some attacks and having easier attack alerting through it.

  - Impact: If this risk is unmitigated, attackers might be able to apply standard attack pattern tests at great speed without any filtering.

  - Mitigation: Consider placing a Web Application Firewall (WAF) in front of the web-services and/or web-applications. For cloud environments many cloud providers offer pre-configured WAFs. Even reverse proxies can be enhances by a WAF component via ModSecurity plugins.

- Push instead of Pull Deployment: When comparing push-based vs. pull-based deployments from a security perspective, pull-based deployments improve the overall security of the deployment targets. Every exposed interface of a production system to accept a deployment increases the attack surface of the production system, thus a pull-based approach exposes less attack surface relevant interfaces.

  - Impact: If this risk is unmitigated, attackers might have more potential target vectors for attacks, as the overall attack surface is unnecessarily increased.

  - Mitigation: Try to prefer pull-based deployments (like GitOps scenarios offer) over push-based deployments to reduce the attack surface of the production system.

- Search-Query Injection: When a search engine server is accessed Search-Query Injection risks might arise.

  - Impact: If this risk remains unmitigated, attackers might be able to read more data from the search index and eventually further escalate towards a deeper system penetration via code executions.

  - Mitigation: Try to use libraries that properly encode search query meta characters in searches and don't expose the query unfiltered to the caller. When a third-party product is used instead of custom developed software, check if the product applies the proper mitigation and ensure a reasonable patch-level.

- Unchecked Deployment: For each build-pipeline component Unchecked Deployment risks might arise when the build-pipeline does not include established DevSecOps best-practices. DevSecOps best-practices scan as part of CI/CD pipelines for vulnerabilities in source- or byte-code, dependencies, container layers, and dynamically against running test systems. There are several open-source and commercial tools existing in the categories DAST, SAST, and IAST.

  - Impact: If this risk remains unmitigated, vulnerabilities in custom-developed software or their dependencies might not be identified during continuous deployment cycles.

  - Mitigation: Apply DevSecOps best-practices and use scanning tools to identify vulnerabilities in source- or byte-code, dependencies, container layers, and optionally also via dynamic scans against running test systems.

- Untrusted Deserialization: When a technical asset accepts data in a specific serialized form (like Java or .NET serialization), Untrusted Deserialization risks might arise. Objects or data are encoded or serialized into a structure that an attacker can see and modify is vulnerable to insecure deserialization.

  - Impact: If this risk is unmitigated, attackers might be able to execute code on target systems by exploiting untrusted deserialization endpoints.

  - Mitigation: Try to avoid the deserialization of untrusted data (even of data within the same trust-boundary as long as it is sent across a remote connection) in order to stay safe from Untrusted Deserialization vulnerabilities. Alternatively a strict whitelisting approach of the classes/types/values to deserialize might help as well. When a third-party product is used instead of custom developed software, check if the product applies the proper mitigation and ensure a reasonable patch-level.

- Insufficient Signature Validation: Asset signatures are not validated correctly, thereby bypassing integration protection.

  - Impact: An attacker can modify the contents at will, insert all kind of payloads (XSS, SQLi), ignore the expiration time by using an arbitrary value for the timestamp, and so on. Updates / packages / dependencies are downloaded and applied without sufficient signature verification.

  - Mitigation: Implement sufficient signature validation.

### Repudiation / Non-repudiation

Repudiation threats take aim at your auditing and tracing, ensuring that bad behavior cannot be proven.

If this attack takes place, the data stored on log files can be considered invalid or misleading.

- Insufficient Auditing: Does the log capture enough data to understand what happened in the past? Do your logs capture enough data to understand an incident after the fact? Is such capture lightweight enough to be left on all the time? Do you have enough data to deal with repudiation claims? Make sure you log sufficient and appropriate data to handle a repudiation claims.

  - Impact:

  - Mitigation:

- External Entity potentially denies receiving data: An entity claims that it did not receive data from a process on the other side of the trust boundary. Consider using logging or auditing to record the source, time, and summary of the received data.

  - Impact:

  - Mitigation:

- Weak access control to the database: When there is weak access control to the database, the stored data are no longer deniable. This can occur when there is a threat of information disclosure at the data store.

  - Impact:

  - Mitigation:

### Information Disclosure / Confidentiality

The following data is confidential:

- Access tokens

- Personal data, sensitive personal data

- Intellectual property

- Business critical data

- Other internal data

Common information disclosure threats against confidentiality are:

- Accidental Secret Leak: Sourcecode repositories (including their histories) as well as artifact registries can accidentally contain secrets like checked-in or packaged-in passwords, API tokens, certificates, crypto keys, etc.

  - Impact: If this risk is unmitigated, attackers which have access to affected sourcecode repositories or artifact registries might find secrets accidentally checked-in.

  - Mitigation: Establish measures preventing accidental check-in or package-in of secrets into sourcecode repositories and artifact registries. Consider also to regularly scan your repositories for secrets accidentally checked-in using scanning tools.

- Incomplete Model: When the threat model contains unknown technologies or transfers data over unknown protocols, this is an indicator for an incomplete model.

  - Impact: If this risk is unmitigated, other risks might not be noticed as the model is incomplete.

  - Mitigation: Try to find out what technology or protocol is used instead of specifying that it is unknown.

- Path-Traversal: When a filesystem is accessed Path-Traversal or Local-File-Inclusion (LFI) risks might arise. The risk rating depends on the sensitivity of the technical asset itself and of the data assets processed or stored.

  - Impact: If this risk is unmitigated, attackers might be able to read sensitive files (configuration data, key/credential files, deployment files, business data files, etc.) from the filesystem of affected components.

  - Mitigation: Before accessing the file cross-check that it resides in the expected folder and is of the expected type and filename/suffix. Try to use a mapping if possible instead of directly accessing by a filename which is (partly or fully) provided by the caller. When a third-party product is used instead of custom developed software, check if the product applies the proper mitigation and ensure a reasonable patch-level.

- Server-Side Request Forgery (SSRF): When a server system (i.e. not a client) is accessing other server systems via typical web protocols Server-Side Request Forgery (SSRF) or Local-File-Inclusion (LFI) or Remote-File-Inclusion (RFI) risks might arise.

  - Impact: If this risk is unmitigated, attackers might be able to access sensitive services or files of network-reachable components by modifying outgoing calls of affected components.

  - Mitigation: Try to avoid constructing the outgoing target URL with caller controllable values. Alternatively use a mapping (whitelist) when accessing outgoing URLs instead of creating them including caller controllable values. When a third-party product is used instead of custom developed software, check if the product applies the proper mitigation and ensure a reasonable patch-level.

- Unencrypted Technical Assets: Due to the confidentiality rating of the technical asset itself and/or the processed data assets this technical asset must be encrypted. The risk rating depends on the sensitivity technical asset itself and of the data assets stored.

  - Impact: If this risk is unmitigated, attackers might be able to access unencrypted data when successfully compromising sensitive components.

  - Mitigation: Apply encryption to the technical asset.

- Unencrypted Communication: Due to the confidentiality and/or integrity rating of the data assets transferred over the communication link this connection must be encrypted.

  - Impact: If this risk is unmitigated, network attackers might be able to to eavesdrop on unencrypted sensitive data sent between components.

  - Mitigation: Apply transport layer encryption to the communication link.

- Wrong Communication Link Content: When a communication link is defined as readonly, but does not receive any data asset, or when it is defined as not readonly, but does not send any data asset, it is likely to be a model failure.

  - Impact: If this potential model error is not fixed, some risks might not be visible.

  - Mitigation: Try to model the correct readonly flag and/or data sent/received of communication links. Also try to use communication link types matching the target technology/machine types.

- XML External Entity (XXE): When a technical asset accepts data in XML format, XML External Entity (XXE) risks might arise.

  - Impact: If this risk is unmitigated, attackers might be able to read sensitive files (configuration data, key/credential files, deployment files, business data files, etc.) form the filesystem of affected components and/or access sensitive services or files of other components.

  - Mitigation: Apply hardening of all XML parser instances in order to stay safe from XML External Entity (XXE) vulnerabilities. When a third-party product is used instead of custom developed software, check if the product applies the proper mitigation and ensure a reasonable patch-level.

### Denial of Service / Availability

- Potential Excessive Resource Consumption: Process takes explicit steps to control resource consumption? Be careful that your resource requests don't deadlock, and that they do timeout.

- Data Store Inaccessible: An external agent prevents access to a data store on the other side of the trust boundary.

  - Impact:

  - Mitigation:

- Data Flow Is Potentially Interrupted: An external agent interrupts data flowing across a trust boundary in either direction.

  - Impact:

  - Mitigation:

- Potential Process Crash or Stop: Process crashes, halts, stops or runs slowly; in all cases violating an availability metric.

  - Impact:

  - Mitigation:

- DoS-risky Access Across Trust-Boundary: Assets accessed across trust boundaries with critical or mission-critical availability rating are more prone to Denial-of-Service (DoS) risks.

  - Impact: If this risk remains unmitigated, attackers might be able to disturb the availability of important parts of the system.

  - Mitigation: Apply anti-DoS techniques like throttling and/or per-client load blocking with quotas. Also for maintenance access routes consider applying a VPN instead of public reachable interfaces. Generally applying redundancy on the targeted technical asset reduces the risk of DoS.

### Elevation of Privilege / Authorization

- Container platforms are especially interesting targets for attackers as they host big parts of a containerized runtime infrastructure. When not configured and operated with security best practices in mind, attackers might exploit a vulnerability inside an container and escape towards the platform as highly privileged users. These scenarios might give attackers capabilities to attack every other container as owning the container platform (via container escape attacks) equals to owning every container.

  - Impact: "If this risk is unmitigated, attackers which have successfully compromised a container (via other vulnerabilities) might be able to deeply persist in the target system by executing code in many deployed containers and the container platform itself.

  - Mitigation: Apply hardening of all container infrastructures. See for example the <i>CIS-Benchmarks for Docker and Kubernetes</i> as well as the <i>Docker Bench for Security</i> or <i>InSpec Checks for Docker and Kubernetes</i> and kubernetes-benchmark. Use only trusted base images, verify digital signatures and apply image creation best practices. Also consider using Google's Distroless base images or otherwise very small base images. Apply namespace isolation and nod affinity to separate pods from each other in terms of access and nodes the same style as you separate data.

- Missing Two-Factor Authentication (2FA): Technical assets (especially multi-tenant systems) should authenticate incoming requests with two-factor (2FA) authentication when the asset processes or stores highly sensitive data (in terms of confidentiality, integrity, and availability) and is accessed by humans.

  - Impact: "If this risk is unmitigated, attackers might be able to access or modify highly sensitive data without strong authentication.

  - Mitigation: Apply an authentication method to the technical asset protecting highly sensitive data via two-factor authentication for human users.

- Missing Authentication: Technical assets (especially multi-tenant systems) should authenticate incoming requests when the asset processes or stores sensitive data.

  - Impact: If this risk is unmitigated, attackers might be able to access or modify sensitive data in an unauthenticated way.

  - Mitigation: Apply an authentication method to the technical asset. To protect highly sensitive data consider the use of two-factor authentication for human users.

- Missing Identity Propagation: Technical assets (especially multi-tenant systems), which usually process data for endusers should authorize every request based on the identity of the enduser when the data flow is authenticated (i.e. non-public). For DevOps usages at least a technical-user authorization is required.

  - Impact: If this risk is unmitigated, attackers might be able to access or modify foreign data after a successful compromise of a component within the system due to missing resource-based authorization checks.

  - Mitigation: When processing requests for endusers if possible authorize in the backend against the propagated identity of the enduser. This can be achieved in passing JWTs or similar tokens and checking them in the backend services. For DevOps usages apply at least a technical-user authorization.

- Missing Identity Provider Isolation: Highly sensitive identity provider assets and their identity datastores should be isolated from other assets by their own network segmentation trust-boundary.

  - Impact: If this risk is unmitigated, attackers successfully attacking other components of the system might have an easy path towards highly sensitive identity provider assets and their identity datastores, as they are not separated by network segmentation.

  - Mitigation: Apply a network segmentation trust-boundary around the highly sensitive identity provider assets and their identity datastores.

- Missing Network Segmentation: Highly sensitive assets and/or datastores residing in the same network segment than other lower sensitive assets (like webservers or content management systems etc.) should be better protected by a network segmentation trust-boundary.

  - Impact: If this risk is unmitigated, attackers successfully attacking other components of the system might have an easy path towards more valuable targets, as they are not separated by network segmentation.

  - Mitigation: Apply a network segmentation trust-boundary around the highly sensitive assets and/or datastores.

- Missing Vault Isolation: Highly sensitive vault assets and their datastores should be isolated from other assets by their own network segmentation trust-boundary (" + model.ExecutionEnvironment.String() + " boundaries do not count as network isolation).

  - Impact: If this risk is unmitigated, attackers successfully attacking other components of the system might have an easy path towards highly sensitive vault assets and their datastores, as they are not separated by network segmentation.

  - Mitigation: Apply a network segmentation trust-boundary around the highly sensitive vault assets and their datastores.

- Missing Vault (Secret Storage): In order to avoid the risk of secret leakage via config files (when attacked through vulnerabilities being able to read files like Path-Traversal and others), it is best practice to use a separate hardened process with proper authentication, authorization, and audit logging to access config secrets (like credentials, private keys, client certificates, etc.). This component is usually some kind of Vault.

  - Impact: If this risk is unmitigated, attackers might be able to easier steal config secrets (like credentials, private keys, client certificates, etc.) once a vulnerability to access files is present and exploited.

  - Mitigation: Consider using a Vault (Secret Storage) to securely store and access config secrets (like credentials, private keys, client certificates, etc.).

- Mixed Targets on Shared Runtime: Different attacker targets (like frontend and backend/datastore components) should not be running on the same shared (underlying) runtime.

  - Impact: If this risk is unmitigated, attackers successfully attacking other components of the system might have an easy path towards more valuable targets, as they are running on the same shared runtime.

  - Mitigation: Use separate runtime environments for running different target components or apply similar separation styles to prevent load- or breach-related problems originating from one more attacker-facing asset impacts also the other more critical rated backend/datastore assets.

- Unguarded Access From Internet: Internet-exposed assets must be guarded by a protecting service, application, or reverse-proxy.

  - Impact: If this risk is unmitigated, attackers might be able to directly attack sensitive systems without any hardening components in-between due to them being directly exposed on the internet.

  - Mitigation: Encapsulate the asset behind a guarding service, application, or reverse-proxy. For admin maintenance a bastion-host should be used as a jump-server. For file transfer a store-and-forward-host should be used as an indirect file exchange platform.

- Unguarded Direct Datastore Access: Datastores accessed across trust boundaries must be guarded by some protecting service or application.

  - Impact: If this risk is unmitigated, attackers might be able to directly attack sensitive datastores without any protecting components in-between.

  - Mitigation: Encapsulate the datastore access behind a guarding service or application.

- Unnecessary Communication Link: "When a technical communication link does not send or receive any data assets, this is an indicator for an unnecessary communication link (or for an incomplete model).

  - Impact: If this risk is unmitigated, attackers might be able to target unnecessary communication links.

  - Mitigation: Try to avoid using technical communication links that do not send or receive anything.

- Unnecessary Data Asset: When a data asset is not processed or stored by any data assets and also not transferred by any communication links, this is an indicator for an unnecessary data asset (or for an incomplete model).

  - Impact: If this risk is unmitigated, attackers might be able to access unnecessary data assets using other vulnerabilities.

  - Mitigation: Try to avoid having data assets that are not required/used.

- Unnecessary Data Transfer: When a technical asset sends or receives data assets, which it neither processes or stores this is an indicator for unnecessarily transferred data (or for an incomplete model). When the unnecessarily transferred data assets are sensitive, this poses an unnecessary risk of an increased attack surface.

  - Impact: If this risk is unmitigated, attackers might be able to target unnecessarily transferred data.

  - Mitigation: Try to avoid sending or receiving sensitive data assets which are not required (i.e. neither processed or stored) by the involved technical asset.

- Unnecessary Technical Asset: When a technical asset does not process or store any data assets, this is an indicator for an unnecessary technical asset (or for an incomplete model). This is also the case if the asset has no communication links (either outgoing or incoming).

  - Impact: If this risk is unmitigated, attackers might be able to target unnecessary technical assets.

  - Mitigation: Try to avoid using technical assets that do not process or store anything.
