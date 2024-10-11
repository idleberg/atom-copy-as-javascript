# copy-as-javascript

> Converts TypeScript into plain JavaScript and puts it in the clipboard.

[![License](https://img.shields.io/github/license/idleberg/atom-copy-as-javascript?color=blue&style=for-the-badge)](https://github.com/idleberg/atom-copy-as-javascript/blob/main/LICENSE)
[![Release](https://img.shields.io/github/v/release/idleberg/atom-copy-as-javascript?style=for-the-badge)](https://github.com/idleberg/atom-copy-as-javascript/releases)
[![Downloads](https://img.shields.io/pulsar/dt/copy-as-javascript?style=for-the-badge&color=slateblue)](https://web.pulsar-edit.dev/packages/copy-as-javascript)
[![CI](https://img.shields.io/github/actions/workflow/status/idleberg/atom-copy-as-javascript/default.yml?style=for-the-badge)](https://github.com/idleberg/atom-copy-as-javascript/actions)

## Installation

### Package Manager

Install `copy-as-javascript` from the editor's [Package Manager](http://flight-manual.atom-editor.cc/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ ppm install copy-as-javascript || apm install copy-as-javascript`

### Using Git

Change to your packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.atom\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.atom\packages
```

**Linux & macOS**

```bash
$ cd ~/.atom/packages/
```

Clone the repository as `copy-as-javascript`:

```bash
$ git clone https://github.com/idleberg/atom-copy-as-javascript copy-as-javascript
```

Install dependencies:

```bash
$ cd copy-as-javascript
$ ppm install || apm install
```

Build source:

```bash
$ ppm run build || apm run build
```

## Usage

The package exposes a single command `Copy As Javascript: Copy As Javascript` that will copy the currently selected TypeScript code and converts it to plain JavaScript. Useful when testing code in the browser console or NodeJS REPL.

## Kudos

This plugin is inspired and in part based on this [VSCode](https://github.com/anuraghazra/vscode-strip-ts-copy) extension.

## License

This work is licensed under the [MIT License](LICENSE).
