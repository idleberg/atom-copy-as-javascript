import type { ConfigValues } from 'atom';
import { name } from '../package.json';

export default {
  schema: {
    prettierConfig: {
      title: 'Prettier Configuratiion',
      description: '',
      type: 'object',
      order: 0,
      properties: {
        parser: {
          title: 'TypeScript Parser',
          description: 'Specify which parser to use. See [documentation](https://prettier.io/docs/en/options#parser) for details.',
          type: 'string',
          enum: [
            'babel-ts',
            'typescript',
          ],
          default: 'babel-ts',
          order: 0,
        },
        printWidth: {
          title: 'Print Width',
          description: 'Specify the line length that the printer will wrap on. See [documentation](https://prettier.io/docs/en/options#print-width) for details.',
          type: 'number',
          default: 80,
          minimum: 80,
          order: 1,
        },
        useTabs: {
          title: 'Use Tabs',
          description: 'Indent lines with tabs instead of spaces. See [documentation](https://prettier.io/docs/en/options#tab-width) for details.',
          type: 'boolean',
          default: true,
          order: 2,
        },
        tabWidth: {
          title: 'Tab Width',
          description: 'Specify the number of spaces per indentation-level. See [documentation](https://prettier.io/docs/en/options#tab-width) for details.',
          type: 'number',
          default: 2,
          minimum: 0,
          maximum: 8,
          order: 3,
        },
        singleQuote: {
          title: 'Single Quote',
          description: 'Use single quotes instead of double quotes. See [documentation](https://prettier.io/docs/en/options#quotes) for details.',
          type: 'boolean',
          default: true,
          order: 4,
        },
        noSemi: {
          title: 'No Semi',
          description: 'Use single quotes instead of double quotes. See [documentation](https://prettier.io/docs/en/options#quotes) for details.',
          type: 'boolean',
          default: false,
          order: 5,
        },
        quoteProps: {
          title: 'Quote Props',
          description: 'Change when properties in objects are quoted. See [documentation](https://prettier.io/docs/en/options#quote-props) for details.',
          type: 'string',
          enum: [
            'as-needed',
            'consistent',
            'preserve',
          ],
          default: 'as-needed',
          order: 6,
        },
        arrowParens: {
          title: 'Arrow Function Parantheses',
          description: 'Include parentheses around a sole arrow function parameter. See[documentation](https://prettier.io/docs/en/options#arrow-function-parentheses) for details.',
          type: 'string',
          enum: [
            'always',
            'avoid',
          ],
          default: 'always',
          order: 7,
        },
        trailingComma: {
          title: 'Trailing Comma',
          description: 'Print trailing commas wherever possible in multi-line comma-separated syntactic structures. See[documentation](https://prettier.io/docs/en/options#trailing-commas) for details.',
          type: 'string',
          enum: [
            'all',
            'es5',
            'none',
          ],
          default: 'all',
          order: 8,
        },
        bracketSpacing: {
          title: 'Trailing Comma',
          description: 'Print spaces between brackets in object literals. See[documentation](https://prettier.io/docs/en/options#bracket-spacing) for details.',
          type: 'boolean',
          default: false,
          order: 9,
        },
      },
    },
  },

  get(key = ''): ConfigValues {
    return key?.length ? atom.config.get(`${name}.${key}`) : atom.config.get(`${name}`);
  },

  migrate(oldKey: string, newKey: string): void {
    if (!atom.config.get(`${name}.${oldKey}`) || atom.config.get(`${name}.${newKey}`)) {
      return;
    }

    try {
      atom.config.set(`${name}.${newKey}`, atom.config.get(`${name}.${oldKey}`));
      /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    } catch (error) {
      atom.notifications.addWarning(`Failed to migrate configuration, see console for details`);

      return;
    }

    atom.config.unset(`${name}.${oldKey}`);
  },

  unset(key = ''): void {
    const unsetKey = key?.length ? `${name}.${key}` : name;

    atom.config.unset(unsetKey);
  },

  async open(options = {}): Promise<void> {
    options = {
      pending: true,
      searchAllPanes: true,
      ...options,
    };

    await atom.workspace.open(`atom://config/packages/${name}`, options);
  }
};
