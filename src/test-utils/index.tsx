/* eslint-disable import/export */
/* eslint-disable @typescript-eslint/no-restricted-imports */
import { render as rtlRender } from '@testing-library/react';
import type { RenderOptions as RTLRenderOptions } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import type { MockedResponse } from '@apollo/client/testing';
import { ReactElement, ReactNode } from 'react';

type RenderOptions = RTLRenderOptions & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  apolloMocks: MockedResponse<Record<string, any>>[];
};

function render(
  ui: ReactElement,
  { apolloMocks = [], ...options }: RenderOptions,
) {
  function Wrapper({ children }: { children: ReactNode }) {
    return (
      <MockedProvider mocks={apolloMocks} addTypename={false}>
        {children}
      </MockedProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react';
export { render };
