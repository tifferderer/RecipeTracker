import React, { useState, useEffect } from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '../Button';
import { Link} from 'react-router-dom';
import './Navbar.css';

const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
        border: '1px solid #fff',
        color: "#fff",
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.0),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.5),
      },
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
      width: '93%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
        padding: theme.spacing(2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: "#fff",
    },
    inputRoot: {
      color: '#fff',
    },
    inputInput: {
      padding: theme.spacing(2, 2, 2, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    
  }));

function Navbar() {
    const classes = useStyles();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  // const [user, setUser] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // let loggedIn = () => {
  //   if (localStorage.getItem("username")) {
  //     setUser(true);
  //   }
  // }

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            DigiChef
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>

                {/* ****** Search  ******/}
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search Recipes…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                
            </li>
            <li className='nav-item'>
              <Link
                to='/recipes'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                All Recipes
              </Link>
            </li>

            {/* <li className='nav-item'>
              <Link
                to='/user'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                UserView
              </Link>
            </li> */}

            <li>
              <Link
                to='/createaccount'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Go to Your Account
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Account</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;