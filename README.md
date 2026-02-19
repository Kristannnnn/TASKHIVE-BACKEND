# 🔧 TaskHive Backend API

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-4.0-90C53F?style=for-the-badge&logo=express)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-NoSQL-13AA52?style=for-the-badge&logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=for-the-badge&logo=json-web-tokens)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Powerful, scalable REST API for task management** ⚡

A production-ready Node.js backend with Express.js, MongoDB, and comprehensive security features for the TaskHive platform.

[**Backend Repository**](https://github.com/Kristannnnn/TASKHIVE-BACKEND) · [**Report Bug**](https://github.com/Kristannnnn/TASKHIVE-BACKEND/issues) · [**Request Feature**](https://github.com/Kristannnnn/TASKHIVE-BACKEND/issues)

</div>

---

## 📖 Table of Contents

- [✨ Features](#-features)
- [🏗️ Architecture](#-architecture)
- [📋 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🛠️ Installation](#-installation)
- [⚙️ Configuration](#-configuration)
- [🚀 Running the Server](#-running-the-server)
- [🔌 API Endpoints](#-api-endpoints)
- [🗄️ Database Models](#-database-models)
- [🔐 Authentication](#-authentication)
- [🧪 Testing](#-testing)
- [📚 Middleware](#-middleware)
- [🚀 Deployment](#-deployment)
- [🆘 Support](#-support)
- [👥 Authors](#-authors)

---

## ✨ Features

### 🔐 Authentication & Authorization

- User registration with email validation
- Secure login with JWT token generation
- Password hashing with bcrypt (10 salt rounds)
- Password reset flow via email
- Token-based authentication on protected routes
- Rate limiting to prevent brute-force attacks

### 📋 Task Management API

- Create, read, update, delete tasks (CRUD)
- Task categorization (Personal, Daily, Work, Other)
- Task completion & archival
- Get tasks by category
- Get archived/completed tasks
- Real-time task status management

### 📧 Email Services

- User registration confirmation
- Password reset email with secure tokens
- Email validation before processing
- Nodemailer integration with SMTP

### 🛡️ Security Features

- CORS protection with configurable origins
- Rate limiting per IP address
- Request body size limits
- Input validation on all endpoints
- Error handling with secure error messages
- HTTP-only cookie support ready

### 📊 Error Handling

- Global error middleware
- Structured error responses
- Detailed logging
- Custom AppError utility class

---

## 🏗️ Architecture

### Request Flow

```
Client Request
    ↓
Middleware (CORS, Rate Limit, Body Parser)
    ↓
Routes (Router)
    ↓
Controller (Business Logic)
    ↓
Models (Database Operations)
    ↓
Database (MongoDB)
    ↓
Response to Client
```

### Layered Architecture

```
Routes Layer       → Defines API endpoints
    ↓
Controllers Layer → Handles request/response logic
    ↓
Models Layer      → Defines data structure & DB operations
    ↓
Utils Layer       → Helper functions, error handling, mail services
    ↓
Middleware Layer  → Authentication, rate limiting, error handling
```

---

## 📋 Tech Stack

| Component          | Technology         | Purpose                        |
| ------------------ | ------------------ | ------------------------------ |
| **Runtime**        | Node.js 18+        | JavaScript runtime environment |
| **Framework**      | Express.js         | Lightweight web framework      |
| **Language**       | TypeScript         | Type-safe development          |
| **Database**       | MongoDB            | NoSQL document database        |
| **ODM**            | Mongoose           | MongoDB object modeling        |
| **Authentication** | JWT                | Token-based authentication     |
| **Password Hash**  | bcrypt             | Secure password hashing        |
| **Email Service**  | Nodemailer         | SMTP email delivery            |
| **Rate Limiting**  | express-rate-limit | DDoS/brute-force protection    |
| **CORS**           | cors               | Cross-origin resource sharing  |
| **Body Parser**    | express (built-in) | JSON request parsing           |
| **Testing**        | Jest               | Unit & integration testing     |
| **Code Quality**   | ESLint + Prettier  | Linting & formatting           |

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── controllers/          # Request handlers
│   │   ├── userController.ts    # User auth & password logic
│   │   ├── taskController.ts    # Task CRUD operations
│   │   └── config/
│   │       └── mail.config.ts   # Email configuration
│   │
│   ├── models/              # Data schemas
│   │   ├── Users.ts            # User schema & methods
│   │   └── Tasks.ts            # Task schema & methods
│   │
│   ├── routes/              # API routes
│   │   ├── userRoutes.ts       # User endpoints
│   │   ├── loginRoutes.ts      # Login endpoints
│   │   ├── taskRoute.ts        # Task endpoints
│   │   └── forgotpassRoute.ts  # Password reset endpoints
│   │
│   ├── middlewares/         # Custom middleware
│   │   ├── auth.ts             # JWT verification
│   │   ├── limiter.middleware.ts  # Rate limiting
│   │   └── global.error.handler.middleware.ts
│   │
│   ├── db/                  # Database
│   │   └── db.connect.ts       # MongoDB connection
│   │
│   ├── utils/               # Helper utilities
│   │   ├── forgotpassword.ts   # Password reset logic
│   │   ├── mail.ts             # Email sender
│   │   └── error/
│   │       ├── app-error.util.ts      # Custom error class
│   │       └── generateToken.ts       # JWT generator
│   │
│   └── index.ts             # Server entry point
│
├── .env                     # Environment variables (gitignored)
├── .env.example             # Example environment template
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies & scripts
└── README.md               # This file
```

---

## 🛠️ Installation

### Prerequisites

- **Node.js** v14 or higher
- **npm** or **yarn** package manager
- **MongoDB** (local or MongoDB Atlas account)
- **.env file** configured (see Configuration section)

### Step 1: Clone Repository

```bash
git clone https://github.com/Kristannnnn/TASKHIVE-BACKEND.git
cd TASKHIVE-BACKEND
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

```bash
# Copy example to .env file
cp .env.example .env

# Edit .env with your configuration (see Configuration section)
nano .env  # or use your editor
```

### Step 4: Build TypeScript

```bash
npm run build
```

### Step 5: Start Server

```bash
npm start

# Or for development with hot-reload
npm run dev
```

Server will be running at: `http://localhost:5000`

---

## ⚙️ Configuration

### Backend Environment Variables

Create `.env` file in the root directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/taskhive
# For MongoDB Atlas (cloud):
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/taskhive?retryWrites=true&w=majority

# JWT Authentication
JWT_SECRET=your_super_secret_jwt_key_here_min_32_chars
JWT_EXPIRES_IN=7d

# Email Service (Gmail SMTP)
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_specific_password  # NOT your regular password
EMAIL_FROM=TaskHive Support <your_email@gmail.com>

# Rate Limiting (optional)
RATE_LIMIT_WINDOW_MS=900000        # 15 minutes
RATE_LIMIT_MAX_REQUESTS=100         # Max requests per window

# CORS Configuration
CORS_ORIGIN=http://localhost:5173   # Frontend URL
```

### Email Configuration for Gmail

1. **Enable 2-Factor Authentication** in Google Account
2. **Generate App Password**: https://myaccount.google.com/apppasswords
3. **Use the app password** in `EMAIL_PASS` (not your Google password)

### MongoDB Connection

**Local MongoDB:**

```env
MONGODB_URI=mongodb://localhost:27017/taskhive
```

**MongoDB Atlas (Cloud):**

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create cluster and get connection string
3. Replace username:password in connection string

---

## 🚀 Running the Server

### Development Mode

```bash
npm run dev

# Output:
# Server running on port 5000
# Database connected successfully
```

### Production Mode

```bash
npm start
```

### Build Only

```bash
npm run build
```

---

## 🔌 API Endpoints

### 🔐 Authentication Endpoints

| Method | Endpoint          | Description            | Auth | Body                           |
| ------ | ----------------- | ---------------------- | ---- | ------------------------------ |
| POST   | `/api/users`      | Register new user      | ✗    | `{ email, password }`          |
| POST   | `/api/login`      | User login             | ✗    | `{ email, password }`          |
| POST   | `/api/forgotpass` | Request password reset | ✗    | `{ email }`                    |
| PUT    | `/api/users/:id`  | Update password        | ✓    | `{ oldPassword, newPassword }` |

### 📋 Task Endpoints

| Method | Endpoint                         | Description           | Auth | Body                        |
| ------ | -------------------------------- | --------------------- | ---- | --------------------------- |
| GET    | `/api/tasks/:category`           | Get tasks by category | ✓    | -                           |
| GET    | `/api/tasks/:category/completed` | Get archived tasks    | ✓    | -                           |
| POST   | `/api/tasks`                     | Create new task       | ✓    | `{ taskName, category }`    |
| PUT    | `/api/tasks/:id`                 | Update task           | ✓    | `{ taskName, isCompleted }` |
| DELETE | `/api/tasks/:id`                 | Delete task           | ✓    | -                           |

**Base URL:** `http://localhost:5000` (Development)

**Authentication:** Include JWT token in header: `Authorization: Bearer <token>`

---

## 🗄️ Database Models

### User Model

```typescript
{
  _id: ObjectId;
  email: String(required, unique);
  password: String(required, hashed);
  createdAt: Date(auto - timestamp);
  updatedAt: Date(auto - timestamp);
}
```

### Task Model

```typescript
{
  _id: ObjectId
  taskName: String (required)
  category: String (Personal|Daily|Work|Other)
  isCompleted: Boolean (default: false)
  userId: ObjectId (reference to User)
  createdAt: Date (auto-timestamp)
  updatedAt: Date (auto-timestamp)
}
```

---

## 🔐 Authentication

### JWT Token Flow

```
1. User logs in with email & password
2. Server validates credentials
3. Server generates JWT token: jwt.sign({userId, email}, JWT_SECRET)
4. Token returned to client (valid for 7 days)
5. Client sends token in Authorization header for protected routes
6. Server verifies token with jwt.verify()
7. Route processes request if token valid
```

### Password Security

- Passwords hashed with **bcrypt** (10 salt rounds)
- Never store plain-text passwords
- Password reset uses secure email tokens
- Rate limiting prevents brute-force attacks

### Protected Routes Middleware

```typescript
// Usage in routes:
router.get("/api/tasks/:category", authMiddleware, taskController.getTasks);

// Middleware checks:
// 1. Token present in header
// 2. Token signature valid
// 3. Token not expired
// 4. User exists in database
```

---

## 🧪 Testing

### Run Tests

```bash
npm test
```

### Run Tests with Coverage

```bash
npm run test:coverage
```

### Testing Scenarios

- User registration validation
- Login authentication
- Password reset flow
- Task CRUD operations
- Category filtering
- Error handling
- Rate limiting

---

## 📚 Middleware

### Authentication Middleware (`auth.ts`)

Verifies JWT token on protected routes.

```typescript
// Checks:
- Token exists in Authorization header
- Token is valid and not expired
- User exists in database
- Attaches user to request object
```

### Rate Limiting Middleware (`limiter.middleware.ts`)

Prevents brute-force attacks and DDoS.

```typescript
// Default: 100 requests per 15 minutes per IP
// Configurable via environment variables
```

### Global Error Handler Middleware

Catches and formats all errors consistently.

```typescript
// Features:
- Catches async errors
- Formats error responses
- Logs errors for debugging
- Never exposes sensitive information
```

### CORS Middleware

Allows controlled cross-origin requests from frontend.

```env
CORS_ORIGIN=http://localhost:5173
```

---

## 🚀 Deployment

### Deploy to Railway.app (Recommended)

```bash
# 1. Push code to GitHub
git push origin main

# 2. Create Railway project at railway.app
# 3. Connect GitHub repository
# 4. Add MongoDB plugin
# 5. Configure environment variables in Railway dashboard

PORT=5000
MONGODB_URI=[Railway MongoDB URI]
JWT_SECRET=[Strong random string]
EMAIL_SERVICE=gmail
EMAIL_USER=[gmail]
EMAIL_PASS=[app password]
CORS_ORIGIN=[Frontend URL]

# 6. Deploy!
```

### Deploy to Render.com

```bash
# 1. Create account at render.com
# 2. New → Web Service → Connect repository
# 3. Build command: npm install && npm build
# 4. Start command: npm start
# 5. Add environment variables
# 6. Deploy!
```

### Deploy to Heroku

```bash
# 1. Install Heroku CLI
npm install -g heroku

# 2. Login
heroku login

# 3. Create app
heroku create your-app-name

# 4. Add MongoDB add-on
heroku addons:create mongolab

# 5. Set environment variables
heroku config:set JWT_SECRET=your_secret
heroku config:set EMAIL_USER=your_email
heroku config:set EMAIL_PASS=your_app_password

# 6. Deploy
git push heroku main
```

---

## 🆘 Support

### Get Help

- 📧 **Email**: [support@taskhive.com](mailto:support@taskhive.com)
- 🐛 **Report Issues**: [GitHub Issues](https://github.com/Kristannnnn/TASKHIVE-BACKEND/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/Kristannnnn/TASKHIVE-BACKEND/discussions)

### Common Issues

**Q: "MONGODB_URI not found" error**

> Make sure your `.env` file contains MONGODB_URI. Check `.env.example` for the format.

**Q: "Invalid JWT token" error**

> Token may be expired (7 days). User needs to login again for new token.

**Q: "Email not sending"**

> Check `EMAIL_PASS` is an app password (not regular Gmail password). Ensure 2FA is enabled on Gmail account.

**Q: "Port 5000 in use"**

> Kill process: `lsof -ti:5000 | xargs kill -9` (Mac/Linux) or change PORT in `.env`

---

## 👥 Authors

### Core Team

| Name              | Role                 | GitHub                                         |
| ----------------- | -------------------- | ---------------------------------------------- |
| **Kristan James** | Full Stack Developer | [@Kristannnnn](https://github.com/Kristannnnn) |

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](../LICENSE) file for more details.

---

<div align="center">

### 🚀 Backend is the backbone of TaskHive!

Made with 💖 by [Kristan James](https://github.com/Kristannnnn)

</div>

---

**Happy Coding! 🔧✨**
