import type { Meta, Story } from '@storybook/react';

import { Select } from '.';
import { Props } from './types';

export default {
  component: Select,
  title: 'Form/Select',
  args: {
    label: 'Select an option',
    id: '1',
    name: 'select-input',
    placeholder: 'Select',
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Select {...args}>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </Select>
);

const TemplateInlineBlock: Story<Props> = (args) => (
  <div style={{ display: 'inline-block' }}>
    <Select {...args}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </Select>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  name: 'select',
};

export const WithHiddenLabel = Template.bind({});
WithHiddenLabel.args = {
  name: 'select',
  hideLabel: true,
};

export const WithError = Template.bind({});
WithError.args = {
  name: 'select',
  errorMessage: 'This is an error message',
};

export const Disabled = Template.bind({});
Disabled.args = {
  name: 'select',
  disabled: true,
};

export const InlineBlock = TemplateInlineBlock.bind({});
InlineBlock.args = {};
