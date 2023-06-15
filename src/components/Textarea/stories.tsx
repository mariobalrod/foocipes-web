import { withContainer } from '$/storybook/decorators/WithContainer';
import type { Meta, Story } from '@storybook/react';

import { Textarea } from '.';
import { Props } from './types';

export default {
  component: Textarea,
  title: 'Form/Textarea',
  decorators: [withContainer({ width: 320 })],
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
  },
} as Meta;

const Template: Story<Props> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  hasError: true,
  errorMessage: 'This is an error message',
};

export const withHelpText = Template.bind({});
withHelpText.args = {
  helpMessage: 'This is a hint text to help user',
};

export const withHelpTextAndError = Template.bind({});
withHelpTextAndError.args = {
  hasError: true,
  errorMessage: 'This is an error message',
  helpMessage: 'This is a hint text to help user',
};
