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
        return true;
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
            'staff_id' => ['nullable'],
            'approved_by' => ['nullable'],
            'department_id' => ['required'],
            'name' => ['required'],
            'code' => ['required'],
            'description' => ['required'],
            'started_at' => ['required'],
            'ended_at' => ['nullable'],
            'status' => ['nullable'],
            'active' => ['sometimes'],
            'document' => ['nullable'],
            'notes' => ['nullable'],
            'file_name' => ['nullable'],
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'name' => $this->name,
        ]);
    }
}
