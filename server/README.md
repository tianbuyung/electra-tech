# Electra Tech - Server - API Documentation

## Endpoints

List of Available Endpoints:

- `POST /api/register`
- `POST /api/login`
- `POST /api/orders`
- `GET /api/orders`
- `GET /api/orders/:id`

### Register a new user

```http
POST /api/register
```

#### Description

- Post to register a new user

#### Request

- Headers

  ```json
  {
    "Content-Type": "application/json"
  }
  ```

- Body

  ```json
  {
    "email": String,
    "password": String,
    "confirmPassword": String,
  }
  ```

#### Response

- Success

  _201 - Created_

- Body

  ```json
  {
    "statusCode": 201,
    "message": "Registration successfully",
    "data": {
      "userId": Number
    }
  }
  ```

- Error

  _400 - Bad Request_

- Body

  ```json
  {
    "statusCode": 400,
    "error": {
      "name": "BadRequest",
      "messages": [
        String,
        ...
      ]
    }
  }
  OR
  {
    "statusCode": 400,
    "error": {
        "name": "BadRequest",
        "message": "Passwords do not match"
    }
  }
  ```

  _500 - Internal Server Error_

- Body

  ```json
  {
    "statusCode": 500,
    "error": {
      "name": String,
      "message": String
    }
  }
  ```

### Login user

```http
POST /api/login
```

#### Description

- Post to login user

#### Request

- Headers

  ```json
  {
    "Content-Type": "application/json"
  }
  ```

- Body

  ```json
  {
    "email": String,
    "password": String,
  }
  ```

#### Response

- Success

  _201 - Created_

- Body

  ```json
  {
    "statusCode": 200,
    "message": "Login successfully",
    "data": {
      "userId": Number,
      "access_token": String,
    }
  }
  ```

- Error

  _400 - Bad Request_

- Body

  ```json
  {
    "statusCode": 400,
    "error": {
      "name": "BadRequest",
      "message": "Username and password are required"
    }
  }
  ```

  _401 - InvalidCredentials_

- Body

  ```json
  {
    "statusCode": 401,
    "error": {
      "name": "InvalidCredentials",
      "message": "Invalid email or password"
    }
  }
  ```

  _500 - Internal Server Error_

- Body

  ```json
  {
    "statusCode": 500,
    "error": {
      "name": String,
      "message": String
    }
  }
  ```

### Create a new order

```http
POST /api/orders
```

#### Description

- Post to create a new order

#### Request

- Headers

  ```json
  {
    "Content-Type": "application/json",
    "access_token": "string"
  }
  ```

- Body

  ```json
  {
    "productName": Text,
    "productQuantity": Number,
    "productPrice": Number,
  }
  ```

#### Response

- Success

  _201 - Created_

- Body

  ```json
  {
    "statusCode": 201,
    "message": "Order created successfully",
    "data": {
      "order": {
        "id": Integer,
        "userId": Integer,
        "productName": Text,
        "productQuantity": Integer,
        "productPrice": Integer,
        "updatedAt": Date,
        "createdAt": Date
      }

    }
  }
  ```

- Error

  _400 - Bad Request_

- Body

  ```json
  {
    "statusCode": 400,
    "error": {
      "name": "BadRequest",
      "messages": [
        String,
        ...
      ]
    }
  }
  ```

  _401 - Unauthenticated_

- Body

  ```json
  {
    "statusCode": 401,
    "error": {
      "name": "Unauthenticated",
      "message": "Invalid token"
    }
  }
  ```

  _500 - Internal Server Error_

- Body

  ```json
  {
    "statusCode": 500,
    "error": {
      "name": "InternalServerError",
      "message": "Internal Server Error"
    }
  }
  ```

### Read all orders

```http
GET /api/orders
```

#### Description

- Read all orders

#### Request

- Headers

  ```json
  {
    "access_token": "string"
  }
  ```

#### Response

- Success

  _200 - OK_

- Body

  ```json
  {
    "statusCode": 200,
    "message": "Orders fetched successfully",
    "data": {
      "orders": [
        {
          "id": Integer,
          "userId": Integer,
          "productName": Text,
          "productQuantity": Integer,
          "productPrice": Integer,
          "updatedAt": Date,
          "createdAt": Date
        },
        ...
      ]
    }
  }
  ```

- Error

  _401 - Unauthenticated_

- Body

  ```json
  {
    "statusCode": 401,
    "error": {
      "name": "Unauthenticated",
      "message": "Invalid token"
    }
  }
  ```

  _500 - Internal Server Error_

- Body

  ```json
  {
    "statusCode": 500,
    "error": {
      "name": "InternalServerError",
      "message": "Internal Server Error"
    }
  }
  ```

### Read order detail by order id

```http
GET /api/orders/:id
```

#### Description

- Read order detail by order id

#### Request

- Headers

  ```json
  {
    "access_token": "string"
  }
  ```

- Params

  ```json
  {
    "id": "integer"
  }
  ```

#### Response

- Success

  _200 - OK_

- Body

  ```json
  {
    "statusCode": 200,
    "message": "Order fetched successfully",
    "data": {
      "order":
        {
          "id": Integer,
          "userId": Integer,
          "productName": Text,
          "productQuantity": Integer,
          "productPrice": Integer,
          "updatedAt": Date,
          "createdAt": Date
        }
    }
  }
  ```

- Error

  _401 - Unauthenticated_

- Body

  ```json
  {
    "statusCode": 401,
    "error": {
      "name": "Unauthenticated",
      "message": "Invalid token"
    }
  }
  ```

  _500 - Internal Server Error_

- Body

  ```json
  {
    "statusCode": 500,
    "error": {
      "name": "InternalServerError",
      "message": "Internal Server Error"
    }
  }
  ```
