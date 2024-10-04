<?php

namespace App\Http\Resources\Api\Meta;

use App\Http\Resources\Api\ClientResource;
use App\Http\Resources\Api\StaffResource;
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
            'country_id' => $this->country_id,
            'districts' => DistrictResource::collection($this->whenLoaded('districts')),
            'country' => new CountryResource($this->whenLoaded('country')),
            // 'staff' => StaffResource::collection($this->whenLoaded('staff')),
            // 'clients' => ClientResource::collection($this->whenLoaded('clients')),
        ];
    }
}
