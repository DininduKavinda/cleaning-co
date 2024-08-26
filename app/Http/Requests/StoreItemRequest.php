<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreItemRequest extends FormRequest
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
            'item_type_id' => ['required'],
            'name' =>  ['required'],
            'price' =>  ['required'],
            'active' =>  ['sometimes'],
        ];
    }
    protected function prepareForValidation(){
        $this->merge([
            'name' => $this->name ,
        ]);
    }
}
