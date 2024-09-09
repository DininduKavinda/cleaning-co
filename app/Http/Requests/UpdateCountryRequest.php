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
                'country_name' => ['required', 'max:225'],
                'iso_code' => ['required', 'max:225'],
                'phone_code' => ['required', 'max:20'],


            ];
        } else {
            return [
                'country_name' => ['sometimes', 'required', 'max:225'],
                'iso_code' => ['sometimes', 'required', 'max:225'],
                'phone_code' => ['sometimes', 'required', 'max:20'],
            ];
        }
    }

    protected function prepareForValidation()
    {
        if ($this->country_name) {
            $this->merge([
                'country_name' => $this->country_name,
            ]);
        }
    }
}
