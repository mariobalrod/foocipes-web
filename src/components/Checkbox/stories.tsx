import type { Meta, Story } from '@storybook/react';
import styled from 'styled-components';

import { Checkbox } from '.';
import { Props } from './types';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {
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
    <Checkbox name="1" {...args} />
    <Checkbox name="2" {...args} />
    <Checkbox name="3" {...args} />
    <Checkbox name="4" {...args} />
  </Wrapper>
);

const SingleTemplate: Story<Props> = (args) => <Checkbox name="1" {...args} />;

export const Default = GroupTemplate.bind({});

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
  id: 'default',
  disabled: false,
  checked: true,
};

export const Disabled = SingleTemplate.bind({});
Disabled.args = {
  id: 'default',
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
