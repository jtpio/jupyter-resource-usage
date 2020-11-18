import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the nbresuse extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'nbresuse',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension nbresuse is activated!');
  }
};

export default extension;
