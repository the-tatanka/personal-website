---
sidebar_position: 7
---

# Secret Scanning

Automatically detect tokens or credentials that have been checked into a repository via gitleaks.

<b>gitleaks</b> is a tool for detecting and preventing hardcoded secrets like passwords, api keys, and tokens in git repos.

gitleaks can also be used as a pre-commit hook to prevent the secrets from being commited to the repo.

- [Configuration file with Azure secrets config](https://github.com/DariuszPorowski/github-action-gitleaks/blob/main/.gitleaks/GitleaksUdmCombo.toml)

## Integration

1. Enable code scanning in your repository.

2. Create a new workflow named "gitleaks.yml" in your ".github/workflows" directory.

3. Paste the example gitleaks action below.

4. Based on which secrets are detected - false positives can be set to allowed in a custom configuration file under "allowlist" and "paths":

```
[allowlist]
description = "Allowlisted files"
regexes = [
    '''ghu_InstallationUserToServer000000000000''',
    '''ghs_InstallallationOrActionToken00000000''',
    '''ghp_PersonalAccessToken01245678900000000'''
]
paths = [
    '''.github/actions/node_modules/@octokit/auth-token/README.md''',
    '''.github/actions/node_modules'''
]
```

## GitHub Action

```yml
# For most projects, this workflow file will not need changing; you simply need
# to commit it to your repository.
#
# You may wish to alter this file to override the set of secrets analyzed,
# or to provide custom queries or build logic.
#
# Example config:
# https://github.com/DariuszPorowski/github-action-gitleaks/blob/main/.gitleaks/GitleaksUdmCombo.toml
#
# False positives can be set to allowed in a custom configuration file under "allowlist" and "paths".
#
name: gitleaks

on: [push, pull_request, workflow_dispatch]

jobs:
  gitleaks:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          fetch-depth: "0"

      - name: Run Gitleaks
        id: gitleaks
        uses: DariuszPorowski/github-action-gitleaks@v2
        with:
          report_format: "sarif"
          fail: true
          # config: "/.gitleaks/GitleaksUdmCombo.toml"

      - name: Get the output from the gitleaks step
        run: |
          echo "exitcode: ${{ steps.gitleaks.outputs.exitcode }}"
          echo "result: ${{ steps.gitleaks.outputs.result }}"
          echo "output: ${{ steps.gitleaks.outputs.output }}"
          echo "command: ${{ steps.gitleaks.outputs.command }}"
          echo "report: ${{ steps.gitleaks.outputs.report }}"
        if: always()

      - name: Upload Gitleaks output as artifact
        uses: actions/upload-artifact@v1
        with:
          name: gitleaks.sarif
          path: ${{ steps.gitleaks.outputs.report }}
        if: always()

      - name: Upload SARIF report
        if: always()
        # if: steps.gitleaks.outputs.exitcode == 1
        uses: github/codeql-action/upload-sarif@v1
        with:
          sarif_file: ${{ steps.gitleaks.outputs.report }}
```
