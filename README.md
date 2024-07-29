# Complete Solution for Node.js Number Processing API with Postman Testing

This documentation outlines the process for setting up a Node.js API that processes numbers, stores the results in different files based on specific conditions, and stops accepting new numbers once all files have at least one number. Additionally, it includes steps for testing the API using Postman.

## Project Overview

### Objective
Build an API that multiplies a number by 7, stores the result in a file based on its value, and stops accepting new numbers once all files contain a number.

### Endpoints
- **POST /input**: Accepts a number, processes it, and stores the result in a file.
- **GET /list**: Lists the contents of all files.

## API Functionality

### Number Processing

1. **Accepts a number between 1 and 25**.
2. **Multiplies the number by 7**.
3. **Stores the result in one of four files based on its value**:
   - **File A**: Result > 140
   - **File B**: 100 < Result <= 140
   - **File C**: 60 < Result <= 100
   - **File D**: Result <= 60

### Completion Condition

- Once a number is stored in all four files, the API stops accepting new numbers.

### List Contents

- Retrieves and displays the contents of all four files.

## Testing with Postman

### Setup

- **Import the provided Postman collection** to automate testing.

### Test Cases

1. **POST /input with a valid number between 1 and 25**.
2. **POST /input with an invalid number (less than 1 or greater than 25)**.
3. **GET /list to display the contents of all files**.
4. **POST /input after all files contain a number to verify the process completion**.


