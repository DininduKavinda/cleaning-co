<?php

namespace App\Http\Resources\Api\Core;

use App\Http\Resources\Api\ClientResource;
use App\Http\Resources\Api\StaffResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MatterDocumentResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'matter_id' => $this->matter_id,
            'client_id' => $this->client_id,
            'staff_id' => $this->staff_id,
            'id' => $this->id,
            'document' => $this->document,
            'status' => $this->status,
            'notes' => $this->notes,
            'file_name' => $this->file_name,
            'active' => $this->active,
            'client' => new ClientResource($this->whenLoaded('client')),
            'staff' => new StaffResource($this->whenLoaded('staff')),
            'matter'=> new MatterResource($this->whenLoaded('matter')),
        ];
    }
}
