import React, { Fragment } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';



function Header() {
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" >
            News
          </Typography>

        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default Header;
