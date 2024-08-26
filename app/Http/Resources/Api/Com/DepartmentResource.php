<?php

namespace App\Http\Resources\Api\Com;

use App\Http\Resources\Api\StaffCollection;
use App\Http\Resources\Api\StaffResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DepartmentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'active' => $this->active,
            'staff'=> StaffResource::collection($this->whenLoaded('staffs')),
        ];
    }
}
