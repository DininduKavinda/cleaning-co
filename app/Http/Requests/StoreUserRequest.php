<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
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
        return [
            'reference_id' => ['sometimes'],
            'user_type_id' => ['sometimes'],
            'name' => ['required'],
            'email' => ['required','email'],
            'image' => ['sometimes'],
            'last_login' => ['sometimes'],
            'active' => ['sometimes'],
        ];
    }
    protected function prepareForValidation(){
        $this->merge([
            'name'=>$this->name,
        ]);
    }
}
