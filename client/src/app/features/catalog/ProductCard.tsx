import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material"
import { Product } from "../../models/products";

interface Props {
    product: Product;
}
export const ProductCard = ({ product }: Props) => {
    return (
        <ListItem key={product.id}>
            <ListItemAvatar>
                <Avatar src={product.pictureUrl}></Avatar>
            </ListItemAvatar>
            <ListItemText>{product.name} - {product.price}</ListItemText>
        </ListItem>
    )
}
