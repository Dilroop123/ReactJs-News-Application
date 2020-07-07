import React, { Fragment, useEffect, useState } from 'react';
import { Grid, Typography, Paper } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import NewsItem from '../../layout/NewsItem';
import * as newsAction from '../../store/actions/NewsAction';
const News = ({ newUserName }) => {
    const dispatch = useDispatch();
    const UsersData = useSelector(state => state.news.NewsData);
    console.log(UsersData);

    useEffect(() => {

        dispatch(newsAction.fetchnews(newUserName))

    }, []);






    return (
        <Fragment>
            <Grid container spacing={2}>

                <Grid item sm>
                    <Paper style={pageStyle}>
                        <Typography style={{color:'blue'}} variant="h4">
                            {newUserName}
                           </Typography>
                        {UsersData.map((news) => (
                            <NewsItem key={news.id} data={news} />
                        ))}

                    </Paper>
                </Grid>
            </Grid>
        </Fragment>
    );
}

export default News;
const pageStyle = {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 400,
    overflowY: 'auto'

}