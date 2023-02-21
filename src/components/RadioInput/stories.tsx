import type { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import { RadioInput } from '.';
import { Props } from './types';

export default {
  title: 'Form/RadioInput',
  component: RadioInput,
  args: {
    name: 'radio button',
    label: 'Remember me',
  },
} as Meta;

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const GroupTemplate: Story<Props> = (args) => (
  <Wrapper>
    <RadioInput {...args} />
    <RadioInput {...args} />
    <RadioInput {...args} />
    <RadioInput {...args} />
  </Wrapper>
);

const SingleTemplate: Story<Props> = (args) => <RadioInput {...args} />;

export const Default = GroupTemplate.bind({});
Default.args = {};

export const IsSmall = SingleTemplate.bind({});
IsSmall.args = {
  size: 'small',
  supportText: 'Save my login details for next time.',
};

export const WithSupportText = SingleTemplate.bind({});
WithSupportText.args = {
  supportText: 'Save my login details for next time.',
};

export const Checked = SingleTemplate.bind({});
Checked.args = {
  checked: true,
};

export const Disabled = SingleTemplate.bind({});
Disabled.args = {
  disabled: true,
};

export const CheckedDisabled = SingleTemplate.bind({});
CheckedDisabled.args = {
  id: 'default',
  disabled: true,
  checked: true,
};

export const WithHiddenLabel = SingleTemplate.bind({});
WithHiddenLabel.args = {
  hiddenLabel: true,
};
