<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        // Fetch active products with their category names
        $products = Product::with('category')->where('is_active', true)->get();
        return response()->json($products);
    }
}
