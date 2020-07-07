import News from '../../models/news';
export const FETCH_USER = 'FETCH_USER';
export const fetchnews = (newUserName) => {

  console.log(newUserName);
  return async dispatch => {

    const response = await fetch(`http://localhost:4000/${newUserName}`

    );

    const resData = await response.json();


    const loadednews = [];


    for (const key in resData) {
      loadednews.push(
        new News(
          resData[key].id,
          resData[key].text,
          resData[key].created_at,
        )
      );

    }


    dispatch({ type: FETCH_USER, newsData: loadednews });
  }
};