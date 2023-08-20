import styled from 'styled-components'
import theme from '../../styles/theme';

export const PostContainer = styled.div`
  overflow: auto;
`;

export const Content = styled.div`
margin-top: 200px;
margin-left: 100px;
margin-right: 100px;
overflow: auto;
`;

export const Backgroundcolor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: auto;
  background-color: ${theme.colors.beige};
`;