# Paraflow Legal Website - Complete Project

A professional, full-stack legal website built with React, Express.js, MongoDB, and Tailwind CSS. This project includes a complete backend API, responsive design, admin dashboard, and comprehensive content management system.

## 🎯 Project Overview

This is a complete legal firm website solution featuring:
- **Frontend**: React 18 with Vite, Tailwind CSS, responsive design
- **Backend**: Express.js REST API with MongoDB database
- **Admin Dashboard**: Complete content management system for team, blogs, consultations, and site content
- **Authentication**: JWT-based authentication with bcryptjs password hashing
- **File Uploads**: Multer integration for image uploads
- **Multi-language Support**: English and Arabic language support
- **Responsive Design**: Mobile, tablet, and desktop optimized

## ✨ Features

### Frontend Features
- **Responsive Navigation** - Mobile menu on small/tablet screens, desktop nav on large screens
- **Hero Section** - Eye-catching landing page with CTA buttons
- **Team Management** - Display team members with detailed profiles
- **Blog System** - Blog listing with search and filtering capabilities
- **Services Page** - Detailed practice areas and legal services
- **Contact Form** - Contact submission with backend integration
- **Consultation Booking** - Schedule consultation feature across all pages
- **Multi-language Support** - English and Arabic language switching
- **Consultation CTA** - "Schedule Your Consultation" button on all public pages
- **Admin Dashboard** - Complete admin interface for managing content

### Backend Features
- **6 Database Models**: User, TeamMember, Blog, Contact, Consultation, SiteContent
- **24 API Endpoints** across 7 route files
- **JWT Authentication** - Secure user authentication
- **Password Hashing** - bcryptjs for secure password storage
- **File Upload Handling** - Multer integration for image uploads
- **Error Handling** - Global error handling middleware
- **Database Seeding** - Initial data population script
- **CORS Support** - Cross-origin resource sharing enabled

### Admin Dashboard Features
- **Team Management** - Add, edit, delete team members with image uploads
- **Blog Management** - Create, edit, delete blog posts
- **Consultation Requests** - View and manage consultation bookings
- **Contact Messages** - View submitted contact form messages
- **Site Content Management** - Update site-wide content and settings
- **User Management** - Admin user authentication and management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas cloud)

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

The frontend runs on `http://localhost:5173`

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with MongoDB connection:
```env
MONGODB_URI=mongodb://localhost:27017/paraflow
JWT_SECRET=your_jwt_secret_key
PORT=4000
```

4. Seed initial data:
```bash
npm run seed
```

5. Start the backend server:
```bash
npm run dev
```

The backend runs on `http://localhost:4000/api`

### MongoDB Setup

For local MongoDB installation, see `INSTALL_MONGODB.md` in the root directory.

For cloud setup, use MongoDB Atlas:
1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env`

## 📁 Project Structure

```
root/
├── src/
│   ├── components/
│   │   ├── Header.jsx              # Navigation with responsive menu
│   │   ├── Footer.jsx              # Footer component
│   │   ├── AdminSidebar.jsx        # Admin dashboard sidebar
│   │   ├── AdminLayout.jsx         # Admin layout wrapper
│   │   ├── ConsultationCTA.jsx     # Consultation CTA button
│   │   ├── Team.jsx                # Team display component
│   │   └── Toasts.jsx              # Toast notifications
│   ├── pages/
│   │   ├── Home.jsx                # Home page
│   │   ├── AboutUs.jsx             # About Us page
│   │   ├── Services.jsx            # Services page
│   │   ├── Blog.jsx                # Blog listing page
│   │   ├── BlogDetail.jsx          # Individual blog post
│   │   ├── Contact.jsx             # Contact page
│   │   ├── ContactForm.jsx         # Contact form component
│   │   ├── MemberDetail.jsx        # Team member detail page
│   │   ├── BookConsultation.jsx    # Consultation booking page
│   │   ├── AdminTeam.jsx           # Admin team management
│   │   ├── AdminBlog.jsx           # Admin blog management
│   │   ├── AdminConsultations.jsx  # Admin consultations view
│   │   ├── AdminContacts.jsx       # Admin contacts view
│   │   └── AdminContent.jsx        # Admin content management
│   ├── context/
│   │   ├── TeamContext.jsx         # Team data context
│   │   ├── BlogContext.jsx         # Blog data context
│   │   ├── ContactContext.jsx      # Contact data context
│   │   └── SiteContentContext.jsx  # Site content context
│   ├── services/
│   │   └── api.js                  # Centralized API service layer
│   ├── hooks/
│   │   └── useTranslation.js       # Translation hook
│   ├── App.jsx                     # Main app with routing
│   └── main.jsx                    # Entry point
├── backend/
│   ├── src/
│   │   ├── index.js                # Express server entry
│   │   ├── models/
│   │   │   ├── User.js             # User model
│   │   │   ├── TeamMember.js       # Team member model
│   │   │   ├── Blog.js             # Blog model
│   │   │   ├── Contact.js          # Contact model
│   │   │   ├── Consultation.js     # Consultation model
│   │   │   └── SiteContent.js      # Site content model
│   │   ├── routes/
│   │   │   ├── auth.js             # Authentication routes
│   │   │   ├── team.js             # Team routes
│   │   │   ├── blogs.js            # Blog routes
│   │   │   ├── contacts.js         # Contact routes
│   │   │   ├── consultations.js    # Consultation routes
│   │   │   ├── content.js          # Content routes
│   │   │   └── uploads.js          # Upload routes
│   │   ├── middleware/
│   │   │   ├── auth.js             # JWT authentication middleware
│   │   │   └── errorHandler.js     # Global error handler
│   │   └── scripts/
│   │       └── seed.js             # Database seeding script
│   ├── .env                        # Environment variables
│   ├── package.json                # Backend dependencies
│   └── Dockerfile                  # Docker configuration
├── package.json                    # Frontend dependencies
├── tailwind.config.js              # Tailwind configuration
├── vite.config.js                  # Vite configuration
└── README.md                       # This file
```

## 🎨 Design System

### Colors
- **Primary**: Deep Navy Blue (#1B3A5F)
- **Primary Light**: #2D5280
- **Accent**: Golden Yellow (#D4A745)
- **Accent Light**: #E8C976
- **Text**: Dark Gray (#1A1D23)
- **Text Secondary**: Medium Gray (#4A5568)
- **Borders**: Light Gray (#E8ECF0)
- **Background**: Off-white (#F8F9FB)

### Typography
- **Headings**: Semibold weights (600-700)
- **Body**: Regular weight (400)
- **Responsive Sizing**: Scales from mobile to desktop

### Spacing
- Consistent spacing system using Tailwind utilities
- Section padding: 12-24 units (48-96px)
- Component gaps: 4-8 units (16-32px)

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user

### Team Members
- `GET /api/team` - Get all team members
- `GET /api/team/:id` - Get single team member
- `POST /api/team` - Create team member (admin)
- `PUT /api/team/:id` - Update team member (admin)
- `DELETE /api/team/:id` - Delete team member (admin)

### Blogs
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:id` - Get single blog
- `POST /api/blogs` - Create blog (admin)
- `PUT /api/blogs/:id` - Update blog (admin)
- `DELETE /api/blogs/:id` - Delete blog (admin)

