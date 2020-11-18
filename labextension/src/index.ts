import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  IStatusBar,
} from '@jupyterlab/statusbar';

import {
  ITranslator
} from '@jupyterlab/translation';

import { MemoryUsage } from './memoryUsage';

/**
 * Initialization data for the nbresuse extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'nbresuse:memory-usage-status',
  autoStart: true,
  requires: [IStatusBar, ITranslator],
  activate: (
    app: JupyterFrontEnd,
    statusBar: IStatusBar,
    translator: ITranslator
  ) => {
    const item = new MemoryUsage(translator);

    statusBar.registerStatusItem(
      'nbresuse:memory-usage-status',
      {
        item,
        align: 'left',
        rank: 2,
        isActive: () => item.model!.metricsAvailable,
        activeStateChanged: item.model!.stateChanged
      }
    );
  }
};

export default extension;
