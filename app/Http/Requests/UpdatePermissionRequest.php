<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePermissionRequest extends FormRequest
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
        $method = $this->method();
        if ($method == 'put') {
            return [
                'name' => ['required', 'unique:permissions,name'],
            ];
        } else {
            return [
                'name' => ['required', 'unique:permissions,name,'],
            ];
        }
    }

    protected function prepareForValidation()
    {
        if ($this->name) {
            $this->merge([
                'name' => strtolower($this->name),
            ]);
        }
    }
}
