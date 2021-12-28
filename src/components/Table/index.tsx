import React from "react";
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
    <table>
      <tr>
        {headerRows?.map((item) => (
          <th key={item.label}>{item.label}</th>
        ))}
      </tr>
      {rows?.map((item: any, i: number) => (
        <tr key={i}>
          {headerRows?.map((r, i) => (
            <>
              {r.id === "edit" ? (
                <td key={i}>
                  <Button title="Edit" onClick={() => onEdit(item.id)} />
                </td>
              ) : r.id === "delete" ? (
                <td key={i}>
                  <Button
                    title="Delete"
                    onClick={() => onDelete(item.id)}
                    styles={{ backgroundColor: "tomato" }}
                  />
                </td>
              ) : (
                <>
                  <td key={i}>{item[r.id]}</td>
                </>
              )}
            </>
          ))}
        </tr>
      ))}
    </table>
  );
};
