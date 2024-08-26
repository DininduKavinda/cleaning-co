<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserTypeRequest extends FormRequest
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
        if($method == 'put'){
            return [
                'name' => ['required'],
                'active'=>['sometimes']
            ];
        }else{
            return [
                'name' => ['sometimes'],
                'active'=>['sometimes']
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
