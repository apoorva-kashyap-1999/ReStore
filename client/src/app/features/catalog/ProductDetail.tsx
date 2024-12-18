import Grid from '@mui/material/Grid2';
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Product } from "../../models/products";
import { Divider, Typography } from '@mui/material';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));

  }, [id])

  if (loading) return <h3> Loading...</h3>

  if (!product) return <h3> Product Not Found</h3>

  return (
    <Grid container spacing={6}>
      <Grid size={3}> {/* xs={6} */}
        <img src={product.pictureUrl} alt={product.name} style={{width:'100%'}} />
      </Grid>
      <Grid > 
        <Typography variant='h3'>{product.name}</Typography>
        <Divider></Divider>
      </Grid>
    </Grid> 
  )
}
