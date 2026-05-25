<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $guarded = []; // Allows Filament to save data easily

    public function products() {
        return $this->hasMany(Product::class);
    }
}
