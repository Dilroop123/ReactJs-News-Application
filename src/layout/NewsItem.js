import React, { Fragment } from 'react';
import { Typography, makeStyles, Card, CardActions, CardContent } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: 20,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


function NewsItem({ data }) {
    const classes = useStyles();
    return (
        <Fragment>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h6" >
                        {data.text}
                    </Typography>
                    <Typography variant="subtitle2" >
                        {data.id}
                    </Typography>
                    <Typography variant="subtitle2" >
                        {data.date}
                    </Typography>
                </CardContent>
            </Card>
        </Fragment>
    );
}

export default NewsItem;
