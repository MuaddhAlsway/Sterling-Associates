# Backend Setup Guide

## Prerequisites

Before starting, ensure you have:
- **Node.js** 14+ ([download](https://nodejs.org/))
- **MongoDB** 4.4+ (local or cloud)
- **npm** or **yarn** package manager

## Step 1: Install Dependencies

```bash
cd backend
npm install
```

This installs all required packages:
- `express` - Web framework
- `mongoose` - MongoDB ODM
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variable management
- `jsonwebtoken` - JWT authentication
- `bcryptjs` - Password hashing
- `multer` - File upload handling
- `nodemon` - Development auto-reload

## Step 2: Configure Environment Variables

1. Copy the example environment file:
```bash
cp .env.example .env
```

2. Edit `.env` and configure:

```env
# MongoDB Connection
MONGO_URI=mongodb://localhost:27017/paraflow

# Server Configuration
PORT=4000
HOST=0.0.0.0

# Security
JWT_SECRET=your-very-secure-secret-key-at-least-32-characters-long

# Admin Credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=password123

# Environment
NODE_ENV=development
```

### Environment Variable Details

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/paraflow` |
| `PORT` | Server port | `4000` |
| `HOST` | Server host | `0.0.0.0` |
| `JWT_SECRET` | Secret key for JWT tokens | Required for production |
| `ADMIN_EMAIL` | Admin login email | `admin@example.com` |
| `ADMIN_PASSWORD` | Admin login password | `password123` |
| `NODE_ENV` | Environment mode | `development` |

## Step 3: Set Up MongoDB

### Option A: Local MongoDB

1. Install MongoDB Community Edition:
   - [macOS](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/)
   - [Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)
   - [Linux](https://docs.mongodb.com/manual/administration/install-on-linux/)

2. Start MongoDB:
```bash
# macOS/Linux
mongod

# Windows
"C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe"
```

### Option B: MongoDB Atlas (Cloud)

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get your connection string
4. Update `MONGO_URI` in `.env`:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/paraflow?retryWrites=true&w=majority
```

## Step 4: Seed the Database

Populate the database with initial data:

```bash
npm run seed
```

This creates:
- 6 team members
- 3 sample blog posts
- 1 admin user
- Site content for English language

## Step 5: Start the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

You should see:
```
Server started on port 4000
Server address: { address: '0.0.0.0', family: 'IPv4', port: 4000 } pid: 12345
```

## Step 6: Verify the API

Test the API is working:

```bash
# Test basic endpoint
curl http://localhost:4000/api

# Should return:
# {"ok":true,"message":"Paraflow backend"}
```

## Step 7: Test Authentication

Login to get a token:

```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "password123"
  }'
```

Response:
```json
{
  "ok": true,
  "token": "eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiaWF0IjoxNjc0MDAwMDAwfQ=="
}
```

## Step 8: Connect Frontend

Update your frontend to use the backend API:

```javascript
// In your frontend .env or config
VITE_API_URL=http://localhost:4000/api
```

Then update API calls:
```javascript
const response = await fetch(`${import.meta.env.VITE_API_URL}/contacts`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(contactData)
});
```

## Troubleshooting

### MongoDB Connection Failed

**Error:** `MongoDB connection warning: connect ECONNREFUSED`

**Solution:**
1. Ensure MongoDB is running
2. Check `MONGO_URI` is correct
3. Verify MongoDB is accessible on the specified port

### Port Already in Use

**Error:** `Error: listen EADDRINUSE: address already in use :::4000`

**Solution:**
```bash
# Change PORT in .env
PORT=5000

# Or kill the process using port 4000
# macOS/Linux
lsof -ti:4000 | xargs kill -9

# Windows
netstat -ano | findstr :4000
taskkill /PID <PID> /F
```

### Seed Script Fails

**Error:** `Seeding failed: ...`

**Solution:**
1. Ensure MongoDB is running
2. Check database permissions
3. Clear existing data: `db.dropDatabase()` in MongoDB shell
4. Run seed again: `npm run seed`

### CORS Errors

**Error:** `Access to XMLHttpRequest blocked by CORS policy`

**Solution:**
The backend already has CORS enabled. Ensure:
1. Frontend is making requests to correct API URL
2. Frontend is running on a different port than backend
3. Check browser console for exact error

## Next Steps

1. **Review API Documentation**: See [API.md](./API.md)
2. **Explore Models**: Check `src/models/` for data structures
3. **Customize Routes**: Modify `src/routes/` as needed
4. **Add Authentication**: Implement JWT verification for admin routes
5. **Deploy**: Follow deployment guide for production

## Common Tasks

### Add a New API Endpoint

1. Create model in `src/models/`
2. Create route in `src/routes/`
3. Import route in `src/index.js`
4. Add to `app.use()` in `src/index.js`

### Upload Files

Files are automatically served from `/uploads` directory. Upload via:
```bash
curl -F "file=@image.jpg" http://localhost:4000/api/uploads
```

### Reset Database

```bash
# Clear all data
npm run seed

# Or manually in MongoDB shell
use paraflow
db.dropDatabase()
```

### View Database

Use MongoDB Compass or MongoDB Shell:
```bash
mongosh
use paraflow
db.teamMembers.find()
db.blogs.find()
db.contacts.find()
db.consultations.find()
```

## Production Deployment

For production, follow these steps:

1. **Set Strong Secrets**
   ```env
   JWT_SECRET=generate-a-strong-random-string-here
   ```

2. **Use MongoDB Atlas**
   - Create production cluster
   - Set up IP whitelist
   - Use connection string in `MONGO_URI`

3. **Set NODE_ENV**
   ```env
   NODE_ENV=production
   ```

4. **Use Process Manager**
   ```bash
   npm install -g pm2
   pm2 start src/index.js --name "paraflow-api"
   ```

5. **Configure Reverse Proxy**
   - Use Nginx or Apache
   - Set up SSL/TLS
   - Configure domain

6. **Enable Monitoring**
   - Set up error tracking (Sentry, etc.)
   - Configure logging
   - Monitor performance

## Support

For detailed API documentation, see [API.md](./API.md)

For issues, check:
1. MongoDB connection
2. Environment variables
3. Port availability
4. Node.js version compatibility
