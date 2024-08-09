<?php

namespace App\Http\Resources\Api\Meta;

use App\Http\Resources\CustomerResource;
use App\Http\Resources\UserResource;
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
            'id' =>$this->id,
            'country_name'=> $this->country_name,
            'iso_code'=>$this->iso_code,
            'phone_code'=>$this->phone_code,
        ];
    }
}
