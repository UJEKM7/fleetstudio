# fleetstudio

# Git Diff API

This API provides endpoints to retrieve commit details and commit diffs from a GitHub repository.

## API Routes

### Get Commit by ID

Retrieve details of a specific commit by its ID.

- **Endpoint:** `GET /repos/:owner/:repository/commits/:oid`
- **Parameters:**
  - `:owner` (string): The GitHub repository owner.
  - `:repository` (string): The GitHub repository name.
  - `:oid` (string): The commit ID.
- **Request Body:**
  - `github_token` (string, required): GitHub API token for authentication.
- **Response:**
  - Status: 200 OK
  - Body:
          {
          "data": {
          // Commit details
            }
          }

### Get Diff of a Commit (from Previous)

Retrieve the differences between a specific commit and its previous one.

- **Endpoint:** `GET /repos/:owner/:repository/commits/:base/:head/diff`
- **Parameters:**
  - `:owner` (string): The GitHub repository owner.
  - `:repository` (string): The GitHub repository name.
  - `:base` (string): The base commit ID.
  - `:head` (string): The head commit ID.
- **Request Body:**
  - `github_token` (string, required): GitHub API token for authentication.
- **Response:**
  - Status: 200 OK
  - Body:
    [  --- /dev/null
      +++ b/controllers/gitController.js
      @@ -0,0 +1,85 @@
      +const axios = require('axios');
      +// ... rest of the diff content
    ]

# Notes
Replace placeholders (:owner, :repository, :oid, :base, :head, your-github-api-token) with actual values when making requests.

The GitHub API token is included in the request body for authentication.

Error handling is implemented to handle missing parameters, empty GitHub API token, and API errors.

Feel free to adapt and customize this README.md file based on your project's needs.
