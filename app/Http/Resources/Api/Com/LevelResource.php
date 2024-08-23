<?php

namespace App\Http\Resources\Api\Com;

use App\Http\Resources\Api\StaffCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LevelResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'active' => $this->active,
            'staff'=> StaffCollection::collection($this->whenLoaded('staffs')),
        ];
    }
}
