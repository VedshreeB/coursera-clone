/* eslint-disable no-nested-ternary */
/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import Filters from '../Filters/Checkbox';
import styles from './CoursesList.module.css';

const useStyles = makeStyles(() => ({
  iconButton: {
    padding: 10,
  },
  ratingNum: {
    color: 'rgb(247, 187, 86)',
    fontWeight: '600',
    fontSize: '15px',
  },
  totalRating: {
    fontWeight: 'normal',
    fontSize: '15px',
  },
  img: {
    border: '1px solid black',
    width: '100%',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
}));

// eslint-disable-next-line react/prop-types
const CoursesList = () => {
  const { query } = useParams();
  const history = useHistory();
  const classes = useStyles();
  const [data, setData] = React.useState([]);
  const [Skip, setSkip] = React.useState(0);
  const [Limit, setLimit] = React.useState(0);
  const [filters, setFilters] = React.useState([]);

  const rating = (Math.random() * (5 - 3.5) + 3.5).toFixed(1);

  const list = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      list.push(data[i][j]);
    }
  }

  const getData = (variables) => {
    axios
      .post('http://localhost:5000/course/getCourses', variables)
      .then((res) => {
        // console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
      filters,
      query: query.toLowerCase(),
    };
    getData(variables);
  }, [filters]);

  React.useEffect(() => {
    const variables = {
      query: query.toLowerCase(),
      filters: [],
    };
    getData(variables);
  }, []);

  const handleFilter = (filters1, category) => {
    console.log(filters1, category);
    setFilters(filters1);
  };

  const handleClick = (id) => {
    axios
      .get(`http://localhost:5000/course/${id}`)
      .then((res) => {
        const { category, course_name } = res.data.data;
        // console.log(category, course_name);
        history.push(`/browse/${category}/${course_name}`);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(id);
  };
  return (
    <div>
      <div>
        <Filters handleFilter={(filters1) => handleFilter(filters1, 'Level')} />
      </div>
      {/* if filters len ===0 show all courses */}
      {list.length === 0 ? (
        <div className={styles.emptylist}>
          <h2>No Course Found.</h2>
          <p>Try Another Filters</p>
        </div>
      ) : list.length === 1 ? (
        <Redirect
          to={`/browse/${list[0].category}/${list[0].course_name}`}
          push
        />
      ) : (
        list?.map((item) => (
          <div
            aria-hidden="true"
            className={styles.list}
            onClick={() => handleClick(item._id)}
            onKeyDown={() => handleClick(item._id)}
          >
            <div className={classes.img}>
              <img src="" alt="img" />
            </div>
            <div className={styles.info}>
              <h3>{item.course_name} </h3>
              <p>{item.author} </p>
              <p>Course </p>
              <div>
                <Grid Grid container spacing={1} style={{ marginTop: '20px' }}>
                  <Grid item>
                    <Rating
                      name="simple-controlled"
                      value={rating}
                      precision={0.1}
                      readOnly
                      size="small"
                    />
                  </Grid>
                  <Grid item>
                    <p className={classes.ratingNum}>
                      {rating} |{' '}
                      {Math.ceil(Math.random() * (8500 - 5500) + 5500)} K
                      students
                    </p>
                  </Grid>
                </Grid>
              </div>

              <h4>Level: {item.level} </h4>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CoursesList;