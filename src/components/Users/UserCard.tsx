import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";
import React from "react";

import { CardContainer, CardHeader } from "./elements";
import { userType } from "./UsersGrid";
import { colors } from "../../constants";

export const UserCard: React.FC<{ user: userType }> = ({ user }) => {
  const { name, username, email, phone, website, company } = user;

  return (
    <CardContainer>
      <CardHeader>{name}</CardHeader>
      <Divider />
      <Grid container spacing={2}>
        <Grid item sm={3}>
          <Box>Username</Box>
          <Box>Name</Box>
          <Box>Email</Box>
          <Box>Phone</Box>
          <Box>Website</Box>
          <Box>Company</Box>
        </Grid>
        <Grid item sm={9}>
          <Box style={{ width: "100%", textAlign: "left" }}>
            <input type="text" value={username} />
          </Box>
          <Box>
            <input type="text" value={name} />
          </Box>
          <Box>
            <input type="text" value={email} />
          </Box>
          <Box>
            <input type="text" value={phone} />
          </Box>
          <Box>
            <input type="text" value={website} />
          </Box>
          <Box>
            <input type="text" value={company.name} />
          </Box>
        </Grid>
      </Grid>
    </CardContainer>
  );
};
