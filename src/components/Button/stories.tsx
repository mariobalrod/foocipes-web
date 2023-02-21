import Icon from '$/assets/icons/arrow-right.svg';
import { light } from '$/styles/themes/light';
import type { Meta, Story } from '@storybook/react';

import { Button } from '.';
import { Props } from './types';

export default {
  component: Button,
  title: 'General/Button',
  args: {
    disabled: false,
    isReadonly: false,
    isFullWidth: false,
    iconPosition: 'right',
    label: 'My button',
  },
} as Meta;

const TemplateAllVariants: Story<Props> = (args) => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    {light.buttons.variants.map((variant) => (
      <Button {...args} key={variant} variant={variant} />
    ))}
  </div>
);

export const Default = TemplateAllVariants.bind({});

const TemplateAllSizes: Story<Props> = (args) => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    {light.buttons.sizes.map((size) => (
      <Button {...args} key={size} size={size} />
    ))}
  </div>
);

export const Primary = TemplateAllSizes.bind({});
Primary.args = {
  variant: 'primary',
};

export const Outlined = TemplateAllSizes.bind({});
Outlined.args = {
  variant: 'outlined',
};

export const Ghost = TemplateAllSizes.bind({});
Ghost.args = {
  variant: 'ghost',
};

export const WithIcon = TemplateAllSizes.bind({});
WithIcon.args = {
  icon: Icon,
  iconPosition: 'right',
};

export const WithIconLeft = TemplateAllSizes.bind({});
WithIconLeft.args = {
  icon: Icon,
  iconPosition: 'left',
};

export const IconOnly = TemplateAllVariants.bind({});
IconOnly.args = {
  icon: Icon,
  isIconOnly: true,
};

export const IconOnlySizes = TemplateAllSizes.bind({});
IconOnlySizes.args = {
  icon: Icon,
  isIconOnly: true,
};

export const AsLink = TemplateAllVariants.bind({});
AsLink.args = {
  href: '/',
  target: '_self',
};

export const Fullwidth = TemplateAllVariants.bind({});
Fullwidth.args = {
  isFullWidth: true,
};

export const Disabled = TemplateAllVariants.bind({});
Disabled.args = {
  disabled: true,
};

export const Readonly = TemplateAllVariants.bind({});
Readonly.args = {
  isReadonly: true,
};
