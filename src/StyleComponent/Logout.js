import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import '../App.css'

export const GlobalStyle = createGlobalStyle`
  body {
 padding: 0;
 margin: 0;
 box-sizing: border-box;
 font-family: 'samim';
 
  }
`;
 export const BackgroundImage = styled.div`

background-color: var(--background);
 /* Adjust this property as needed */

  /* You can add additional styling as needed */
`;