type ProductProps = {
    name?: string;
    price?: number;
    stock?: number;
    img?: string;
};

export default function ProductCard({name,price,stock,img}: ProductProps) {

    return (
        <div className="p-7 ">
            <div className="w-72 h-48 object-scale-down ring-2 ring-black"><img src={img} /></div>
            <div>{name}</div>
                <div className=" flex space-x-40">
                    <p>${price}</p>
                    <p>Quantity: {stock}</p>
                </div>
        </div>
    )
}
