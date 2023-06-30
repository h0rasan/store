import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import CategoryTab from '../CategoryTab/CategoryTab';
import { fetchAllPosts } from '../../api/postApi';
import baner from '../../assets/images/shop/advertisement.jpg';

const ShopPage = () => {
  const styles = {
    div: {
      display: 'flex',
      width: '25%',
    },
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let mount = false;

    if (mount) return;
    fetchAllPosts().then((allPosts) => {
      setPosts(allPosts);
      mount = true;
    });
  }, []);

  const showPost = () => {
    return posts.map((postObj) => {
      return (
        <div style={styles.card}>
          <img
            src='https://source.unsplash.com/random//?clothes'
            alt='random'
            height='100px'
          />
          <p>{postObj.title}</p>
        </div>
      );
    });
  };
  console.log(posts);

  return (
    <Grid container direction='row'>
      <img src={baner} alt='baner' width='100%' />
      <Grid margin='0 10%'>
        <Grid>
          <CategoryTab />
        </Grid>
      </Grid>
      <Grid>{showPost()}</Grid>
    </Grid>
  );
};

export default ShopPage;
