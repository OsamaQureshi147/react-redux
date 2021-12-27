import styled from 'styled-components';
import { colors } from '../../constants';

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: ${colors.primary};
`;

export const Heading = styled.h1`
    color: ${colors.primaryText};
    letter-spacing: 5px;
`;