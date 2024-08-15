<?php

namespace App\Http\Resources\Api\Meta;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProvinceResource extends JsonResource
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
            'name_en' => $this->name_en,
            'name_si' => $this->name_si,
            'name_ta' => $this->name_ta,
            'country_id' => $this->country->country_name,
            'districts' => DistrictResource::collection($this->whenLoaded('districts')),
        ];
    }
}
