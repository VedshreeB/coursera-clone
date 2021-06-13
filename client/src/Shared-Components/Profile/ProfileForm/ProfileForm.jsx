/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Container,
  Paper,
  Grid,
  Button,
  Divider,
  TextField,
  Avatar,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import useStyles from './styles';
// import { empStatus, expLevel, degrees } from './selectTagValues';

export const ProfileForm = () => {
  const classes = useStyles();
  document.body.style.backgroundColor = '#F5F5F5';

  return (
    <div>
      <Container className={classes.root} maxWidth="lg">
        <Paper variant="outlined" className={classes.paper}>
          <Grid container direction="column">
            {/* Heading */}
            <Grid
              item
              container
              justify="space-between"
              alignItems="center"
              className={classes.grid}
            >
              <Grid item>
                <hp1 className={classes.heading}>Edit my profile</hp1>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                  component={Link}
                  to="/profile"
                >
                  View Profile
                </Button>
              </Grid>
            </Grid>

            <Divider />

            {/* Introduction */}

            <Grid item container direction="column" className={classes.grid}>
              <Grid item>
                <h2 className={classes.intro}>Credentials</h2>
              </Grid>
              <Grid item>
                <p>
                  Let the Coursera community of other learners and instructors
                  recognize you.
                </p>
              </Grid>

              {/* First Name */}
              <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>First Name</p>
                </Grid>
                <Grid item className={classes.value}>
                  <TextField variant="outlined" fullWidth />
                </Grid>
              </Grid>

              {/* Last Name */}
              <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>Last Name</p>
                </Grid>
                <Grid item className={classes.value}>
                  <TextField variant="outlined" fullWidth />
                </Grid>
              </Grid>

              {/* Email */}

              <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>Email</p>
                </Grid>
                <Grid item className={classes.value}>
                  <TextField variant="outlined" fullWidth />
                </Grid>
              </Grid>

              {/* Password */}

              <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>Password</p>
                </Grid>
                <Grid item className={classes.value}>
                  <TextField variant="outlined" fullWidth />
                </Grid>
              </Grid>

              {/* Profile Photo */}
              <Grid
                item
                container
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>Profile Photo</p>
                </Grid>
                <Grid item className={classes.value} container>
                  <Grid item>
                    <Avatar variant="square" className={classes.avatar}>
                      <PersonIcon className={classes.personIcon} />
                    </Avatar>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.photoBtn}
                      type="file"
                    >
                      Upload a photo
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider />

            {/* Work Experience And Education */}

            {/* <Grid item container direction="column" className={classes.grid}>
              <Grid item>
                <h2 className={classes.intro}>Work Experience and Education</h2>
              </Grid>
              <Grid item>
                <p>
                  Tell us about your experience and education to get a
                  personalized learning experience with course recommendations.
                </p>
              </Grid> */}

            {/* Work Experience */}

            {/* <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>Employment Status</p>
                </Grid>
                <Grid item className={classes.value}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    select
                    className={classes.selectTag}
                  >
                    {empStatus.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid> */}

            {/* Employer */}
            {/* 
              <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>Employer</p>
                </Grid>
                <Grid item className={classes.value}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    placeholder="if employed, tell us where you work"
                  />
                </Grid>
              </Grid> */}

            {/* Experience Level */}

            {/* <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>Experience Level</p>
                </Grid>
                <Grid item className={classes.value}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    select
                    className={classes.selectTag}
                  >
                    {expLevel.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid> */}

            {/* HIGHEST DEGREE */}

            {/* <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.label}>
                  <p className={classes.labelText}>Highest Degree</p>
                </Grid>
                <Grid item className={classes.value}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    select
                    className={classes.selectTag}
                  >
                    {degrees.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </Grid>
            <Divider /> */}

            {/* Save Changes */}

            <Grid item container direction="column" className={classes.grid}>
              <Grid
                item
                container
                alignItems="center"
                justify="flex-end"
                className={classes.inputGrid}
                spacing={3}
              >
                <Grid item className={classes.value}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.photoBtn}
                  >
                    Save Changes
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};