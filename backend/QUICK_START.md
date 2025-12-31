# Quick Start Guide

Get the backend running in 5 minutes.

## 1. Install & Configure

```bash
cd backend
npm install
cp .env.example .env
```

## 2. Start MongoDB

```bash
# macOS/Linux
mongod

# Windows
"C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe"

# Or use MongoDB Atlas (cloud)
# Update MONGO_URI in .env with your connection string
```

## 3. Seed Database

```bash
npm run seed
```

## 4. Start Server

```bash
npm run dev
```

Server runs at: `http://localhost:4000/api`

## 5. Test It

```bash
# Test API
curl http://localhost:4000/api

# Login
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password123"}'

# Get team members
curl http://localhost:4000/api/team

# Submit contact form
curl -X POST http://localhost:4000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{
    "name":"John Doe",
    "email":"john@example.com",
    "message":"Hello"
  }'
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/login` | Admin login |
| GET | `/team` | List team members |
| POST | `/team` | Create team member |
| GET | `/blogs` | List blog posts |
| POST | `/blogs` | Create blog post |
| GET | `/contacts` | List contacts |
| POST | `/contacts` | Submit contact form |
| GET | `/consultations` | List consultations |
| POST | `/consultations` | Book consultation |
| POST | `/uploads` | Upload file |

## Default Credentials

```
Email: admin@example.com
Password: password123
```

## Environment Variables

```env
MONGO_URI=mongodb://localhost:27017/paraflow
PORT=4000
JWT_SECRET=your-secret-key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=password123
```

## Useful Commands

```bash
npm run dev          # Start dev server
npm start            # Start production server
npm run seed         # Seed database
```

## Troubleshooting

**MongoDB not connecting?**
- Ensure MongoDB is running
- Check MONGO_URI in .env

**Port 4000 in use?**
- Change PORT in .env
- Or kill process: `lsof -ti:4000 | xargs kill -9`

**Need more help?**
- See [SETUP.md](./SETUP.md) for detailed setup
- See [API.md](./API.md) for API documentation

## Next Steps

1. Connect frontend to backend
2. Test all endpoints
3. Customize models and routes
4. Deploy to production

Happy coding! 🚀
