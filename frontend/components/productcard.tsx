type ProductProps = {
    name?: String;
    price?: Number;
    stock?: Number;
};

export default function ProductCard({name,price,stock}: ProductProps) {

    return (
        <div>
            <div></div>
            <div>Product Name : {name}</div>
            <div>Price : {price} $</div>
            <div>Stock : {stock}</div>
        </div>
    )
}
