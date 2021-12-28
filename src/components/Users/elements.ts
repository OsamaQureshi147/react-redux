import styled from 'styled-components';
import Box from '@material-ui/core/Box'
import { colors } from '../../constants';


export const CardContainer = styled(Box)`
    background-color: ${colors.secondaryText};
    padding: 10px
`

export const CardHeader = styled(Box)`
    font-size: 18px;
    padding-bottom: 5px;
    font-weight: 600;
    letter-spacing: 2px;
`