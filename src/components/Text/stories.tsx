import { withContainer } from '$/storybook/decorators/WithContainer';
import type { Meta, Story } from '@storybook/react';

import { Text } from '.';
import { Props } from './types';

export default {
  component: Text,
  title: 'General/Text',
  decorators: [withContainer()],
} as Meta;

const Template: Story<Props> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {};
