import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const Header: React.FC<{}> = () => {
  const history = useHistory();
  const moveHome = (page: string) => {
    history.push(page);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => moveHome('/')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => moveHome('/pagea')}>
            PageA
          </Button>
          <Button color="inherit" onClick={() => moveHome('/pageb')}>
            PageB
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
