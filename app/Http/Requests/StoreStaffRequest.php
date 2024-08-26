<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStaffRequest extends FormRequest
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
            'level_id' => ['required'],
            'country_id' => ['required'],
            'province_id' => ['required'],
            'district_id' => ['required'],
            'city_id' => ['required'],
            'department_id' => ['required'],
            'first_name' => ['like'],
            'last_name' => ['like'],
            'nic' => ['required'],
            'titile' => ['required'],
            'initial' => ['like'],
            'full_name' => ['like'],
            'dob' => ['required'],
            'address' => ['required'],
            'mobile' => ['required'],
            'phone' => ['required'],
            'civil_status' => ['required'],
            'password' => 'required|min:6|confirmed',
            'password_confirmation' => 'required|same:password',
            'email' => ['required','email'],
            'image' => ['max:2048'],
            'last_login' => ['sometimes'],
            'active' => ['required'],
        ];
    }
    protected function prepareForValidation()
    {
        $this->merge([
            'name' => $this->name,
        ]);
    }
}
