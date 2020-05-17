import React from "react";

//MATERIAL COMPONENTS
import { Link, Box, Typography } from "@material-ui/core";

function CopyLeft() {
  return (
    <Box mb={0} height="100%">
      <Typography variant="body2" color="textSecondary" align="left">
        {"CopyLeft "}
        <Link color="inherit" href="https://github.com/rociopiotti">
          <span className="copy-left">©</span> rociopiotti.com
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}

export default CopyLeft;
