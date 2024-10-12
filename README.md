# copy-as-javascript

[![License](https://img.shields.io/github/license/idleberg/atom-copy-as-javascript?color=blue&style=for-the-badge)](https://github.com/idleberg/atom-copy-as-javascript/blob/main/LICENSE)
[![Release](https://img.shields.io/github/v/release/idleberg/atom-copy-as-javascript?style=for-the-badge)](https://github.com/idleberg/atom-copy-as-javascript/releases)
[![Downloads](https://img.shields.io/pulsar/dt/copy-as-javascript?style=for-the-badge&color=slateblue)](https://web.pulsar-edit.dev/packages/copy-as-javascript)
[![CI](https://img.shields.io/github/actions/workflow/status/idleberg/atom-copy-as-javascript/default.yml?style=for-the-badge)](https://github.com/idleberg/atom-copy-as-javascript/actions)

Converts TypeScript into plain JavaScript and puts it in the clipboard. Why?

> “An underdiscussed benefit of JS over TS - I'll frequently test individual functions by pasting them into the browser console. There's no faster feedback loop.”
>
> Rich Harris, creator or Rollup & Svelte

## Installation

### Package Manager

Install `copy-as-javascript` from the editor's [Package Manager](http://flight-manual.atom-editor.cc/using-atom/sections/atom-packages/) or the command-line equivalent:

`$ ppm install copy-as-javascript || apm install copy-as-javascript`

### Using Git

> [!NOTE]
> The following examples assume you are using [Pulsar](https://pulsar-edit.dev/), a follow-up project for the [discontinued Atom](https://github.blog/news-insights/product-news/sunsetting-atom/) editor. If you still use Atom, replace the `.pulsar` folder with `.atom`, as well as the CLI tool `ppm` with `apm`.

Change to your packages directory:

**Windows**

```powershell
# Powershell
$ cd $Env:USERPROFILE\.pulsar\packages
```

```cmd
:: Command Prompt
$ cd %USERPROFILE%\.pulsar\packages
```

**Linux & macOS**

```bash
$ cd ~/.pulsar/packages/
```

Clone the repository as `copy-as-javascript`:

```bash
$ git clone https://github.com/idleberg/atom-copy-as-javascript copy-as-javascript
```

Install dependencies:

```bash
$ cd copy-as-javascript
$ ppm install
```

Build source:

```bash
$ ppm run build
```

## Usage

The package exposes a single command `Copy As Javascript: Copy As Javascript` that will copy the currently selected TypeScript code and converts it to plain JavaScript. Useful when testing code in the browser console or NodeJS REPL.

## Kudos

This plugin is inspired and in part based on this [VSCode](https://github.com/anuraghazra/vscode-strip-ts-copy) extension.

## License

This work is licensed under the [MIT License](LICENSE).
