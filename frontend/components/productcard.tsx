type ProductProps = {
    name?: String;
    price?: Number;
    stock?: Number;
};

export default function ProductCard({name,price,stock}: ProductProps) {

    return (
        <div className="p-7 ">
            <div className="w-72 h-48 object-scale-down"><img src="https://ford-mustang-thailand.com/assets/images/cars/FORD-MUSTANG-GT.jpg?111"/></div>
            <div>{name}</div>
                <div className=" flex space-x-40">
                    <p>${price}</p>
                    <p>Quantity: {stock}</p>
                </div>
        </div>
    )
}