### Contacts
- `GET /api/contacts` - Get all contacts (admin)
- `POST /api/contacts` - Submit contact form
- `DELETE /api/contacts/:id` - Delete contact (admin)

### Consultations
- `GET /api/consultations` - Get all consultations (admin)
- `POST /api/consultations` - Book consultation
- `PUT /api/consultations/:id` - Update consultation status (admin)
- `DELETE /api/consultations/:id` - Delete consultation (admin)

### Site Content
- `GET /api/content` - Get site content
- `PUT /api/content` - Update site content (admin)

### Uploads
- `POST /api/uploads` - Upload file

## 🔐 Authentication

The project uses JWT (JSON Web Tokens) for authentication:

1. User registers/logs in
2. Backend returns JWT token
3. Token stored in localStorage
4. Token sent in Authorization header for protected routes
5. Backend validates token before allowing access

Default admin credentials (after seeding):
- Email: `admin@paraflow.com`
- Password: `admin123`

## 📱 Responsive Design

- **Mobile** (< 640px): Full-width layout, hamburger menu, stacked components
- **Tablet** (640px - 1024px): Hamburger menu, optimized spacing
- **Desktop** (> 1024px): Full navigation bar, multi-column layouts
- **Large Desktop** (> 1280px): Maximum width container, expanded spacing

## 🌐 Multi-language Support

The project supports English and Arabic:
- Language switcher in header
- All content translatable
- RTL support ready for Arabic
- Language preference stored in localStorage

## 📦 Technologies Used

### Frontend
- React 18.2.0
- React Router DOM 6.20.0
- Tailwind CSS 3.4.0
- Vite 5.0.8
- Iconify Icons
- Axios for API calls

### Backend
- Express.js 4.18.2
- MongoDB with Mongoose
- JWT (jsonwebtoken)
- bcryptjs for password hashing
- Multer for file uploads
- CORS for cross-origin requests
- dotenv for environment variables

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build: `npm run build`
2. Deploy `dist` folder
3. Set environment variables for API URL

### Backend Deployment (Heroku/Railway/Render)
1. Set environment variables
2. Deploy backend folder
3. Ensure MongoDB connection string is set

## 📝 Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:4000/api
```

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/paraflow
JWT_SECRET=your_jwt_secret_key
PORT=4000
NODE_ENV=development
```

## 🐛 Troubleshooting

### Backend not connecting
- Ensure MongoDB is running
- Check MongoDB connection string in `.env`
- Verify port 4000 is not in use

### Frontend API errors
- Ensure backend is running on port 4000
- Check CORS settings in backend
- Verify API URLs in `src/services/api.js`

### Image upload issues
- Check `backend/uploads` folder exists
- Verify file permissions
- Check multer configuration in backend

## 📚 Documentation

Additional documentation files:
- `BACKEND_COMPLETE.md` - Backend implementation details
- `BACKEND_STATUS.md` - Current backend status
- `BACKEND_RUNNING.md` - Backend running guide
- `INSTALL_MONGODB.md` - MongoDB installation guide
- `FRONTEND_API_INTEGRATION.md` - Frontend-backend integration guide
- `ADMIN_TEAM_IMAGE_FIX.md` - Team image handling documentation
- `ADMIN_SIDEBAR_UPDATED.md` - Admin sidebar menu documentation
- `FRONTEND_UPDATED.md` - Frontend API integration summary

## ✅ Project Completion Checklist

- ✅ Complete Express.js backend with MongoDB
- ✅ 6 database models with full CRUD operations
- ✅ 24 API endpoints across 7 route files
- ✅ JWT authentication and authorization
- ✅ File upload handling with multer
- ✅ Frontend API integration with error handling
- ✅ Admin dashboard with content management
- ✅ Team member management with image uploads
- ✅ Blog management system
- ✅ Consultation booking system
- ✅ Contact form submission
- ✅ Multi-language support (EN/AR)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Consultation CTA on all public pages
- ✅ Admin sidebar with expandable menus
- ✅ Database seeding with initial data
- ✅ Global error handling
- ✅ CORS support
- ✅ Environment configuration

## 📄 License

© 2025 Sterling & Associates. All rights reserved.

## 👥 Support

For issues or questions, please refer to the documentation files or contact the development team.
