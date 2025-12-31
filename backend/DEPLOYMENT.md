# Backend Deployment Guide

Complete guide for deploying the Paraflow backend to production.

## Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] MongoDB Atlas cluster created
- [ ] JWT_SECRET set to strong random value
- [ ] CORS configured for frontend domain
- [ ] Error logging configured
- [ ] Database backups enabled
- [ ] SSL/TLS certificates ready

## Deployment Options

### Option 1: Heroku (Easiest)

1. **Install Heroku CLI:**
```bash
npm install -g heroku
heroku login
```

2. **Create Heroku app:**
```bash
heroku create paraflow-api
```

3. **Set environment variables:**
```bash
heroku config:set MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/paraflow
heroku config:set JWT_SECRET=your-very-secure-secret-key
heroku config:set NODE_ENV=production
```

4. **Deploy:**
```bash
git push heroku main
```

5. **View logs:**
```bash
heroku logs --tail
```

### Option 2: AWS EC2

1. **Launch EC2 instance:**
   - Ubuntu 20.04 LTS
   - t2.micro (free tier eligible)
   - Security group: Allow ports 22, 80, 443, 4000

2. **SSH into instance:**
```bash
ssh -i your-key.pem ubuntu@your-instance-ip
```

3. **Install Node.js:**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. **Install MongoDB:**
```bash
# Or use MongoDB Atlas instead
```

5. **Clone repository:**
```bash
git clone your-repo-url
cd backend
npm install
```

6. **Configure environment:**
```bash
cp .env.example .env
nano .env  # Edit with your values
```

7. **Install PM2:**
```bash
sudo npm install -g pm2
pm2 start src/index.js --name "paraflow-api"
pm2 startup
pm2 save
```

8. **Set up Nginx reverse proxy:**
```bash
sudo apt-get install nginx
sudo nano /etc/nginx/sites-available/default
```

Add:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

9. **Enable SSL with Let's Encrypt:**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### Option 3: DigitalOcean App Platform

1. **Connect GitHub repository**
2. **Create new app**
3. **Configure build command:**
```
npm install
```

4. **Configure run command:**
```
npm start
```

5. **Set environment variables** in App Platform dashboard
6. **Deploy**

### Option 4: Docker + Any Cloud Provider

1. **Create Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 4000

CMD ["npm", "start"]
```

2. **Build image:**
```bash
docker build -t paraflow-api .
```

3. **Push to Docker Hub:**
```bash
docker tag paraflow-api your-username/paraflow-api
docker push your-username/paraflow-api
```

4. **Deploy to cloud:**
   - AWS ECS
   - Google Cloud Run
   - Azure Container Instances
   - DigitalOcean App Platform

## Production Configuration

### Environment Variables

```env
# Database
MONGO_URI=mongodb+srv://user:password@cluster.mongodb.net/paraflow?retryWrites=true&w=majority

# Server
PORT=4000
NODE_ENV=production

# Security
JWT_SECRET=generate-a-strong-random-string-here-min-32-chars

# Admin
ADMIN_EMAIL=admin@yourdomain.com
ADMIN_PASSWORD=strong-password-here

# Optional: Logging
LOG_LEVEL=info
```

### Security Best Practices

1. **Use HTTPS/SSL:**
   - Get certificate from Let's Encrypt
   - Redirect HTTP to HTTPS
   - Set HSTS headers

2. **Secure Headers:**
```javascript
// Add to src/index.js
const helmet = require('helmet');
app.use(helmet());
```

3. **Rate Limiting:**
```javascript
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use('/api/', limiter);
```

4. **CORS Configuration:**
```javascript
app.use(cors({
  origin: 'https://yourdomain.com',
  credentials: true
}));
```

5. **Database Security:**
   - Use MongoDB Atlas with IP whitelist
   - Enable authentication
   - Use strong passwords
   - Enable backups

### Monitoring & Logging

1. **Error Tracking (Sentry):**
```bash
npm install @sentry/node
```

2. **Logging (Winston):**
```bash
npm install winston
```

3. **Performance Monitoring:**
   - Use New Relic
   - Use DataDog
   - Use Prometheus

### Database Backups

**MongoDB Atlas:**
- Automatic daily backups
- Point-in-time recovery
- Backup retention: 7 days (free tier)

**Manual Backup:**
```bash
mongodump --uri "mongodb+srv://user:pass@cluster.mongodb.net/paraflow"
```

## Post-Deployment

### Verify Deployment

```bash
# Test API
curl https://your-api-domain.com/api

