# Nutech API

## Overview

PT. Widya Informasi Nusanatara

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Documentation](#documentation)

## Installation

```bash
git clone https://github.com/tajulsubqi/Test-Fullstack-RestAPI-WIN/tree/useQuery/be-rest_api.git
cd be-rest_api
npm install
```

rename .env.example to .env then fill the required variables

## Usage

```bash
npm start
```

## Documentation

### Base URL

localhost:8000

Endpoints:

- [GET] api/v1/products : get all prodcuts
- [POST] api/v1/products : create new product
- [GET] api/v1/product/:id : get product by id
- [PUT] api/v1/product/:id : update an existing product by id
- [DELETE] api/v1/product/:id : delete an product by id

## Request & Response Examples

### Create new product

- Request

```json
Post /api/v1/prodcuts
{
  "name": "My product",
  "description": "This is my product",
  "image": "https://example.com/image.jpg",
  "price": "100",
  "stock": "10"
}
```

### Get all prodcuts

- Request

```json
Get /api/v1/products
```

- Response

```json
[
  {
    "name": "My product",
    "description": "This is my product",
    "image": "https://example.com/image.jpg",
    "price": "100",
    "stock": "10"
  }
]
```

### Get product by id

- Request

```json
Get /api/v1/product/1
```

- Response

```json
{
  "name": "My product",
  "description": "This is my product",
  "image": "https://example.com/image.jpg",
  "price": "100",
  "stock": "10"
}
```

### Update an existing product

- Request

```json
Put /api/v1/product/1
 {
  "name": "my product",
  "description": "This is my product",
  "image": "https://example.com/image.jpg",
  "price": "100",
  "stock": "10"
  }
```

- Response

```json
{
  "id": 1,
  "name": "my product",
  "description": "This is my product",
  "image": "https://example.com/image.jpg",
  "price": "100",
  "stock": "10"
}
```

### Delete an product

- Request

```json
Delete /api/v1/product/1
```

- Response

```json
{
  "message": "Product deleted successfully."
}
```
