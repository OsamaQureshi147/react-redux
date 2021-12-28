import MuiTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { TableWrapper } from "./elements";
import { Button } from "../Button";

interface HeaderRow {
  id: string;
  label: string;
  type: string;
}

interface Props {
  headerRows: HeaderRow[];
  rows: any;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const Table = ({ headerRows, rows, onEdit, onDelete }: Props) => {
  return (
    <TableWrapper>
      <TableContainer component={Paper}>
        <MuiTable>
          <TableHead>
            <TableRow>
              {headerRows?.map((item) => (
                <TableCell key={item.label}>{item.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((item: any, i: number) => (
              <TableRow key={i}>
                {headerRows?.map((r, i) => (
                  <>
                    {r.id === "edit" ? (
                      <TableCell key={i}>
                        <Button
                          styles={{ backgroundColor: "#dee1e5" }}
                          onClick={() => onEdit(item.id)}
                        >
                          <EditIcon fontSize="small" />
                        </Button>
                      </TableCell>
                    ) : r.id === "delete" ? (
                      <TableCell key={i}>
                        <Button
                          onClick={() => onDelete(item.id)}
                          styles={{
                            backgroundColor: "#fbbdb1",
                          }}
                        >
                          <DeleteIcon fontSize="small" />
                        </Button>
                      </TableCell>
                    ) : (
                      <>
                        <TableCell key={i}>{item[r.id]}</TableCell>
                      </>
                    )}
                  </>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </TableWrapper>
  );
};
