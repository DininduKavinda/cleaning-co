<?php

namespace App\Http\Resources\Api\Meta;

use App\Http\Resources\Api\ClientResource;
use App\Http\Resources\Api\StaffResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CountryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return
        [
            'id' => $this->id,
            'country_name' => $this->country_name,
            'iso_code' => $this->iso_code,
            'phone_code' => $this->phone_code,
            'provinces' => ProvinceResource::collection($this->whenLoaded('provinces')),
            'staff' => StaffResource::collection($this->whenLoaded('staff')),
            'clients' => ClientResource::collection($this->whenLoaded('clients')),
        ];
    }
}
