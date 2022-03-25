<?php namespace App\Controllers\Api;

use CodeIgniter\API\ResponseTrait;

class Test extends \CodeIgniter\Controller
{
    use ResponseTrait;

    public function index() {
        return $this->respond([
            ['id' => 1, 'name' => 'abc'],
        ],200);
    }
} 