/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      groceryList {
        id
        name
        description
        products {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      name
      checked
      unit
      quantity
      category
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      groceryList {
        id
        name
        description
        products {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      name
      checked
      unit
      quantity
      category
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      groceryList {
        id
        name
        description
        products {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      name
      checked
      unit
      quantity
      category
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createGroceryList = /* GraphQL */ `
  mutation CreateGroceryList(
    $input: CreateGroceryListInput!
    $condition: ModelGroceryListConditionInput
  ) {
    createGroceryList(input: $input, condition: $condition) {
      id
      name
      description
      products {
        items {
          id
          name
          checked
          unit
          quantity
          category
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          userID
          groceryListID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateGroceryList = /* GraphQL */ `
  mutation UpdateGroceryList(
    $input: UpdateGroceryListInput!
    $condition: ModelGroceryListConditionInput
  ) {
    updateGroceryList(input: $input, condition: $condition) {
      id
      name
      description
      products {
        items {
          id
          name
          checked
          unit
          quantity
          category
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          userID
          groceryListID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteGroceryList = /* GraphQL */ `
  mutation DeleteGroceryList(
    $input: DeleteGroceryListInput!
    $condition: ModelGroceryListConditionInput
  ) {
    deleteGroceryList(input: $input, condition: $condition) {
      id
      name
      description
      products {
        items {
          id
          name
          checked
          unit
          quantity
          category
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      users {
        items {
          id
          userID
          groceryListID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      sub
      groceryLists {
        items {
          id
          userID
          groceryListID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      sub
      groceryLists {
        items {
          id
          userID
          groceryListID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      sub
      groceryLists {
        items {
          id
          userID
          groceryListID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createUserGroceryListJoin = /* GraphQL */ `
  mutation CreateUserGroceryListJoin(
    $input: CreateUserGroceryListJoinInput!
    $condition: ModelUserGroceryListJoinConditionInput
  ) {
    createUserGroceryListJoin(input: $input, condition: $condition) {
      id
      userID
      groceryListID
      user {
        id
        sub
        groceryLists {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      groceryList {
        id
        name
        description
        products {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUserGroceryListJoin = /* GraphQL */ `
  mutation UpdateUserGroceryListJoin(
    $input: UpdateUserGroceryListJoinInput!
    $condition: ModelUserGroceryListJoinConditionInput
  ) {
    updateUserGroceryListJoin(input: $input, condition: $condition) {
      id
      userID
      groceryListID
      user {
        id
        sub
        groceryLists {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      groceryList {
        id
        name
        description
        products {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserGroceryListJoin = /* GraphQL */ `
  mutation DeleteUserGroceryListJoin(
    $input: DeleteUserGroceryListJoinInput!
    $condition: ModelUserGroceryListJoinConditionInput
  ) {
    deleteUserGroceryListJoin(input: $input, condition: $condition) {
      id
      userID
      groceryListID
      user {
        id
        sub
        groceryLists {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      groceryList {
        id
        name
        description
        products {
          nextToken
          startedAt
        }
        users {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
