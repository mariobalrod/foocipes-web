import { resetButtonStyle } from '$/styles/mixins';
import styled from 'styled-components';

export const Component = styled.button`
  ${resetButtonStyle}
  color: ${({ theme }) => theme.colors.gray200};
  background-color: ${({ theme }) => theme.colors.successDark};
  padding: 1rem 2rem;
  border-radius: 1rem;
`;
