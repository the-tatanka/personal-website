---
sidebar_position: 8
---

# Infrastructure as Code scanning

<b>KICS</b> supports configuration files for Ansible, AWS Cloudformation, Azure Resource Manager, Dockerfile, Google Deployment Manager, Kubernetes, OpenAPI, Terraform, and Helm.

Semgrep also has IaC capabilities. The corresponding Semgrep packages must be configured, see SAST Semgrep section.

Trivy and Checkcov can also be used.

Before choosing one of the tools, it should be noted that all of the listed ones identify the high findings. It is best to use a tool that is already in use (probably Trivy or Semgrep).

- [KICS home](https://kics.io/)

- KICS Github action: https://github.com/Checkmarx/kics-github-action

## Integration - KICS

1. Enable code scanning in your repository.

2. Create a new workflow named "kics.yml" in your ".github/workflows" directory.

3. Paste the example KICS action below.

4. KICS must be shown the paths to IaC files to be scanned. Add them to the action under "path:".

### GitHub Action

```yml
# For most projects, this workflow file will not need changing; you simply need
# to commit it to your repository.
#
# You may wish to alter this file to override the set of languages analyzed,
# or to provide custom queries or build logic.
#
name: "KICS"

on:
  push:
    branches: [ main, master ]
  pull_request:
    # The branches below must be a subset of the branches above
    branches: [ main, master ]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'
  schedule:
    - cron: '28 15 * * 3'

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      actions: read
      contents: read
      security-events: write

    steps:
    - uses: actions/checkout@v2

    - name: KICS scan
      uses: checkmarx/kics-github-action@v1.3
        with:
          # Scanning two directories: ./terraform/ ./cfn-templates/ plus a single file
          path: 'terraform,cfn-templates,my-other-sub-folder/Dockerfile'
          # Fail on HIGH and MEDIUM severity results
          fail_on: high,medium
          # when provided with a directory on output_path
          # it will generate the specified reports file named 'results.{extension}'
          # in this example it will generate:
          # - results-dir/results.json
          # - results-dir/results.sarif
          output_path: kicsResults/
          output_formats: 'json,sarif'
          # If you want KICS to ignore the results and return exit status code 0 unless a KICS engine error happens
          # ignore_on_exit: results
          # GITHUB_TOKEN enables this github action to access github API and post comments in a pull request
          token: ${{ secrets.GITHUB_TOKEN }}
          enable_comments: true

    # Display the results in json format
    - name: Display kics results
      run: |
        cat kicsResults/results.json
      if: always()

    # Upload findings to GitHub Advanced Security Dashboard
    - name: Upload SARIF file for GitHub Advanced Security Dashboard
      uses: github/codeql-action/upload-sarif@v1
      with:
        sarif_file: kicsResults/results.sarif
      if: always()
```

## Integration - Trivy

1. Enable code scanning in your repository.

2. Create a new workflow named "trivy.yml" in your ".github/workflows" directory.

3. Paste the example Trivy action below.

### GitHub Action

```yml
# Depending on the location of your Docker container
# you need to change the path to the specific Docker registry.
#
name: "Trivy"

on:
  push:
    branches: [main, master]
  # pull_request:
  # The branches below must be a subset of the branches above
  # branches: [ main, master ]
  # paths-ignore:
  #   - "**/*.md"
  #   - "**/*.txt"
  schedule:
    # Once a day
    - cron: "0 0 * * *"
  workflow_dispatch:
  # Trigger manually

jobs:
  analyze-config:
    runs-on: ubuntu-latest
    permissions:
      actions: read
      contents: read
      security-events: write

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Run Trivy vulnerability scanner in config mode
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: "config"
          # ignore-unfixed: true
          exit-code: "1"
          hide-progress: false
          format: "sarif"
          output: "trivy-results.sarif"
          severity: "CRITICAL,HIGH"

      - name: Upload Trivy scan results to GitHub Security tab
        uses: github/codeql-action/upload-sarif@v1
        if: always()
        with:
          sarif_file: "trivy-results.sarif"
```
