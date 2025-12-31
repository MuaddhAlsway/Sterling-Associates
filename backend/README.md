# Backend (Paraflow)

Complete backend API for the Paraflow law firm website.

## Quick Start

### Prerequisites
- Node.js 14+
- MongoDB (local or cloud)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from example:
```bash
cp .env.example .env
```

3. Configure environment variables in `.env`:
```
MONGO_URI=mongodb://localhost:27017/paraflow
PORT=4000
JWT_SECRET=your-secret-key-here
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=password123
```

4. Seed the database with initial data:
```bash
npm run seed
```

5. Start the development server:
```bash
npm run dev
```

The API will be available at `http://localhost:4000/api`

## API Endpoints

See [API.md](./API.md) for complete API documentation.

### Main Routes
- **Authentication**: `POST /api/auth/login`
- **Team Members**: `GET/POST/PUT/DELETE /api/team`
- **Blog Posts**: `GET/POST/PUT/DELETE /api/blogs`
- **Contacts**: `GET/POST/PUT/DELETE /api/contacts`
- **Consultations**: `GET/POST/PUT/DELETE /api/consultations`
- **Site Content**: `GET/POST /api/content`
- **File Uploads**: `POST /api/uploads`

## Database Models

- **User** - Admin users with authentication
- **TeamMember** - Law firm team members
- **Blog** - Blog posts and articles
- **Contact** - Contact form submissions
- **Consultation** - Consultation booking requests
- **SiteContent** - Multilingual site content

## Development

### Available Scripts

```bash
npm run dev      # Start dev server with nodemon
npm start        # Start production server
npm run seed     # Seed database with initial data
```

### Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── middleware/
│   │   ├── auth.js            # JWT authentication
│   │   └── errorHandler.js    # Global error handling
│   ├── models/
│   │   ├── User.js
│   │   ├── TeamMember.js
│   │   ├── Blog.js
│   │   ├── Contact.js
│   │   ├── Consultation.js
│   │   └── SiteContent.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── team.js
│   │   ├── blogs.js
│   │   ├── contacts.js
│   │   ├── consultations.js
│   │   ├── content.js
│   │   └── uploads.js
│   └── index.js               # Main server file
├── scripts/
│   └── seed.js                # Database seeding script
├── uploads/                   # Uploaded files directory
├── package.json
├── .env.example
├── API.md                     # API documentation
└── README.md
```

## Features

### Authentication
- Admin login with email/password
- JWT token-based authentication
- Secure password hashing with bcryptjs

### Team Management
- Create, read, update, delete team members
- Support for member images, titles, specialties
- Ordering/sorting capabilities

### Blog Management
- Full CRUD operations for blog posts
- Support for categories, authors, reading time
- HTML content support
- Image uploads

### Contact Management
- Public contact form submissions
- Admin interface to view and respond to contacts
- Status tracking (new, read, responded)

### Consultation Booking
- Public consultation request form
- Date/time preference tracking
- Status management (pending, confirmed, completed, cancelled)
- Admin notes for follow-up

### File Uploads
- Secure file upload handling with multer
- Automatic filename generation
- Served via `/uploads` endpoint

### Site Content
- Multilingual content management (English, Arabic)
- Dynamic content updates
- Static/dynamic content toggle

## Notes

- If MongoDB is not running, the server will log a warning and continue in degraded mode
- Some endpoints that require DB will return errors if MongoDB is unavailable
- Running a local MongoDB instance or setting `MONGO_URI` is recommended
- The project uses `multer@1.x` which has known vulnerabilities; consider upgrading to `multer@2.x`

## Deployment

For production deployment:

1. Set strong `JWT_SECRET` in environment variables
2. Use a managed MongoDB service (MongoDB Atlas, etc.)
3. Set `NODE_ENV=production`
4. Use a process manager like PM2
5. Configure CORS appropriately for your frontend domain
6. Set up proper logging and monitoring

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod`
- Check `MONGO_URI` is correct
- Verify network connectivity to MongoDB server

### Port Already in Use
- Change `PORT` in `.env` file
- Or kill the process using the port

### Seed Script Fails
- Ensure MongoDB is running
- Check database permissions
- Clear existing data if needed

## Support

For issues or questions, refer to the API documentation in [API.md](./API.md)
