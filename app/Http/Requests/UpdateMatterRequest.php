<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMatterRequest extends FormRequest
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
        $method =  $this->method();
        if ($method == 'put') {
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
            ];
        } else {
            return [
                'task_id' => ['sometimes', 'required'],
                'client_id' => ['sometimes', 'required'],
                'staff_id' => ['sometimes', 'required'],
                'approved_by' => ['sometimes', 'required'],
                'department_id' => ['sometimes', 'required'],
                'name' => ['sometimes', 'required'],
                'code' => ['sometimes', 'required'],
                'description' => ['sometimes', 'required'],
                'started_at' => ['sometimes', 'required'],
                'ended_at' => ['sometimes', 'required'],
                'status' => ['sometimes', 'required'],
                'active' => ['sometimes'],
            ];
        }
    }
    protected function prepareForValidation()
    {
        if ($this->name) {
            $this->merge([
                'name' => $this->name,
            ]);
        }
    }
}
