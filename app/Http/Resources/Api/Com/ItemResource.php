<?php

namespace App\Http\Resources\Api\Com;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'item_type_id' => $this->item_type_id,
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
            'active' => $this->active,
            'item_type' => new ItemTypeResource($this->whenLoaded('itemType')),
        ];
    }
}
