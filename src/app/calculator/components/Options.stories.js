import React from 'react';

import Options from './Options';
import './Options.css';

export default {
  title: 'Example/Options',
  component: Options,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    setOutput: { action: 'setOutput' },
    setTotal: { action: 'setTotal' },
  },
};

const Template = (args) => <Options {...args} />;

export const Default = Template.bind({});
Default.args = {
  output: '123',
  total: '456',
};
