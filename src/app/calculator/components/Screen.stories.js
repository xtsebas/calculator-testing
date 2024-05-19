import React from 'react';

import Screen from './Screen';
import './Screen.css';

export default {
  title: 'Example/Screen',
  component: Screen,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

const Template = (args) => <Screen {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '12345',
  total: '67890',
};

export const WithLongText = Template.bind({});
WithLongText.args = {
  value: 'This is a long text to demonstrate how the screen handles overflow.',
  total: 'Total Value',
};

export const Empty = Template.bind({});
Empty.args = {
  value: '',
  total: '',
};
