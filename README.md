# Generate Images With DALL·E 2 and the OpenAI API

This web application allows you to generate images using DALL·E 2, powered by the OpenAI API. DALL·E 2 is a powerful image generation model that can create unique and creative images based on prompts.

## Features

- **Image Generation**: Utilize the DALL·E 2 model to generate images based on your prompts.
- **Customization**: Fine-tune the generated images by adjusting parameters and prompts.
- **Express Backend**: Backend powered by Express for handling API requests.
- **Vite React Frontend**: Frontend built with Vite and React for a modern and efficient development experience.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- OpenAI API key. Make sure to set your API key in the `.env` file.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/k-e-ian/ImageGenerator.git
   cd yourproject
```
### Install backend dependencies:

bash
Copy code
```
cd backend
npm install
```

### Install frontend dependencies:

bash
Copy code
```
cd frontend
npm install
```

### Configuration
Set up your OpenAI API key:

Create a .env file in the backend directory and add your OpenAI API key:

env
Copy code
```
OPENAI_API_KEY=your-api-key-here
```
Replace your-api-key-here with your actual OpenAI API key.

### Usage
Start the backend server:

bash
Copy code
```
cd backend
npm run dev
```
The server will be running at http://localhost:3000.

### Start the frontend development server:

bash
Copy code
```
cd frontend
npm run dev
```
Visit http://127.0.0.1:5173/ in your browser to access the web application.
