# Paraflow Backend API Documentation

## Base URL
```
http://localhost:4000/api
```

## Authentication
Most admin endpoints require JWT authentication. Include the token in the Authorization header:
```
Authorization: Bearer <token>
```

---

## Endpoints

### Authentication

#### POST `/auth/login`
Login with admin credentials.

**Request:**
```json
{
  "email": "admin@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "ok": true,
  "token": "base64_encoded_token"
}
```

---

### Team Members

#### GET `/team`
Get all team members.

**Response:**
```json
{
  "ok": true,
  "data": [
    {
      "id": "507f1f77bcf86cd799439011",
      "name": "Sarah Mitchell",
      "title": "Senior Attorney",
      "specialty": "Corporate Law",
      "career": "15+ years in corporate law",
      "bio": "Sarah specializes in corporate law...",
      "imageUrl": "/uploads/image.jpg",
      "order": 1,
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  ]
}
```

#### GET `/team/:id`
Get a single team member.

#### POST `/team`
Create a new team member.

**Request:**
```json
{
  "name": "John Doe",
  "title": "Attorney",
  "specialty": "Corporate Law",
  "career": "10+ years",
  "bio": "Bio text",
  "imageUrl": "/uploads/image.jpg",
  "order": 1
}
```

#### PUT `/team/:id`
Update a team member.

#### DELETE `/team/:id`
Delete a team member.

---

### Blogs

#### GET `/blogs`
Get all blog posts (sorted by date, newest first).

**Response:**
```json
{
  "ok": true,
  "data": [
    {
      "id": "507f1f77bcf86cd799439011",
      "title": "Blog Title",
      "excerpt": "Short excerpt",
      "content": "<p>Full HTML content</p>",
      "category": "Corporate Law",
      "author": "Sarah Mitchell",
      "authorTitle": "Senior Attorney",
      "readingTime": 8,
      "image": "/uploads/blog-image.jpg",
      "date": "2024-01-15",
      "createdAt": "2024-01-15T00:00:00Z",
      "updatedAt": "2024-01-15T00:00:00Z"
    }
  ]
}
```

#### GET `/blogs/:id`
Get a single blog post.

#### POST `/blogs`
Create a new blog post.

**Request:**
```json
{
  "title": "Blog Title",
  "excerpt": "Short excerpt",
  "content": "<p>Full HTML content</p>",
  "category": "Corporate Law",
  "author": "Sarah Mitchell",
  "authorTitle": "Senior Attorney",
  "readingTime": 8,
  "image": "/uploads/blog-image.jpg"
}
```

#### PUT `/blogs/:id`
Update a blog post.

#### DELETE `/blogs/:id`
Delete a blog post.

---

### Contacts

#### GET `/contacts`
Get all contact submissions (admin only).

**Response:**
```json
{
  "ok": true,
  "data": [
    {
      "id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "(555) 123-4567",
      "service": "Corporate Law",
      "message": "I need legal assistance...",
      "agree": true,
      "status": "new",
      "response": "",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

#### GET `/contacts/:id`
Get a single contact submission.

#### POST `/contacts`
Submit a contact form (public endpoint).

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "(555) 123-4567",
  "service": "Corporate Law",
  "message": "I need legal assistance...",
  "agree": true
}
```

**Response:**
```json
{
  "ok": true,
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "(555) 123-4567",
    "service": "Corporate Law",
    "message": "I need legal assistance...",
    "agree": true,
    "status": "new",
    "response": "",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

#### PUT `/contacts/:id`
Update a contact (mark as read, add response, etc.).

**Request:**
```json
{
  "status": "responded",
  "response": "Thank you for your inquiry..."
}
```

#### DELETE `/contacts/:id`
Delete a contact submission.

---

### Consultations

#### GET `/consultations`
Get all consultation bookings (admin only).

**Response:**
```json
{
  "ok": true,
  "data": [
    {
      "id": "507f1f77bcf86cd799439011",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john@example.com",
      "phone": "(555) 123-4567",
      "practiceArea": "Corporate Law",
      "preferredDate": "2024-02-15",
      "preferredTime": "10am",
      "message": "I need to discuss...",
      "consent": true,
      "status": "pending",
      "notes": "",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

#### GET `/consultations/:id`
Get a single consultation booking.

#### POST `/consultations`
Create a new consultation booking (public endpoint).

**Request:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "(555) 123-4567",
  "practiceArea": "Corporate Law",
  "preferredDate": "2024-02-15",
  "preferredTime": "10am",
  "message": "I need to discuss...",
  "consent": true
}
```

**Response:**
```json
{
  "ok": true,
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "phone": "(555) 123-4567",
    "practiceArea": "Corporate Law",
    "preferredDate": "2024-02-15",
    "preferredTime": "10am",
    "message": "I need to discuss...",
    "consent": true,
    "status": "pending",
    "notes": "",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

#### PUT `/consultations/:id`
Update a consultation (confirm, complete, cancel, add notes).

**Request:**
```json
{
  "status": "confirmed",
  "notes": "Confirmed for 2024-02-15 at 10:00 AM"
}
```

#### DELETE `/consultations/:id`
Delete a consultation booking.

---

### Site Content

#### GET `/content?lang=en`
Get site content for a specific language.

**Response:**
```json
{
  "ok": true,
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "language": "en",
    "content": {
      "nav": { "home": "Home", "about": "About Us" },
      "hero": { "title": "Welcome", "description": "..." }
    },
    "useStatic": false,
    "createdAt": "2024-01-01T00:00:00Z",
    "updatedAt": "2024-01-01T00:00:00Z"
  }
}
```

#### POST `/content`
Create or update site content.

**Request:**
```json
{
  "language": "en",
  "content": {
    "nav": { "home": "Home", "about": "About Us" },
    "hero": { "title": "Welcome", "description": "..." }
  },
  "useStatic": false
}
```

---

### File Uploads

#### POST `/uploads`
Upload a file.

**Request:** (multipart/form-data)
- `file`: The file to upload

**Response:**
```json
{
  "ok": true,
  "data": {
    "path": "/uploads/1234567890-filename.jpg",
    "filename": "1234567890-filename.jpg"
  }
}
```

---

## Error Responses

All error responses follow this format:

```json
{
  "ok": false,
  "message": "Error description"
}
```

### Common Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `401` - Unauthorized (missing/invalid token)
- `404` - Not Found
- `500` - Server Error

---

## Environment Variables

```
MONGO_URI=mongodb://localhost:27017/paraflow
PORT=4000
JWT_SECRET=your-secret-key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=password123
```

---

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

3. Seed the database:
```bash
npm run seed
```

4. Start the server:
```bash
npm run dev
```

The API will be available at `http://localhost:4000/api`
