type ProductProps = {
    name?: string;
    price?: number;
    stock?: number;
    img?: string;
};

export default function ProductCard({name,price,stock,img}: ProductProps) {

    return (
        <div className="p-7 ">
            <div className="w-72 h-48 object-scale-down ring-2 ring-black"><img className="object-scale-down w-full h-full" src="https://static.wixstatic.com/media/2cd43b_6332b492c4ea4c1991bbb15b4f76343a~mv2.png/v1/fill/w_320,h_197,q_90/2cd43b_6332b492c4ea4c1991bbb15b4f76343a~mv2.png"  /></div>
            <div>{name}</div>
                <div className=" flex space-x-40">
                    <p>${price}</p>
                    <p>Quantity: {stock}</p>
                </div>
        </div>
    )
}
