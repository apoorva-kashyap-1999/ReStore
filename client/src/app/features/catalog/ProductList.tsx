import Grid from '@mui/material/Grid2';
import { Product } from '../../models/products';
import { ProductCard } from './ProductCard';

interface Props {
    products: Product[];
}

export const ProductList = ({ products }: Props) => {
    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid size={3} key={product.id}>
                    <ProductCard product={product} />
                </Grid>

            ))}
        </Grid>
    )
}
