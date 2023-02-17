import { keyframes } from 'styled-components';

type Animation = { distance: string; fade: boolean };

const DEFAULT_VALUES: Animation = {
  distance: '1rem',
  fade: true,
};

export const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  
  to {
    opacity: 0;
  }
`;

export const fadeIn = keyframes`
 from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

export const slideOutFromTop = ({
  distance,
  fade,
}: Animation = DEFAULT_VALUES) => keyframes`
  from {
    transform: translate(0);
    opacity: 1;
  }
  
  to {
    transform: translateY(${distance});
    opacity: ${fade ? 0 : 1};
  }
`;

export const slideInFromBottom = ({
  distance,
  fade,
}: Animation = DEFAULT_VALUES) => keyframes`
 from {
    transform: translateY(${distance});
    opacity:  ${fade ? 0 : 1};
  }
  
  to {
    transform: translate(0);
    opacity: 1;
  }
`;

export const slideOutFromLeft = ({
  distance,
  fade,
}: Animation = DEFAULT_VALUES) => keyframes`
  from {
    transform: translate(0);
    opacity: 1;
  }
  
  to {
    transform: translateX(${distance});
    opacity:  ${fade ? 0 : 1};
  }
`;

export const slideInFromRight = ({
  distance,
  fade,
}: Animation = DEFAULT_VALUES) => keyframes`
 from {
    transform: translateX(${distance});
    opacity:  ${fade ? 0 : 1};
  }
  
  to {
    transform: translate(0);
    opacity: 1;
  }
`;
