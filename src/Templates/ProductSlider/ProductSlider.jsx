import React from 'react';
import { articles } from '../ArticlesHomePage/ArticlesHomePage';
import ArticleCard from '../ArticleCard/ArticleCard';
import { Carousel } from 'react-responsive-carousel';
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';

const styles = {
  articleCardHodler: {
    padding: 20,
  },
};

const ProductSlider = () => {
  return (
    <SimplifiedDiv>
      <Carousel
        autoPlay
        showIndicators={false}
        showStatus={false}
        infiniteLoop
        interval={1000}
        swipeable
        centerMode
        centerSlidePercentage={33}
      >
        {articles.map((article, index) => (
          <SimplifiedDiv style={styles.articleCardHodler}>
            <ArticleCard
              key={index}
              title={article.title}
              image={article.image}
              description={article.description}
              price={article.price}
            />
          </SimplifiedDiv>
        ))}
      </Carousel>
    </SimplifiedDiv>
  );
};

export default ProductSlider;
