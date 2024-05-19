import React from 'react';

import Numbers from './Numbers';
import './Numbers.css';

export default {
  title: 'Example/Numbers',
  component: Numbers,
};

const Template = (args) => <Numbers {...args} />;

export const Default = Template.bind({});
Default.args = {
  setFirst: () => {},
  setSecond: () => {},
  setOption: () => {},
  setOutput: () => {},
  setTotal: () => {},
  setOperationHistory: () => {},
  output: '',
};

export const WithOutput = Template.bind({});
WithOutput.args = {
  ...Default.args,
  output: '123',
};
