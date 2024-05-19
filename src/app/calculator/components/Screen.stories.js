import React from 'react';

import Screen from './Screen';

export default {
  title: 'Example/Screen',
  component: Screen,
};

const Template = (args) => <Screen {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'Valor de ejemplo',
  total: 'Total de ejemplo',
};
