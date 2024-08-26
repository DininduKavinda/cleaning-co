<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMatterDocumentRequest extends FormRequest
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
            'matter_id' => ['required'],
            'client_id' => ['required'],
            'staff_id' => ['required'],
            'document' => ['required'],
            'status' => ['required'],
            'notes' => ['required'],
            'file_name' => ['required'],
            'active' => ['sometimes'],
        ];
    }
    protected function prepareForValidation(){
        $this->merge([
            'name' => $this->name,
        ]);
    }
}
