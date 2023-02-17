import type { ReactNode } from 'react';
export const withContainer = (
  { padding = 16, margin = '', width = 1000 } = { padding: 16, width: 1000 },
) =>
  function WithContainer(component: () => ReactNode) {
    return (
      <div
        style={{
          padding: `${padding}px`,
          maxWidth: `${width}px`,
          margin,
          boxSizing: 'content-box',
        }}
      >
        {component()}
      </div>
    );
  };
