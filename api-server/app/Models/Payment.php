<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'payments';
    protected $primaryKey = ["customerNumber","checkNumber"];
    protected $fillable = [
        'customerNumber',
        'checkNumber',
        'paymentDate',
        'amount',
    ];

    public function customers() {
        return $this->belongsTo(Customer::class);
    }
}
