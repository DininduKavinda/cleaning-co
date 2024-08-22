<?php

namespace App\Http\Resources\Api;

use App\Http\Resources\Api\Meta\CityResource;
use App\Http\Resources\Api\Meta\CountryResource;
use App\Http\Resources\Api\Meta\DistrictResource;
use App\Http\Resources\Api\Meta\ProvinceResource;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StaffResource extends JsonResource
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
            'full_name' => $this->name,
            'nic' => $this->nic,
            'mobile' => $this->mobile,
            'phone' => $this->phone,
            'address' => $this->address,
            'city_id' => $this->city_id,
            'district_id' => $this->district_id,
            'province_id' => $this->province_id,
            'country_id' => $this->country_id,
            'active' => $this->active,
            'level_id'  => $this->level_id, // no level yet
            'department_id' => $this->department_id, // no Department yet
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'title' => $this->title,
            'initial' => $this->initial,
            'civil_status' => $this->civil_status,
            'user' => new UserResource($this->whenLoaded('user')),
            'city' => new CityResource($this->whenLoaded('city')),
            'district' => new DistrictResource($this->whenLoaded('district')),
            'province' => new ProvinceResource($this->whenLoaded('province')),
            'country' => new CountryResource($this->whenLoaded('country')),
        ];
    }
}
