import { Button } from "@mui/material";
import { Product } from "../../models/products";
import { ProductList } from "./ProductList";


interface Props {
    products: Product[];
    addProducts: () => void; //() parameter, void is return type
}


export const Catalog = ({ products, addProducts }: Props) => {

    return (
        <>
            <ProductList products={products} />
            <Button variant="contained" onClick={addProducts}>Add product</Button>
        </>
    )
}
