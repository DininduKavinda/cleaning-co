<?php

namespace App\Http\Resources\Api\Meta;

use App\Http\Resources\Api\ClientResource;
use App\Http\Resources\Api\StaffResource;
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
            'province_id' => $this->province_id,
            'cities' => CityResource::collection($this->whenLoaded('cities')),
            'province' => new ProvinceResource($this->whenLoaded('province')),
            // 'staff' => StaffResource::collection($this->whenLoaded('staff')),
            // 'clients' => ClientResource::collection($this->whenLoaded('clients')),
        ];
    }
}
