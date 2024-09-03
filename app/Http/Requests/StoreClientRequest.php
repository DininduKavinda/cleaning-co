<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreClientRequest extends FormRequest
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
            'nic'=>['required'],
            'name'=>['required'],
            'mobile'=>['required'],
            'phone'=>['required'],
            'address'=>['required'],
            'country_id'=>['required'],
            'province_id'=>['required'],
            'district_id'=>['required'],
            'city_id'=>['required'],
            'roles' => ['sometimes'],
            'full_name' => ['required'],
            'password' => 'required|min:6|confirmed',
            'password_confirmation' => 'required|same:password',
            'email' => ['required','email'],
            'image' => ['max:2048'],
            'last_login' => ['sometimes'],
            'active' => ['sometimes'],
        ];
    }
    protected function prepareForValidation()
    {
        $this->merge([
            'name' => $this->name,
        ]);
    }
}
