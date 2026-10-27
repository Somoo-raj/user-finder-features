# User Finder

A simple web app that looks up a user's name and email by ID.

## How it works

1. Enter a positive whole-number user ID.
2. Select **Submit** or press **Enter**.
3. The app checks the ID and requests the user from JSONPlaceholder.
4. The user's name and email appear on success. An error message appears if the ID is invalid or the request fails.

The submit button shows a loading state while the request is in progress and prevents duplicate requests.

## Run

Open `index.html` in a browser. An internet connection is needed to retrieve user data.