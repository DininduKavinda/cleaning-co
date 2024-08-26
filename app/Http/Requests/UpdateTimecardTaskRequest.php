<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTimecardTaskRequest extends FormRequest
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
        $method= $this->method();
        if ($method == 'put'){
            return [
                'name' => 'required|string|max:255',
                'rate' => 'required|string|max:255',
                'active' => 'required|string|in:Pending,InProgress,Completed',
            ];
        }
        else{
            return [
                'name' => 'sometimes|required|string|max:255',
                'rate' => 'sometimes|required|string|max:255',
                'active' => 'sometimes|required|string|in:Pending,InProgress,Completed',
            ];
        }
    }
    protected function prepareForValidation(){
        if($this->name){
            $this->merge([
                'name' => $this->name,
            ]);
        }
    }
}
