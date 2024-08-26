<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateItemRequest extends FormRequest
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
       $method=$this->method();
       if($method=='put'){
        return [
            'item_type_id' => ['required'],
            'name' =>  ['required'],
            'price' =>  ['required'],
            'active' =>  ['sometimes'],
        ];
       }
       else{
        return [
            'item_type_id' => ['sometimes','required'],
            'name' =>  ['sometimes','required'],
            'price' =>  ['sometimes','required'],
            'active' =>  ['sometimes'],
        ];
       }
    }
    protected function prepareForValidation(){
        if ($this->name) {
            $this->merge([
                'name' => $this->name,
            ]);
        }
    }
}
