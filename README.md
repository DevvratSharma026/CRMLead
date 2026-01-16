# Lead Management System (CRM Dashboard)

A full-stack CRM dashboard application built with React (Vite), Node.js/Express, and MongoDB. This system allows you to manage leads with features like search, filtering, sorting, pagination, and analytics.

## 🚀 Features

- **Authentication**: Basic login system with protected routes
- **Dashboard**: Analytics with total leads, converted leads, conversion rate, and leads by stage
- **Leads Management**: 
  - View all leads in a responsive table/card layout
  - Search by name or email
  - Filter by status (New, Contacted, Converted)
  - Filter by stage (Lead, Prospect, Customer)
  - Sort by name, email, status, stage
  - Pagination with First, Previous, Next, Last buttons
- **Lead Details**: View complete information about individual leads
- **Mobile Responsive**: Fully responsive design that works on all devices
- **500+ Dummy Leads**: Pre-seeded with realistic data using Faker.js

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (free tier)

## 🛠️ Technology Stack

### Frontend
- React 19
- Vite
- React Router DOM
- Axios
- Tailwind CSS 4

### Backend
- Node.js
- Express 5
- MongoDB (Mongoose)
- CORS
- dotenv
- Faker.js (for seeding data)

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
cd lead-mangement-system
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

**To get your MongoDB URI:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database user password

### 3. Seed the Database

```bash
cd backend
node seed/seedLeads.js
```

This will populate your database with 500 dummy leads.

### 4. Start the Backend Server

```bash
cd backend
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### 5. Frontend Setup

```bash
cd lead-dashboard
npm install
```

Create a `.env` file in the `lead-dashboard` directory:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

### 6. Start the Frontend

```bash
cd lead-dashboard
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🔐 Login Credentials

```
Username: admin
Password: admin123
```

## 📱 Usage

1. **Login**: Use the credentials above to access the dashboard
2. **Dashboard**: View analytics and quick action buttons
3. **Leads Page**: 
   - Search for leads by name or email
   - Filter by status or stage
   - Click on column headers to sort
   - Navigate through pages using pagination
   - Click "View Details" to see individual lead information
4. **Lead Details**: View complete lead information with quick action buttons

## 🌐 API Endpoints

### GET `/api/leads`
Fetch all leads with optional query parameters:
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 10)
- `search` - Search by name or email
- `status` - Filter by status (New, Contacted, Converted)
- `stage` - Filter by stage (Lead, Prospect, Customer)
- `sort` - Sort field (default: createdAt)
- `order` - Sort order: asc or desc (default: desc)

**Example:**
```
GET /api/leads?page=1&limit=10&search=john&status=New&sort=name&order=asc
```

### GET `/api/leads/:id`
Fetch a single lead by ID

### GET `/api/leads/stats`
Get analytics statistics:
- Total leads count
- Converted leads count
- Leads by stage breakdown

## 🚀 Deployment

### Backend Deployment (Railway, Render, or Heroku)

#### Using Render (Free Tier)

1. Push your code to GitHub
2. Go to [Render](https://render.com)
3. Click "New +" → "Web Service"
4. Connect your GitHub repository
5. Configure:
   - **Name**: `lead-crm-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Root Directory**: Leave empty or set to `backend`
6. Add Environment Variables:
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `PORT`: 10000 (Render default)
7. Click "Create Web Service"

#### Using Railway (Free Tier)

1. Go to [Railway](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add environment variables:
   - `MONGO_URI`: Your MongoDB Atlas connection string
   - `PORT`: Leave empty (Railway auto-assigns)
5. Set root directory to `backend`
6. Deploy

### Frontend Deployment (Vercel or Netlify)

#### Using Vercel (Free Tier)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `lead-dashboard`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Add Environment Variable:
   - `VITE_API_BASE_URL`: Your deployed backend URL + `/api`
   - Example: `https://your-backend.onrender.com/api`
7. Click "Deploy"

#### Using Netlify (Free Tier)

1. Go to [Netlify](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select your repository
4. Configure:
   - **Base directory**: `lead-dashboard`
   - **Build command**: `npm run build`
   - **Publish directory**: `lead-dashboard/dist`
5. Add Environment Variable:
   - `VITE_API_BASE_URL`: Your deployed backend URL + `/api`
6. Click "Deploy site"

### Update Backend CORS

After deploying the frontend, update the CORS origin in `backend/server.js`:

```javascript
app.use(cors({
    origin: "https://your-frontend-url.vercel.app", // Replace with your actual frontend URL
    credentials: true,
}));
```

Or allow multiple origins:

```javascript
app.use(cors({
    origin: ["http://localhost:5173", "https://your-frontend-url.vercel.app"],
    credentials: true,
}));
```

## 📁 Project Structure

```
lead-mangement-system/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   └── leadController.js     # Lead business logic
│   ├── models/
│   │   └── Lead.js               # Lead schema
│   ├── routes/
│   │   └── leads.routes.js       # API routes
│   ├── seed/
│   │   └── seedLeads.js          # Database seeding script
│   ├── .env                      # Environment variables
│   ├── .gitignore
│   ├── package.json
│   └── server.js                 # Express server entry point
│
└── lead-dashboard/
    ├── public/
    ├── src/
    │   ├── api/
    │   │   ├── axios.js          # Axios instance configuration
    │   │   └── leads.api.js      # API calls
    │   ├── components/
    │   │   ├── Layout.jsx        # Main layout with navbar
    │   │   └── ProtectedRoute.jsx # Route protection
    │   ├── pages/
    │   │   ├── Dashboard.jsx     # Analytics dashboard
    │   │   ├── LeadDetails.jsx   # Individual lead details
    │   │   ├── Leads.jsx         # Leads list with filters
    │   │   └── Login.jsx         # Login page
    │   ├── App.jsx               # Router configuration
    │   ├── index.css             # Tailwind CSS
    │   └── main.jsx              # React entry point
    ├── .env                      # Environment variables
    ├── .gitignore
    ├── index.html
    ├── package.json
    ├── tailwind.config.js
    └── vite.config.js

```

## 🧪 Testing the Application

1. **Health Check**: 
   ```
   GET http://localhost:5000/api/health
   ```

2. **Test API with Postman/Thunder Client**:
   - Import the endpoints above
   - Test different query combinations

3. **Frontend Testing**:
   - Login with demo credentials
   - Navigate through all pages
   - Test filters, search, and pagination
   - View individual lead details
   - Test on mobile viewport

## 🐛 Troubleshooting

### Backend Issues

**MongoDB Connection Error:**
- Verify your `MONGO_URI` is correct
- Check if your IP address is whitelisted in MongoDB Atlas
- Ensure database user has proper permissions

**Port Already in Use:**
```bash
# Kill process on port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Kill process on port 5000 (Mac/Linux)
lsof -ti:5000 | xargs kill -9
```

### Frontend Issues

**API Connection Error:**
- Verify backend is running on port 5000
- Check `VITE_API_BASE_URL` in `.env`
- Ensure CORS is properly configured

**Build Errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 Notes

- This uses basic authentication for demonstration purposes. In production, implement proper JWT-based authentication.
- The seeding script will delete all existing leads before adding new ones.
- MongoDB Atlas free tier has a 512MB storage limit.
- Free tier hosting services may have cold starts (initial load might be slow).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Built as a demonstration project for a Lead Management System.

## 🔗 Useful Links

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)