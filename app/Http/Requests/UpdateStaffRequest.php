<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStaffRequest extends FormRequest
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
                'level_id' => ['required'],
                'country_id' => ['required'],
                'province_id' => ['required'],
                'district_id' => ['required'],
                'city_id' => ['required'],
                'department_id' => ['required'],
                'first_name' => ['required'],
                'last_name' => ['required'],
                'nic' => ['required'],
                'title' => ['required'],
                'initial' => ['required'],
                'full_name' => ['required'],
                'dob' => ['required'],
                'name' => ['required'],
                'address' => ['required'],
                'mobile' => ['required'],
                'phone' => ['required'],
                'civil_status' => ['required'],
                'email' => ['required', 'email'],
                'image' => ['sometimes','max:2048'],
                'last_login' => ['sometimes'],
                'active' => ['required'],
            ];
        } else {
            return [
                'level_id' => ['sometimes', 'required'],
                'country_id' => ['sometimes', 'required'],
                'province_id' => ['sometimes', 'required'],
                'district_id' => ['sometimes', 'required'],
                'city_id' => ['sometimes', 'required'],
                'department_id' => ['sometimes', 'required'],
                'first_name' => ['sometimes', 'required'],
                'last_name' => ['sometimes', 'required'],
                'name' => ['sometimes', 'required'],
                'nic' => ['sometimes', 'required'],
                'title' => ['sometimes', 'required'],
                'initial' => ['sometimes', 'required'],
                'full_name' => ['sometimes', 'required'],
                'dob' => ['sometimes', 'required'],
                'address' => ['sometimes', 'required'],
                'mobile' => ['sometimes', 'required'],
                'phone' => ['sometimes', 'required'],
                'civil_status' => ['sometimes', 'required'],
                'email' => ['sometimes', 'required'],
                'image' => ['sometimes', 'max:2048'],
                'last_login' => ['sometimes'],
                'active' => ['sometimes', 'required'],
            ];
        }
    }
    protected function prepareForValidation()
    {
        if ($this->full_name) {
            $this->merge([
                'full_name' => $this->full_name,
            ]);
        }
    }
}
