import { createGlobalStyle } from 'styled-components'
import { colors } from '../constants'


export default createGlobalStyle`
    * {
        // display: block;
        margin: 0;
        text-align: center;
        font-size: 22px;
        color: ${colors.secondary};
        padding: 0;
        font-family:  Roboto,Segoe UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
                       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans';
    }
    .MuiContainer-root {
        display: flex;
        margin-top: 15px;
    } 
    .MuiBox-root {
        font-size: 20px;
        padding: 5px;
    } 
    // .MuiTableCell-head {
    //     color: ${colors.secondary} !important;
    //     font-weight: bold !important;
    //     font-size: x-large !important;
    // }
`