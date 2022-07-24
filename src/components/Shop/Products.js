import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCST = [{
  id: 'p1',
  price: 6,
  title: 'My First Book',
  description: "The first book I wrote",
},
  {
    id: 'p2',
    price: 7,
    title: 'My Second Book',
    description: "The second book"
  },
  {
    id: 'p3',
    price: 9,
    title: 'My Last Book',
    description: "Last book I wrote"
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCST.map((product) => (
          <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
