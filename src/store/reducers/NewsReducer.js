
import { FETCH_USER } from '../actions/NewsAction';

const initialState = {
    NewsData: [],

};

export default (state = initialState, action) => {

    switch (action.type) {



        case FETCH_USER:
            return {
                ...state, NewsData: action.newsData
            }

    }
    return state;
};

