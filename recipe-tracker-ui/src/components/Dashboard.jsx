import React,{useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import  Container  from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CreateRecipeForm from './user/CreateRecipeForm';
import Cards from './Cards';
import axios from 'axios';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [data, setData] = useState([]);
  const userId =  window.localStorage.getItem("id");

  const [mount, setMount] = useState(true);
    useEffect(() => {
   let isMounted = true;   
    var config = {
    method: 'get',
    url: 'https://test-digichef-api.fiddlingphotographer.com/recipetracker/recipes/?user='+ userId , //change number later
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    if(mount) {
    console.log(JSON.stringify(response.data));
    setData(response.data);

  }
  })
  .catch(function (error) {
    console.log(error);
  });
  
  return () => { setMount(false)}; 
      });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function logout() {
    window.localStorage.clear();
  }

  return (
    <div className={classes.root}>
      <Container>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Published" {...a11yProps(0)} />
          <Tab label="Create" {...a11yProps(1)} />
          <Tab label="Logout" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
       </Container>
      <TabPanel value={value} index={0}>
      <Container>
        <h1>Published</h1>
        <Cards recipes = {data}/>
    </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Container>
        <h1>Create</h1> 
        <CreateRecipeForm />
      </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Container>
        <h1> 
           <a href="/signin" onClick={logout}>Log out</a>
        </h1> 
  
      </Container>
      </TabPanel>
     
    </div>
  );
}