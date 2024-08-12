<?php

namespace App\Http\Resources\Api\Meta;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DistrictResource extends JsonResource
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
            'province_id' => $this->province->name_en,
            'country_id' => $this->province->country->country_name,
            'cities' => CityResource::collection($this->whenLoaded('cities'))
        ];
    }
}
