---
sidebar_position: 6
---

# Dependency Scanning

Looks for a lock file, then performs a build to fetch upstream dependency information. In the case of containers, dependency scanning uses the compatible manifest and reports only these declared software dependencies (and those installed as a sub-dependency).

The identified dependencies are compiled into a Bill of Materials (BOM), which is then compared against a variety of databases, including the National Vulnerability Database (NVD).

Dependency scanning can not detect software dependencies that are pre-bundled into the container’s base image. To identify pre-bundled dependencies, use container scanning.

Dependency scanning is part of Software Composition Analysis.

<b>OWASP Dependency-Check</b> will be used to check for vulnerable dependencies.

- https://github.com/jeremylong/DependencyCheck

- Github action: https://github.com/dependency-check/Dependency-Check_Action

- OWASP Dependency Check command line arguments (action calls Docker container from OWASP Dependency Check): https://jeremylong.github.io/DependencyCheck/dependency-check-cli/arguments.html

## Integration

1. Enable code scanning in your repository.

2. Creat a new workflow named "dependency-check.yml" in your ".github/workflows" directory.

3. Paste the example Dependency-Check action below.

## GitHub Action

```yml
# For most projects, this workflow file will not need changing; you simply need
# to commit it to your repository.
#
# You may wish to alter this file to provide command line arguments:
# https://jeremylong.github.io/DependencyCheck/dependency-check-cli/arguments.html
#
name: "Dependency-Check"

on:
  push:
    branches: [main, master]
  pull_request:
    # The branches below must be a subset of the branches above
    branches: [main, master]
    paths-ignore:
      - "**/*.md"
      - "**/*.txt"
  schedule:
    - cron: "28 15 * * 3"

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      actions: read
      contents: read
      security-events: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Dependency Check
        uses: dependency-check/Dependency-Check_Action@main
        with:
          project: "test"
          # Automatically searches for dependency manager files in the repository
          path: "."
          # Exports the results in SARIF format for SARIF upload.
          # Alternatively, other report formats can be selected, see command line arguments.
          format: "SARIF"
          # If results with a high severity are found, the workflow fails.
          args: >
            --failOnCVSS 7
            --enableRetired

      - name: Upload DependencyCheck output as artifact
        uses: actions/upload-artifact@v1
        with:
          name: dependency-check-report-sarif
          path: ${{ github.workspace }}/reports
        if: always()

      # Upload findings to GitHub Advanced Security Dashboard
      - name: Upload SARIF file for GitHub Advanced Security Dashboard
        uses: github/codeql-action/upload-sarif@v1
        with:
          # Path to SARIF file relative to the root of the repository
          sarif_file: ${{ github.workspace }}/reports/dependency-check-report.sarif
        if: always()
```
