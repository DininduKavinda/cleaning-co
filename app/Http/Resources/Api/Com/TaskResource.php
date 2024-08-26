<?php

namespace App\Http\Resources\Api\Com;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
         return [
            'id'=>$this->id,
            'name' => $this->name,
            'active' => $this->active,
            'staff'=> MatterResource::collection($this->whenLoaded('staffs')),
        ];
    }
}
