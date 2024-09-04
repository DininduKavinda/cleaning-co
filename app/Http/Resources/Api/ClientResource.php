<?php

namespace App\Http\Resources\Api;

use App\Http\Resources\Api\Meta\CityResource;
use App\Http\Resources\Api\Meta\CountryResource;
use App\Http\Resources\Api\Meta\DistrictResource;
use App\Http\Resources\Api\Meta\ProvinceResource;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ClientResource extends JsonResource
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
            'full_name' => $this->full_name,
            'name' => $this->user->name,
            'nic' => $this->nic,
            'mobile' => $this->mobile,
            'phone' => $this->phone,
            'address' => $this->address,
            'city_id' => $this->city_id,
            'district_id' => $this->district_id,
            'province_id' => $this->province_id,
            'country_id' => $this->country_id,
            'active' => $this->active,
            'roles' => $this->user->roles->pluck('name'),
            'email' => $this->user->email,
            'user' => new UserResource($this->whenLoaded('user')),
            'city' => new CityResource($this->whenLoaded('city')),
            'district' => new DistrictResource($this->whenLoaded('district')),
            'province' => new ProvinceResource($this->whenLoaded('province')),
            'country' => new CountryResource($this->whenLoaded('country')),
        ];
    }
}
