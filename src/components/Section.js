import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

export default ({ data }) => (
  <Card>
    <CardContent>
      <Typography>{data.heading}</Typography>
    </CardContent>
  </Card>
);
