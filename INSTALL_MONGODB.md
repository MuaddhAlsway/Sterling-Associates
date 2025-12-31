# 🗄️ Install MongoDB - Quick Guide

## Option 1: MongoDB Atlas (Cloud) - EASIEST ⭐

### Step 1: Create Account
1. Go to: https://www.mongodb.com/cloud/atlas
2. Click "Sign Up"
3. Create account with email

### Step 2: Create Cluster
1. Click "Create a Deployment"
2. Choose "Free" tier
3. Select region (closest to you)
4. Click "Create Deployment"

### Step 3: Get Connection String
1. Click "Connect"
2. Choose "Drivers"
3. Copy the connection string
4. It looks like: `mongodb+srv://user:password@cluster.mongodb.net/paraflow`

### Step 4: Update Backend
1. Open `backend/.env`
2. Replace this line:
```env
MONGO_URI=mongodb://localhost:27017/paraflow
```

With your connection string:
```env
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/paraflow
```

### Step 5: Restart Backend
```bash
cd backend
npm run dev
```

### Step 6: Seed Database
```bash
npm run seed
```

**Done!** Your backend is now connected to MongoDB Atlas ☁️

---

## Option 2: MongoDB Community (Local) - ADVANCED

### For Windows:

1. **Download MongoDB**
   - Go to: https://www.mongodb.com/try/download/community
   - Select "Windows"
   - Download MSI installer

2. **Install MongoDB**
   - Run the installer
   - Follow the installation wizard
   - Choose "Install MongoDB as a Service"

3. **Start MongoDB**
   ```bash
   mongod
   ```
   Or if installed as service, it starts automatically

4. **Verify Installation**
   ```bash
   mongo --version
   ```

5. **Update Backend .env**
   ```env
   MONGO_URI=mongodb://localhost:27017/paraflow
   ```

6. **Restart Backend**
   ```bash
   cd backend
   npm run dev
   ```

7. **Seed Database**
   ```bash
   npm run seed
   ```

---

### For macOS:

1. **Install with Homebrew**
   ```bash
   brew tap mongodb/brew
   brew install mongodb-community
   ```

2. **Start MongoDB**
   ```bash
   brew services start mongodb-community
   ```

3. **Verify**
   ```bash
   mongo --version
   ```

4. **Update Backend .env**
   ```env
   MONGO_URI=mongodb://localhost:27017/paraflow
   ```

5. **Restart Backend**
   ```bash
   cd backend
   npm run dev
   ```

6. **Seed Database**
   ```bash
   npm run seed
   ```

---

### For Linux (Ubuntu):

1. **Install MongoDB**
   ```bash
   sudo apt-get update
   sudo apt-get install -y mongodb
   ```

2. **Start MongoDB**
   ```bash
   sudo systemctl start mongodb
   ```

3. **Verify**
   ```bash
   mongo --version
   ```

4. **Update Backend .env**
   ```env
   MONGO_URI=mongodb://localhost:27017/paraflow
   ```

5. **Restart Backend**
   ```bash
   cd backend
   npm run dev
   ```

6. **Seed Database**
   ```bash
   npm run seed
   ```

---

## ✅ Verify MongoDB is Running

### Check if MongoDB is listening:

**Windows:**
```bash
netstat -ano | findstr ":27017"
```

**macOS/Linux:**
```bash
lsof -i :27017
```

You should see MongoDB listening on port 27017.

---

## 🧪 Test MongoDB Connection

### 1. Start Backend
```bash
cd backend
npm run dev
```

### 2. Test Endpoint
```bash
curl http://localhost:4000/api/team
```

### 3. Expected Response
```json
{
  "ok": true,
  "data": [
    {
      "id": "507f1f77bcf86cd799439011",
      "name": "Sarah Mitchell",
      "title": "Senior Attorney",
      ...
    }
  ]
}
```

If you see this, **MongoDB is working!** ✅

---

## 🌐 Recommended: Use MongoDB Atlas (Cloud)

**Why MongoDB Atlas is better for beginners:**
- ✅ No installation needed
- ✅ Free tier (512MB storage)
- ✅ Automatic backups
- ✅ Easy to scale
- ✅ Works from anywhere
- ✅ No local resources used

**Why Local MongoDB:**
- ✅ No internet required
- ✅ Faster for development
- ✅ Full control
- ✅ No cloud account needed

---

## 📊 Comparison

| Feature | MongoDB Atlas | Local MongoDB |
|---------|---------------|---------------|
| Setup Time | 5 minutes | 15 minutes |
| Installation | None | Required |
| Cost | Free tier | Free |
| Internet | Required | Not required |
| Backups | Automatic | Manual |
| Scalability | Easy | Complex |
| Best For | Beginners | Advanced |

---

## 🆘 Troubleshooting

### MongoDB won't start
- Check if port 27017 is in use
- Try different port in .env
- Restart computer

### Connection timeout
- Verify MongoDB is running
- Check MONGO_URI in .env
- Check firewall settings

### "Cannot connect to MongoDB"
- Ensure MongoDB service is running
- Check connection string
- Verify credentials (if using Atlas)

---

## 🎯 Quick Start (MongoDB Atlas)

```bash
# 1. Create MongoDB Atlas account
# Go to: https://www.mongodb.com/cloud/atlas

# 2. Create cluster and get connection string

# 3. Update .env
# MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/paraflow

# 4. Restart backend
cd backend
npm run dev

# 5. Seed database
npm run seed

# 6. Test
curl http://localhost:4000/api/team
```

**That's it!** 🎉

---

## 📚 Resources

- MongoDB Atlas: https://www.mongodb.com/cloud/atlas
- MongoDB Community: https://www.mongodb.com/try/download/community
- MongoDB Documentation: https://docs.mongodb.com/
- Mongoose Documentation: https://mongoosejs.com/

---

**Choose MongoDB Atlas for easiest setup!** ☁️
