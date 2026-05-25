<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Banner;
use Illuminate\Http\Request;

class BannerController extends Controller
{
    public function index()
    {
        // 1. Fetch active banners
        // 2. Order them by the 'sort_order' column so the admin can arrange them
        $banners = Banner::where('is_active', true)
            ->orderBy('sort_order', 'asc')
            ->get()
            ->map(function ($banner) {
                // This converts the database path (e.g., 'banners/image.jpg') 
                // into a full, clickable URL that React can actually display.
                $banner->image_url = asset('storage/' . $banner->image_url);
                return $banner;
            });

        return response()->json($banners);
    }
}
