<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCountryRequest extends FormRequest
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
        $method = $this->method();
        if ($method == 'put') {
            return [
                'country_name' => ['required', 'unique:countries', 'max:225'],
                'iso_code' => ['required', 'unique:countries', 'max:225'],
                'phone_code' => ['required', 'unique:countries', 'max:20'],
                'user_id' => ['required'],

            ];
        } else {
            return [
                'country_name' => ['sometimes', 'required', 'unique:countries', 'max:225'],
                'iso_code' => ['sometimes', 'required', 'unique:countries', 'max:225'],
                'phone_code' => ['sometimes', 'required', 'unique:countries', 'max:20'],
                'user_id' => ['sometimes', 'required'],
              
            ];
        }
    }
    protected function prepareForValidation()
    {
        $this->merge([
            'country_name' => $this->country_name,
        ]);
    }
}
