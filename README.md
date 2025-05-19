# Jobs Offer Website

This project is a simple job offers website where users can view available job positions and submit their applications through a form. The website supports multiple languages (Italian and English) and includes client-side form validation.

## Features

- **Job Listings**: Displays available job positions with descriptions, requirements, and deadlines.
- **Application Form**: Allows users to submit their applications with fields for name, email, job position, and resume upload.
- **Multi-language Support**: Includes Italian and English versions of the website.
- **Client-side Validation**: Ensures that all required fields are filled out correctly before submission.

## Project Structure

Jobs-Offer/ ├── .gitignore ├── index.html ├── package.json ├── public/ ├── src/ │ ├── jobs-en.html │ ├── script.js │ ├── styles.css

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js installed.

### Installation

1. Clone the repo
   ```
   git clone https://github.com/WilliamDepetris/Recupero-Project.git
   ```
2. Install NPM packages
   ```
   npm install
   ```

### Usage

1. Run the Development Server
   ```
   npm run dev
   ```
2. Open the Website
   Open your browser and navigate to the URL provided by the development server (e.g., http://localhost:3000).

## File Descriptions

- **`index.html`**: The main page of the website in Italian.
- **`src/jobs-en.html`**: The English version of the website.
- **`src/styles.css`**: The CSS file for styling the website.
- **`src/script.js`**: The JavaScript file for client-side form validation.
- **`package.json`**: Contains project metadata and scripts for development.

## Form Validation

The form includes the following validations:

- **Name**: Required.
- **Email**: Must be a valid email address.
- **Job Position**: Must select a position from the dropdown.
- **Resume**: Must upload a file in .pdf, .doc, or .docx format.

If any field is invalid, an error message will be displayed below the corresponding input field.

## Technologies Used

- **HTML5**: For structuring the content.
- **CSS3**: For styling the website.
- **JavaScript**: For client-side form validation.
- **Vite**: For local development and building the project.
