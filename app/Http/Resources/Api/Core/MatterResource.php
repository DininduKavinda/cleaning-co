<?php

namespace App\Http\Resources\Api\Core;

use App\Http\Resources\Api\ClientResource;
use App\Http\Resources\Api\Com\DepartmentResource;
use App\Http\Resources\Api\Com\TaskResource;
use App\Http\Resources\Api\Com\TimecardTaskResource;
use App\Http\Resources\Api\StaffResource;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MatterResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'task_id' => $this->task_id,
            'client_id' => $this->client_id,
            'staff_id' => $this->staff_id,
            'approved_by' => $this->approved_by,
            'department_id' => $this->department_id,
            'id' => $this->id,
            'name' => $this->name,
            'code' => $this->code,
            'description' => $this->description,
            'started_at' => $this->started_at,
            'ended_at' => $this->ended_at,
            'status' => $this->status,
            'active' => $this->active,
            'task' => new TaskResource($this->whenLoaded('task')),
            'client' => new ClientResource($this->whenLoaded('client')),
            'staff' => new StaffResource($this->whenLoaded('staff')),
            'approved' => new StaffResource($this->whenLoaded('approved')),
            'department' => new DepartmentResource($this->whenLoaded('department')),
            'timecards' => TimecardTaskResource::collection($this->whenLoaded('timecards')),
            'timecardTasks' => TimecardTaskResource::collection($this->whenLoaded('timecardTasks')),
        ];
    }
}
