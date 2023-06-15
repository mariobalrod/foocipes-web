import { withContainer } from '$/storybook/decorators/WithContainer';
import type { Meta, Story } from '@storybook/react';

import { Input } from '.';
import { Props } from './types';

export default {
  component: Input,
  title: 'Form/Input',
  decorators: [withContainer({ width: 450 })],
  args: {
    label: 'Email',
    placeholder: 'olivia@untitledui.com',
    id: '1',
    name: 'text-input',
    disabled: false,
  },
} as Meta;

const Template: Story<Props> = (args) => <Input {...args} />;

export const Default = Template.bind({});

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: 'password',
  label: 'Password',
  placeholder: undefined,
};

export const WithError = Template.bind({});
WithError.args = {
  errorMessage: 'Enter valid email',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
