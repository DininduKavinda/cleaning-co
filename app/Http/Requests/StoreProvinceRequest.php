<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProvinceRequest extends FormRequest
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
            'country_id' => ['required'],
            'name_en' => ['required', 'max:255'],
            'name_si' => ['required', 'max:255'],
            'name_ta' => ['required', 'max:255'],
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'name_en' => $this->name_en,
        ]);
    }
}
