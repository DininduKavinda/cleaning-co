<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMatterDocumentRequest extends FormRequest
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
        if ($method = 'put') {
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
        } else {
            return [
                'matter_id' => ['sometimes', 'required'],
                'client_id' => ['sometimes', 'required'],
                'staff_id' => ['sometimes', 'required'],
                'document' => ['sometimes', 'required'],
                'status' => ['sometimes', 'required'],
                'notes' => ['sometimes', 'required'],
                'file_name' => ['sometimes', 'required'],
                'active' => ['sometimes'],
            ];
        }
    }
    protected function prepareForValidation()
    {
        if ($this->file_name) {
            $this->merge([
                'file_name' => $this->file_name,
            ]);
        }
    }
}
