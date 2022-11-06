type ProductProps = {
    name?: string;
    price?: number;
    order?: number;
    img?: string;
};

export default function ProductCart({name,price,order,img}: ProductProps) {
    return (
        <div className="p-7 flex space-x-4">
            <div className=" w-24 h-24 ring-2 ring-black"><img className="object-scale-down w-full h-full" src={img} /></div>
                <div>
                    <p>{name}</p>
                    <p>${price}/piece</p>
                    <p>Total: {order*price}</p>
                </div>
                <div className="space-y-2 ">
                    <div className="flex space-x-4">
                        <button className='w-8 h-8 bg-sky-700 hover:bg-sky-400 text-white p-1'>-</button>
                        <p>Order: {order}</p>
                        <button className='w-8 h-8 bg-sky-700 hover:bg-sky-400 text-white p-1'>+</button>
                    </div>
                    <div className="flex justify-end">
                        <button className='w-16 h-8 bg-sky-700 hover:bg-sky-400 text-white p-1'>Delete</button>
                    </div>
                    
                </div>
                
        </div>
    )
}
