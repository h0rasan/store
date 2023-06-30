import ArticleCard from '../ArticleCard/ArticleCard';
import { Grid } from '@mui/material';
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';
import article1 from '../../assets/images/home/product1.jpg';
import article2 from '../../assets/images/home/product2.jpg';
import article3 from '../../assets/images/home/product3.jpg';
import { generateId } from '../../util/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store';

const loremText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";

export const articles = [
  {
    id: generateId(5),
    title: 'Article 1',
    description: loremText,
    image: article1,
    price: 13,
    qty: 1,
  },
  {
    id: generateId(5),
    title: 'Article 2',
    description: loremText,
    image: article2,
    price: 21,
    qty: 1,
  },
  {
    id: generateId(5),
    title: 'Article 3',
    description: loremText,
    image: article3,
    price: 43,
    qty: 1,
  },
  {
    id: generateId(5),
    title: 'Article 4',
    description: loremText,
    image: article2,
    price: 62,
    qty: 1,
  },
  {
    id: generateId(5),
    title: 'Article 5',
    description: loremText,
    image: article1,
    price: 54,
    qty: 1,
  },
  {
    id: generateId(5),
    title: 'Article 3',
    description: loremText,
    image: article3,
    price: 43,
    qty: 1,
  },
];

const ArticlesHomePage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => {
    return state.cart;
  });
  console.log(cartItems);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  return (
    <SimplifiedDiv style={{}}>
      <Grid container direction='row' spacing={3}>
        {articles.map((article, index) => (
          <Grid key={index} item md={4} lg={4}>
            <ArticleCard
              title={article.title}
              description={article.description}
              image={article.image}
              price={article.price}
              article={article}
              onClickButton={(index) => handleAddToCart(index)}
            />
          </Grid>
        ))}
      </Grid>
    </SimplifiedDiv>
  );
};

export default ArticlesHomePage;

//Postaviti funkcije koje ce izlistavati artikle

// function addArticleHandler(article) {
//   let existingIndex = state.findIndex((item) => item.id === article.id);

//   if (existingIndex >= 0) {
//     action(
//       state.map((item) => {
//         let quantity = item.qty + 1;
//         let price = item.price * quantity;
//         return item.id === article.id
//           ? { ...item, price, qty: quantity }
//           : item;
//       })
//     );
//   } else {
//     action((prev) => [...prev, article]);
//   }
// }
