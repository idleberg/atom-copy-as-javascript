import { getSelectedText, restoreWhitespace } from "../utils.ts";
import * as prettier from "prettier";
import * as ts from "typescript";
import Config from '../config.ts';
import normalizeNewlines from "normalize-newline";

const tsConfig: ts.CompilerOptions = {
  allowJs: true,
  jsx: ts.JsxEmit.Preserve,
  removeComments: false,
  target: ts.ScriptTarget.ESNext,
};

export async function copyAsJavascript() {
  const selectedText = getSelectedText();

  if (!selectedText?.trim()) {
    atom.notifications.addWarning("No Code Selected");
    return;
  }

  try {
    // need to normalize newlines to make sure diffing works correctly with carriage returns
    const textWithNewLines = normalizeNewlines(selectedText);

    const strippedSource = await prettier.format(
      ts.transpile(textWithNewLines, tsConfig),
      Config.get("prettierConfig")
    );

    console.log(Config.get("prettierConfig"))

    // reconstruct newlines to match the original source
    const finalSource = restoreWhitespace(
      textWithNewLines,
      strippedSource
    ).trim();

    atom.clipboard.write(finalSource);

    atom.notifications.addInfo("Copied as JavaScript");
  } catch (err) {
    console.log(err);
    atom.notifications.addError("Failed to copy as JavaScript");
  }
}
