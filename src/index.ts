import { CompositeDisposable } from "atom";
import config from "./config.ts";
import Logger from "./log.ts";

const CopyAsJavascript = {
  config: config.schema,
  subscriptions: new CompositeDisposable(),

  async activate(): Promise<void> {
    Logger.log('Activating package');

    // Register commands
    this.subscriptions.add(
      atom.commands.add("atom-workspace", {
        'copy-as-javascript:copy-as-javascript': async () => {
          const { copyAsJavascript } = await import('./commands/typescript.ts');
          await copyAsJavascript();
        }
      }),
    );
  },

  deactivate(): void {
    Logger.log('Deactivating package');

    this.subscriptions?.dispose();
  },
};

export default CopyAsJavascript;
