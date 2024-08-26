<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateClientRequest extends FormRequest
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
                'nic' => ['required'],
                'name' => ['required'],
                'mobile' => ['required'],
                'phone' => ['required'],
                'address' => ['required'],
                'country_id' => ['required'],
                'province_id' => ['required'],
                'district_id' => ['required'],
                'city_id' => ['required'],
                'full_name' => ['required'],
                'email' => ['required', 'email'],
                'image' => ['max:2048'],
                'last_login' => ['sometimes'],
                'active' => ['sometimes'],
            ];
        } else {
            return [
                'nic' => ['sometimes', 'required'],
                'name' => ['sometimes', 'required'],
                'mobile' => ['sometimes', 'required'],
                'phone' => ['sometimes', 'required'],
                'address' => ['sometimes', 'required'],
                'country_id' => ['sometimes', 'required'],
                'province_id' => ['sometimes', 'required'],
                'district_id' => ['sometimes', 'required'],
                'city_id' => ['sometimes', 'required'],
                'full_name' => ['sometimes', 'required'],
                'email' => ['sometimes', 'required', 'email'],
                'image' => ['max:2048'],
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
