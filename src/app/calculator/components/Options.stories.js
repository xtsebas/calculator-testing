import React from 'react';

import Options from './Options';

export default {
  title: 'Example/Options',
  component: Options,
};

const Template = (args) => <Options {...args} />;

export const Default = Template.bind({});
Default.args = {};
