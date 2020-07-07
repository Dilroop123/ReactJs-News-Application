import React from 'react';
import { Paper, Tabs, Tab } from '@material-ui/core';
import * as newsAction from '../store/actions/NewsAction';
import { useSelector, useDispatch } from 'react-redux';

const Footer = ({ setnewsUser }) => {

  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    //console.log(newValue);
    setValue(newValue);
    if (newValue == 0) {

      setnewsUser("donaldTrump")
      dispatch(newsAction.fetchnews("donaldTrump"))
    }
    if (newValue == 1) {
      setnewsUser("HillaryClinton")
    
      dispatch(newsAction.fetchnews("HillaryClinton"))
    }
    //  setMuscleString(muscles[newValue-1]);
  };


  return (
    <Paper square>
      <Tabs
        value={value}
        centered
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Donald Trump" />


        <Tab label="Hillary Clinton" />


      </Tabs>
    </Paper>
  );
}

export default Footer;
