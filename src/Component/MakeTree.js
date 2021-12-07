import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";

export default function MakeTree(props) {
  return (
    <Grid item xs={12}>
      <Tree
        orien="Vertical"
        label={
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">{props.title}</Typography>
            </CardContent>
          </Card>
        }
      >
        {props.data.map((item) => (
          <TreeNode
            label={
              <Card variant="none">
                {item.children ? " " : item.name}
                {item.children?.length && (
                  <TreeNode
                    label={
                      <Card variant="none">
                        <MakeTree title={item.name} data={item.children} />
                      </Card>
                    }
                  />
                )}
              </Card>
            }
          />
        ))}
      </Tree>
    </Grid>
  );
}
