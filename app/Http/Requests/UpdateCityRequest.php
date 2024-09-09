<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCityRequest extends FormRequest
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
        if ($method == 'PUT') {
            return [
                'district_id' => ['required'],
                'name_en' => ['required', 'max:255'],
                'name_si' => ['sometimes', 'max:255'],
                'name_ta' => ['sometimes', 'max:255'],

            ];
        } else {
            return [
                'district_id' => ['sometimes', 'required'],
                'name_en' => ['sometimes', 'required', 'max:255'],
                'name_si' => ['sometimes', 'required', 'max:255'],
                'name_ta' => ['sometimes', 'required', 'max:255'],

            ];
        }
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'district_id' => $this->district_id,
        ]);
    }
}
