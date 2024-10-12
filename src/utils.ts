import type { Selection, TextEditor } from 'atom';
import * as diff from 'diff';

/**
 * @see https://github.com/rockingskier/vscode-copy-copy-paste/blob/master/src/extension.ts#L16
 */
export const getSelectedText = (): string => {
	const editor: TextEditor = atom.workspace.getActiveTextEditor();

	if (!editor) {
		return;
	}

	const selection: Selection[] = editor.getSelections();

	if (!document) {
		return;
	}

	return selection.reduce((accumulator, currentObject) => {
		return `${accumulator}\n${currentObject.getText()}`;
	}, '');
};

// https://github.com/microsoft/TypeScript/issues/843#issuecomment-555932858
export function restoreWhitespace(oldText: string, newText: string) {
	const patch = diff.parsePatch(diff.createPatch('file', oldText, newText, '', ''));

	const hunks = patch[0].hunks;

	for (const hunk of hunks) {
		const lineOffset = hunk.lines.reduce((offset, line, index, lines) => {
			if (line === '-') {
				lines[index] = ' ';

				return offset + 1;
			}

			return offset;
		}, 0);

		hunk.newLines += lineOffset;

		for (const nextHunk of hunks.slice(hunks.indexOf(hunk) + 1)) {
			nextHunk.newStart += lineOffset;
		}
	}

	return diff.applyPatch(oldText, patch);
}
