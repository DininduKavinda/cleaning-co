<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMatterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'task_id' => ['required'],
            'client_id' => ['required'],
            'staff_id' => ['required'],
            'approved_by' => ['required'],
            'department_id' => ['required'],
            'name' => ['required'],
            'code' => ['required'],
            'description' => ['required'],
            'started_at' => ['required'],
            'ended_at' => ['required'],
            'status' => ['required'],
            'active' => ['sometimes'],
            //change if nessasary
            'document' => ['required'],
            'notes' => ['required'],
            'file_name' => ['required'],
        ];
    }
    protected function prepareForValidation()
    {
        $this->merge([
            'name' => $this->name,
        ]);
    }
}
