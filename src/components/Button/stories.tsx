import { withContainer } from '$/storybook/decorators/WithContainer';
import type { Meta, Story } from '@storybook/react';

import { Button } from '.';
import { Props } from './types';

export default {
  component: Button,
  title: 'General/Button',
  decorators: [withContainer()],
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};
