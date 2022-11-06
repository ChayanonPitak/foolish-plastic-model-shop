<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productline extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'productlines';
    protected $primaryKey = "productLine";
    protected $fillable = [
        'productLine',
        'textDescription',
        'htmlDescription',
        'image'
    ];

    public function products() {
        return $this->hasMany(Product::class);
    }
}
