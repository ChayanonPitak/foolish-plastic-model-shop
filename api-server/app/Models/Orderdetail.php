<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orderdetail extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'orderdetails';
    protected $primaryKey = ["orderNumber","productCode"];
    protected $fillable = [
        'orderNumber',
        'productCode',
        'quantityOrdered',
        'priceEach',
        'orderLineNumber'
    ];
}
