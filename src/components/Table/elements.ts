import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import { colors } from '../../constants';

export const TableWrapper = styled(Box)`
    margin-top: 10px;
    .MuiTableCell-head {
        color: ${colors.secondary};
        font-weight: bold;
        font-size: x-large;
    }
    .MuiTableCell-body {
        color: inherit;
    }
    .MuiTableRow-root {
        :hover {
            background-color: #dbd0d0;
        }
    }
    .MuiSvgIcon-root {
        :hover {
            fill: black
        }
    }
`