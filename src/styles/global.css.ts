import { createGlobalStyle } from 'styled-components'


export default createGlobalStyle`
    * {
        // display: block;
        margin: 0;
        text-align: center;
        font-size: 22px;
        padding: 0;
        font-family:  Roboto,Segoe UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
                       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans';
    }
    .MuiContainer-root {
        display: flex;
        margin-top: 15px;
    }  
`