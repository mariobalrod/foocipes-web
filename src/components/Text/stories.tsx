import type { Meta, Story } from '@storybook/react';

import { Text } from '.';
import { Props } from './types';

export default {
  title: 'General/Text',
  args: { as: 'h1', variant: 'largeTitle' },
  argTypes: {
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'p', 'a', 'span'],
      control: { type: 'select' },
    },
    weight: {
      options: ['regular', 'medium', 'semibold', 'bold'],
      control: { type: 'select' },
    },
    color: {
      options: ['gray100', 'gray200', 'gray500', 'gray800'],
      control: { type: 'select' },
    },
    variant: {
      options: [
        'largeTitle',
        'title1',
        'title2',
        'title3',
        'title4',
        'title5',
        'bodyBig',
        'body1',
        'body2',
        'body3',
        'caption',
        'overline',
      ],
      control: { type: 'select' },
    },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Text {...args}>Jived fox nymph grabs quick waltz.</Text>
);

export const Default = Template.bind({});
Default.args = {};
