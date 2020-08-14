import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

export default ({ data }) => (
  <Card>
    <CardContent>
      <Typography variant="h4">{data.heading}</Typography>
      <Typography>{data.value}</Typography>
    </CardContent>
  </Card>
);
