import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import React, { useState, useEffect } from "react";
import { UserCard } from "./UserCard";

interface addressType {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface userType {
  id: number;
  name: string;
  username: string;
  email: string;
  address: addressType;
  phone: string;
  website: string;
  geo: {
    lon: string;
    lat: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const UsersGrid: React.FC = () => {
  const [users, setUsers] = useState<userType[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((jsonData) => setUsers(jsonData));
  }, []);

  return (
    <Grid container spacing={2}>
      {users.length > 0
        ? users.map((user) => (
            <Grid sm={12} md={4} item key={user.username}>
              <Paper>
                <UserCard user={user} />
              </Paper>
            </Grid>
          ))
        : null}
    </Grid>
  );
};
