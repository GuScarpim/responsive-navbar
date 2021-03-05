import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  input, button, textarea {
    font-family: 'Zilla Slab';
  }

  * {
    font-family: 'Zilla Slab';
  }

  ::-webkit-scrollbar {
    width: 8px;
    background-color: #2e2e2e;
    -webkit-border-radius: 0px;
  }
  ::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }
  ::-webkit-scrollbar-thumb:vertical {
    -webkit-border-radius: 0px;
    background: #2e2e2e;
  }
  ::-webkit-scrollbar-thumb:vertical:active {
    -webkit-border-radius: 0px;
    background: #2e2e2e;
  }
  ::-webkit-scrollbar {
    width: 9px;
    background-color: #CCC
  }
  ::-webkit-scrollbar:hover {
    background-color: #CCC;
  }
  ::-webkit-scrollbar-thumb:vertical {
    background: #2e2e2e;
  }

  body {
    padding: 0px;
    margin: 0px;
    /* background: #24292E; */
    overflow-y: auto;
    overflow-x: auto;

    @media (max-width: 800px){
      overflow-x: hidden;
    }

  }
`

export default GlobalStyle;