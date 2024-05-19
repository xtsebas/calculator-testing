import React from 'react';

import Numbers from './Numbers';

export default {
  title: 'Example/Numbers',
  component: Numbers,
};

const Template = (args) => <Numbers {...args} />;

export const Default = Template.bind({});
Default.args = {};
