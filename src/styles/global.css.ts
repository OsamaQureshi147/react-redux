import { createGlobalStyle } from 'styled-components'
import { colors } from '../constants'


export default createGlobalStyle`
    * {
        // display: block;
        margin: 0;
        text-align: center;
        font-size: 22px;
        padding: 0;
        background-color: ${colors.secondaryText};
        font-family:  Roboto,Segoe UI, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
                       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans';
    }
`