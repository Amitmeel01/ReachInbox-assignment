# ReachInbox Assignment

## Project Overview

ReachInbox is a web application built with React, Vite, and TypeScript that simulates an inbox management system. The application integrates with a provided API to fetch, manage, and interact with email threads. It features a login page, an inbox (onebox) screen, a custom text editor, keyboard shortcuts, and support for both light and dark modes. The design is based on a Figma file, and the API is provided through Postman documentation.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Amitmeel01/ReachInbox-assignment.git
Navigate to the Project Directory

bash
Copy code
cd ReachInbox-assignment
Install Dependencies

bash
Copy code
npm install
Start the Development Server

bash
Copy code
npm run dev
The project will start on localhost:5173. You can view it in your browser.

Features
Login Page

Implements the design provided in the Figma file.
Users are redirected to the onebox screen upon successful login.
Onebox Screen

Fetches and displays data from the provided API endpoints.
API Integration:
GET /onebox/list - Fetch list of threads
GET /onebox/:thread_id - Fetch details of a specific thread
DELETE /onebox/:thread_id - Delete a specific thread
Keyboard Shortcuts

"D" - Deletes the selected thread.
"R" - Opens the reply box.
Custom Text Editor

Includes custom buttons:
"SAVE" - Saves the current draft.
"Variables" - Adds predefined variables to the email body.
Reply Functionality

Allows sending replies to threads.
API Integration:
POST /reply/:thread_id - Send a reply with the following payload:
json
Copy code
{
  "from": "email",
  "to": "email",
  "subject": "",
  "body": "<html></html>"
}
Light and Dark Mode

Supports switching between light and dark themes.

Design File
The design for the application is available at:
Design File - Figma

API Documentation
The API documentation is available at:
API File - Postman

Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

