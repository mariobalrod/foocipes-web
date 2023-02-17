// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { RouterContext } from 'next/dist/shared/lib/router-context';
import type Router from 'next/router';
import type { ComponentType } from 'react';

/**
 * Injects a mock of the Next Router context which can be used in conjunction
 * with the Link mock (used by default when importing 'next/link' from a story)
 * to manually handle navigation actions.
 */
export default function withRouter({
  onNavigate,
}: {
  onNavigate?: (pathname: string) => void;
} = {}): (Component: ComponentType) => JSX.Element {
  const router = {
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    push(pathname: string, ...args) {
      onNavigate?.(pathname);
      action('nextRouter.push')(pathname, ...args);
      return Promise.resolve(true);
    },
    replace(pathname: string, ...args) {
      onNavigate?.(pathname);
      action('nextRouter.replace')(pathname, ...args);
      return Promise.resolve(true);
    },
    reload(...args) {
      action('nextRouter.reload')(...args);
    },
    back(...args) {
      action('nextRouter.back')(...args);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    prefetch(..._) {
      return Promise.resolve();
    },
    beforePopState(...args) {
      action('nextRouter.beforePopState')(...args);
    },
    events: {
      on(...args) {
        action('nextRouter.events.on')(...args);
      },
      off(...args) {
        action('nextRouter.events.off')(...args);
      },
      emit(...args) {
        action('nextRouter.events.emit')(...args);
      },
    },
    isFallback: false,
  } as typeof Router;

  return function WithRouter(Component) {
    return (
      <RouterContext.Provider value={router}>
        <Component />
      </RouterContext.Provider>
    );
  };
}
