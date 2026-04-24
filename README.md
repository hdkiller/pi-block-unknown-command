# pi-block-unknown-command

A pi extension that intercepts unknown slash commands and prevents them from being sent to the LLM.

## What it does

When a user types a slash command that pi does not recognize, this extension:

- blocks the request before it reaches the model
- shows a warning notification
- allows known built-in and registered commands through normally

This helps avoid wasting requests on typos like `/realod` or nonexistent commands.

## Install

### From GitHub

```bash
pi install git:github.com/hdkiller/pi-block-unknown-command
```

### From local path

```bash
pi install ./pi-block-unknown-command
```

## Usage

Reload pi after installing:

```text
/reload
```

No configuration is required.

## Development

Run pi with the local package:

```bash
pi -e ./pi-block-unknown-command
```