# Test authentication
curl -X POST https://your-api-domain.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password123"}'

# Test database
curl https://your-api-domain.com/api/team
```

### Set Up Monitoring

1. **Health Check Endpoint:**
```javascript
app.get('/health', (req, res) => {
  res.json({ ok: true, timestamp: new Date() });
});
```

2. **Configure uptime monitoring:**
   - UptimeRobot
   - Pingdom
   - StatusCake

### Configure CI/CD

**GitHub Actions Example:**
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
      - name: Deploy to Heroku
        uses: akhileshns/heroku-deploy@v3.12.12
        with:
          heroku_api_key: ${{ secrets.HEROKU_API_KEY }}
          heroku_app_name: "paraflow-api"
          heroku_email: ${{ secrets.HEROKU_EMAIL }}
```

## Troubleshooting

### Application Won't Start

1. Check logs:
```bash
heroku logs --tail
# or
pm2 logs
```

2. Verify environment variables are set
3. Check MongoDB connection
4. Verify Node.js version compatibility

### Database Connection Issues

1. Check MongoDB Atlas IP whitelist
2. Verify connection string
3. Check network connectivity
4. Verify credentials

### High Memory Usage

1. Check for memory leaks
2. Implement connection pooling
3. Monitor with PM2:
```bash
pm2 monit
```

### Slow API Responses

1. Add database indexes
2. Implement caching
3. Optimize queries
4. Use CDN for static files

## Scaling

### Horizontal Scaling

1. **Load Balancer:**
   - AWS ELB
   - Nginx
   - HAProxy

2. **Multiple Instances:**
   - Deploy multiple backend instances
   - Use load balancer to distribute traffic

### Vertical Scaling

1. Increase server resources (CPU, RAM)
2. Upgrade database tier
3. Optimize code and queries

### Caching

1. **Redis:**
```bash
npm install redis
```

2. **CDN:**
   - CloudFlare
   - AWS CloudFront
   - Akamai

## Maintenance

### Regular Tasks

- [ ] Monitor error logs daily
- [ ] Check database size weekly
- [ ] Review performance metrics weekly
- [ ] Update dependencies monthly
- [ ] Test backups monthly
- [ ] Security audit quarterly

### Updates

```bash
# Check for updates
npm outdated

# Update packages
npm update

# Update major versions
npm install package@latest
```

## Rollback Plan

1. **Keep previous version:**
```bash
git tag v1.0.0
```

2. **Quick rollback:**
```bash
git revert <commit-hash>
git push
```

3. **Database rollback:**
   - Use MongoDB point-in-time recovery
   - Restore from backup

## Support & Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Heroku Documentation](https://devcenter.heroku.com/)
- [AWS Documentation](https://docs.aws.amazon.com/)

## Deployment Checklist

Before going live:

- [ ] All tests passing
- [ ] Environment variables configured
- [ ] Database backups enabled
- [ ] SSL/TLS certificate installed
- [ ] Monitoring configured
- [ ] Error tracking enabled
- [ ] Rate limiting enabled
- [ ] CORS configured correctly
- [ ] Security headers set
- [ ] Database indexes created
- [ ] Load testing completed
- [ ] Documentation updated
- [ ] Team trained on deployment
- [ ] Rollback plan documented
- [ ] Support contacts listed

---

**Ready to deploy?** Start with Option 1 (Heroku) for fastest setup, or Option 2 (AWS EC2) for more control.
