import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import SupervisorBargeButton from './components/SupervisorBargeButton';

const PLUGIN_NAME = 'SupervisorBargePlugin';

export default class SupervisorBargePlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    flex.Supervisor.TaskOverviewCanvas.Content.add(<SupervisorBargeButton key="barge-button" />);
  }
}
