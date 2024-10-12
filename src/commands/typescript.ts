import { getSelectedText, restoreWhitespace } from '../utils.ts';
import * as prettier from 'prettier';
import { transpile, JsxEmit, ScriptTarget, type CompilerOptions } from 'typescript';
import Config from '../config.ts';
import normalizeNewlines from 'normalize-newline';

const tsConfig: CompilerOptions = {
	allowJs: true,
	jsx: JsxEmit.Preserve,
	removeComments: false,
	target: ScriptTarget.ESNext,

	// Make it fast
	declaration: false,
	inlineSourceMap: false,
	isolatedModules: true,
	module: undefined,
	moduleResolution: undefined,
	noEmit: false,
	noEmitOnError: false,
	noImplicitAny: false,
	skipLibCheck: true,
	sourceMap: false,
	strict: false,
};

export async function copyAsJavascript() {
	const selectedText = getSelectedText();

	if (!selectedText?.trim()) {
		atom.notifications.addWarning('No Code Selected');
		return;
	}

	try {
		// need to normalize newlines to make sure diffing works correctly with carriage returns
		const textWithNewLines = normalizeNewlines(selectedText);

		const strippedSource = await prettier.format(transpile(textWithNewLines, tsConfig), Config.get('prettierConfig'));

		// reconstruct newlines to match the original source
		const finalSource = restoreWhitespace(textWithNewLines, strippedSource).trim();

		atom.clipboard.write(finalSource);

		atom.notifications.addInfo('Copied as JavaScript');
	} catch (error) {
		console.error(error);
		atom.notifications.addError('Failed to copy as JavaScript');
	}
}
