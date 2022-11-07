<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'products';
    protected $primaryKey = "productCode";
    protected $keyType = 'string';
    protected $fillable = [
        'productCode',
        'productName',
        'productLine',
        'productScale',
        'productVendor',
        'productDescription',
        'quantityInStock',
        'buyPrice',
        'MSRP'
    ];

    public function productlines() {
        return $this->belongsTo(Productline::class);
    }

    public function orders(){
        return $this->belongsToMany(Order::class,'orderdetails');
    }
    
    public function users() {
        return $this->belongsToMany(User::class, 'carts');
    }
}
