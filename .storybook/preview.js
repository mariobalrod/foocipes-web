import { MockedProvider } from '@apollo/client/testing';
import withRouter from '$/storybook/decorators/WithRouter';
import { GlobalStyle } from '$/styles/global';
import { themes } from '$/styles/themes';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { gql } from '@apollo/client';

const Wrapper = ({ children }) => (
  <ThemeProvider theme={themes.light}>
    <GlobalStyle />
    {children}
    <div id="portal-root" />
  </ThemeProvider>
);

addDecorator((storyFn) => <Wrapper>{storyFn()}</Wrapper>);

export const decorators = [withRouter()];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  apolloClient: {
    MockedProvider,
    mocks: [
      {
        request: {
          query: gql`
            query getMeTimezone {
              me {
                id
                student {
                  id
                  timezone
                }
                teacher {
                  id
                  timezone
                }
              }
            }
          `,
        },
        result: {
          data: {
            me: {
              id: '1',
              student: {
                id: '1',
                // Valid timezones are 'Pacific/Honolulu', 'America/Tegucigalpa', 'Europe/Madrid', etc.
                // You can get a full list for your browser with: `Intl.supportedValuesOf('timeZone')`
                timezone: 'America/Tegucigalpa',
              },
              teacher: null,
            },
          },
        },
      },
    ],
  },
};
