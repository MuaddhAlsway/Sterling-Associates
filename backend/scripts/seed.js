const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const TeamMember = require("../src/models/TeamMember");
const Blog = require("../src/models/Blog");
const User = require("../src/models/User");
const SiteContent = require("../src/models/SiteContent");
const bcrypt = require("bcryptjs");

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI || "mongodb://localhost:27017/paraflow";
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    // Clear existing data
    await TeamMember.deleteMany({});
    await Blog.deleteMany({});
    await User.deleteMany({});
    await SiteContent.deleteMany({});

    // Seed team members
    const teamMembers = [
      {
        name: "Sarah Mitchell",
        title: "Senior Attorney",
        specialty: "Corporate Law",
        career: "15+ years in corporate law and business transactions",
        bio: "Sarah specializes in corporate law and has successfully handled numerous high-value business transactions.",
        order: 1,
      },
      {
        name: "James Rodriguez",
        title: "Attorney",
        specialty: "Family Law",
        career: "10+ years in family law and mediation",
        bio: "James brings compassion and expertise to family law matters, helping clients navigate complex situations.",
        order: 2,
      },
      {
        name: "Emily Chen",
        title: "Attorney",
        specialty: "Real Estate Law",
        career: "8+ years in real estate transactions",
        bio: "Emily has extensive experience in residential and commercial real estate transactions.",
        order: 3,
      },
      {
        name: "Michael Thompson",
        title: "Attorney",
        specialty: "Intellectual Property",
        career: "12+ years in IP law and patent prosecution",
        bio: "Michael specializes in protecting intellectual property rights for businesses and individuals.",
        order: 4,
      },
      {
        name: "Jessica Williams",
        title: "Paralegal",
        specialty: "Legal Support",
        career: "7+ years as a paralegal",
        bio: "Jessica provides essential support to our attorneys and ensures smooth case management.",
        order: 5,
      },
      {
        name: "David Martinez",
        title: "Attorney",
        specialty: "Litigation",
        career: "11+ years in civil litigation",
        bio: "David has a proven track record in representing clients in complex litigation matters.",
        order: 6,
      },
    ];

    await TeamMember.insertMany(teamMembers);
    console.log("✓ Team members seeded");

    // Seed blog posts
    const blogs = [
      {
        title: "Understanding Corporate Governance Regulations",
        excerpt: "A comprehensive guide to modern corporate governance requirements and best practices.",
        content: "<p>Corporate governance is essential for any business...</p>",
        category: "Corporate Law",
        author: "Sarah Mitchell",
        authorTitle: "Senior Attorney",
        readingTime: 8,
        date: new Date().toISOString().split("T")[0],
      },
      {
        title: "Family Law: What You Need to Know About Divorce",
        excerpt: "Key considerations and steps in the divorce process.",
        content: "<p>Divorce can be a complex process...</p>",
        category: "Family Law",
        author: "James Rodriguez",
        authorTitle: "Attorney",
        readingTime: 6,
        date: new Date(Date.now() - 86400000).toISOString().split("T")[0],
      },
      {
        title: "Real Estate Investment: Legal Considerations",
        excerpt: "Important legal aspects to consider before investing in real estate.",
        content: "<p>Real estate investment requires careful legal planning...</p>",
        category: "Real Estate",
        author: "Emily Chen",
        authorTitle: "Attorney",
        readingTime: 7,
        date: new Date(Date.now() - 172800000).toISOString().split("T")[0],
      },
    ];

    await Blog.insertMany(blogs);
    console.log("✓ Blog posts seeded");

    // Seed admin user
    const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "password123";
    const passwordHash = await bcrypt.hash(adminPassword, 10);

    await User.create({
      email: adminEmail,
      passwordHash,
      role: "admin",
    });
    console.log("✓ Admin user seeded");

    // Seed site content
    const siteContent = {
      language: "en",
      content: {
        nav: {
          home: "Home",
          about: "About Us",
          services: "Services",
          blog: "Blog",
          contact: "Contact",
        },
        hero: {
          title: "Expert Legal Solutions for Your Business",
          description: "Trusted legal counsel for corporate, family, and real estate matters",
        },
      },
      useStatic: false,
    };

    await SiteContent.create(siteContent);
    console.log("✓ Site content seeded");

    console.log("\n✓ Database seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
};

connectDB().then(seedData);
