<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
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
                'reference_id' => ['sometimes'],
                'user_type_id' => ['sometimes'],
                'name' => ['required'],
                'email' => ['required', 'email'],
                'roles' => ['required'],
                'image' => ['sometimes'],
                'last_login' => ['sometimes'],
                'active' => ['sometimes'],
            ];
        } else {
            return [
                'reference_id' => ['sometimes'],
                'user_type_id' => ['sometimes'],
                'name' => ['sometimes', 'required'],
                'email' => ['sometimes', 'required', 'email'],
                'image' => ['sometimes'],
                'roles' => ['sometimes', 'required'],
                'last_login' => ['sometimes'],
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
