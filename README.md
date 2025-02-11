# SuperMindHackathon

## Live Website
   - https://supermindhackathon.onrender.com

## Langflow-App

Langflow-App is a full-stack application consisting of a backend built using Express.js and a frontend built using React.js. The application leverages the Langflow API to generate responses for user inputs in a chatbot interface.

## Youtube Video
* https://youtu.be/a08F6PArDOo
## Project Images and Video Link


![Home Page](https://res.cloudinary.com/deepcloud1/image/upload/v1736505791/hrpgfvchhrnhjdbcae7v.png)

![LangFlow](https://res.cloudinary.com/deepcloud1/image/upload/v1736506684/w294fzjlmcrovrwtisff.png)

![Chat Bot](https://res.cloudinary.com/deepcloud1/image/upload/v1736505933/y4hyvdxatnya79wryy1s.png)

![Contact Page](https://res.cloudinary.com/deepcloud1/image/upload/v1736505967/v7oxitc8s3s6xf9ruuio.png)

## Features

- **Chatbot Interface**: Users can interact with a chatbot that uses Langflow's powerful language model to generate responses.
- **Chat History**: The app saves chat history locally and allows users to view and clear their chat history.
- **GitHub Repository Link**: A button in the navbar provides easy access to the project's GitHub repository.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Express.js
- **API**: Langflow API
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **State Management**: React hooks (`useState`, `useEffect`)

## Installation

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Backend Setup (Express.js)

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/langflow-app.git
   cd langflow-app
   ```

2. Install dependencies for the backend:

   ```cd backend
   npm install <dependency>
   ```

3. Configure your `.env` file with the necessary environment variables:

   ASTRA_APPLICATION_TOKEN = your_astra_application_token_here

4. Start the backend server:

   ```
   node backend.js
   ```

   The server will run on `http://localhost:3000`.

### Frontend Setup (React.js)

1. Install dependencies for the frontend:

2. Install and configure tailwinf CSS (if required)

3. Start the frontend development server:

   ```
   npm run dev
   ```

   The React app will run on `http://localhost:5173` (or another available port).

## API Interaction

- The frontend interacts with the backend at `http://localhost:3000/run-flow`.
- When a user submits a query in the chat, the backend sends the input to the Langflow API, retrieves a response, and returns it to the frontend.

## Local Storage

- The app stores chat history in `localStorage`, allowing users to retain their conversation history between sessions.

## Components

1. **Chat**: The main chat interface where users can input their queries and see bot responses. Includes a loading skeleton animation (ChatSkeleton) for bot's response while waiting. Displays chat history and allows users to click on suggestions.

2. **PostDetails**: Displays the post details (username, content, location, and statistics like likes, comments, shares, views). Supports the use of an icon for the location and rendering hashtags in a styled format.

3. **Navbar**: A responsive navbar with links to Home, Chat, Contact Us, and a button to visit the project's GitHub repository. Includes a GitHub logo for easy access.

4. **ChatSkeleton**: A loading skeleton used to show placeholders while awaiting bot responses.

## Deployment

To deploy this app:

1. Deploy the backend (Express.js) to a platform like Heroku, AWS, or any other preferred hosting service.
2. Build the React frontend using `npm run build` and deploy it to a static site hosting service such as Vercel, Netlify, or GitHub Pages.

