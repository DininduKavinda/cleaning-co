<?php

namespace App\Http\Resources\Api\Meta;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CityResource extends JsonResource
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
            'district_id'=>$this->district->name_en,
            'name_en'=>$this->name_en,
            'name_si'=>$this->name_si,
            'name_ta'=>$this->name_ta,
            'postcode'=>$this->postcode,
        ];
    }
}
