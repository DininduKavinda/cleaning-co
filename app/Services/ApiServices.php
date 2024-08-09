<?php

namespace App\Services;

use Exception;
use Illuminate\Support\Facades\Http;
use Masmerise\Toaster\Toaster;

class ApiService
{
    protected $url;
    protected $params;
    public $data = [];
    public $dataList;

    public function __construct()
    {
        $this->url = env('API_URL');
    }

    public function fetchData($functionName, $key, $value)
    {
        if (!empty($key)) {
            $criteria = [
                'criteria[0][key]' => $key,
                'criteria[0][value]' => $value,
            ];
        } else {
            $criteria = [];
        }

        $this->params['wsfunction'] = $functionName;
        $this->params = array_merge($this->params, $criteria);

        $response = Http::get($this->url, $this->params);

        if ($response->successful()) {
            $this->data = json_decode($response->body(), true);
        } else {
            $this->data = [];
            Toaster::error('An Error Occured!');
        }
    }

    public function getAll()
    {
        return $this->data;
    }

    public function deleteData($functionName, $idnumber)
    {
        // dd($idnumber);
        $this->params['wsfunction'] = $functionName;
        $url = $this->url . '?' . http_build_query($this->params);
        $response = Http::asForm()->post($url, $idnumber);
        if ($response->successful()) {
            Toaster::Success('Deleted Successfully');
        } else {
            Toaster::error('An Error Occured!');
        }
    }

    public function editData($functionName, $id, $type, $call)
    {
        $criteria = [
            'criteria[0][key]' => 'id',
            'criteria[0][value]' => $id,
        ];
        $this->params['wsfunction'] = $functionName;
        $this->params = array_merge($this->params, $criteria);

        $response = Http::get($this->url, $this->params);


        if ($response->successful()) {
            $data = $response->json();
            if ($type != '') {
                $dataCollection = collect($data[$type]);
            } else {
                $dataCollection = collect($data);
            }
            $data = $dataCollection->first();
            $call($data);
        } else {
            throw new Exception('Error fetching user data: ' . $response->body());
        }
    }

    public function saveData($functionName, $type, $id, $validatedData)
    {
        $this->params['wsfunction'] = $functionName;
        $url = $this->url . '?' . http_build_query($this->params);

        $this->dataList = [];

        foreach ($validatedData as $key => $value) {
            if (!empty($value)) {
                if (property_exists($this, $key)) {
                    $this->{$key} = $value;
                }
                $this->dataList[$key] = $value;
            }
        }

        $data[$type] = [$this->dataList];

        $response = Http::asForm()->post($url, $data);
        if ($response->successful()) {
            Toaster::success('Operation Successful!');
        } else {
            Toaster::error('Error has been Occured!');
        }
    }
}
