# Playwright API Testing

This project contains API test automation using **Playwright** and **TypeScript**.

## Test Cases

| # | Test Case Title      | Expected Result                                                                                                                         |
| - | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1 | GET Post by ID       | The API returns status code **200** and the response contains the expected `id`, `title`, `body`, and `userId`.                         |
| 2 | GET All Posts        | The API returns status code **200** and the response is a non-empty array containing all posts.                                         |
| 3 | POST Create New Post | The API returns status code **201** and the response contains the expected `title`, `body`, and `userId` from the request data.         |
| 4 | PUT Update Post      | The API returns status code **200** and the response contains the expected `id`, `title`, `body`, and `userId` after updating the post. |
| 5 | DELETE Last Post     | The API returns status code **200** or **204**, confirming that the last post was deleted successfully.                                 |

## Test Coverage

* GET request by ID
* GET all posts
* POST request
* PUT request
* DELETE request
* HTTP status code validation
* Response property validation
* Array validation
* Non-empty response validation

## Expected Result

All API test cases should pass successfully and verify the expected API behavior and response data.
