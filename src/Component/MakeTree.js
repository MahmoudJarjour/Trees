import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";

export default function MakeTree(props) {
  return (
    <Grid item xs={12} style={{ direction: "ltr" }}>
      <Tree
        label={
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "600" }}>
                {props.title}
              </Typography>
            </CardContent>
          </Card>
        }
      >
        {props.data.map((item) => (
          <TreeNode
            label={
              <Card variant="none">
                <CardActionArea>
                  <CardContent>
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
                  </CardContent>
                </CardActionArea>
              </Card>
            }
          />
        ))}
      </Tree>
    </Grid>
  );
}
