<div align="center">

# 📚 PubliShelf

### *A Real-Time Auction Marketplace for Books & Antiques*

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Socket.io](https://img.shields.io/badge/Socket.io-4.8-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io/)
[![Redis](https://img.shields.io/badge/Redis-Caching-DC382D?style=for-the-badge&logo=redis&logoColor=white)](https://redis.io/)
[![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com/)

**PubliShelf** is a scalable, full-stack marketplace where readers can discover, buy, and bid on books — including rare antique editions in live auctions. Built with a 13K-line Node.js backend, 134 React components, and real-time bidding powered by Socket.io + Redis.

[✨ Features](#-features) • [📸 Screenshots](#-screenshots) • [🛠 Tech Stack](#-tech-stack) • [⚡ Quick Start](#-quick-start) • [📊 Architecture](#-architecture)

</div>

---

## 📸 Screenshots

<div align="center">

### 🔐 Login — Bold Gradient UI with Glass Morphism
<img src="./assets/login.png" alt="Login Page" width="700" />

<br/><br/>

### 📞 Contact Us
<img src="./assets/contact.png" alt="Contact Page" width="700" />

<br/><br/>

### 👩‍💻 About the Developer
<img src="./assets/about.png" alt="About Page" width="700" />

</div>

---

## ✨ Features

### 🛒 Marketplace
- Browse, search, and purchase books with category filters
- Publisher storefronts with inventory management
- Secure checkout with **Stripe** payment integration
- Order tracking and purchase history

### 🔨 Live Antique Auctions
- **Real-time bidding** with Socket.io — instant price updates across all connected clients
- Atomic bid processing using MongoDB **$expr price guard + $max** to eliminate race conditions
- Compensating rollback on failed bids
- Auction scheduling, countdown timers, and bid history

### 👥 4 Role-Based Dashboards
| Role | Capabilities |
|------|-------------|
| **Buyer** | Browse, purchase, bid in auctions, manage profile & orders |
| **Publisher** | List books, manage inventory, track sales analytics |
| **Manager** | Moderate content, manage publishers, view platform analytics |
| **Admin** | Full platform oversight, user management, system configuration |

### 🔐 Security & Auth
- **JWT cookie authentication** with HTTP-only secure cookies
- **Google OAuth 2.0** single sign-on
- OTP email verification via Nodemailer
- Role-based route protection and middleware
- Helmet.js security headers + rate limiting

### 📈 Performance
- **Redis caching** across 9 hot endpoints — cut p95 latency by 92%
- Horizontally scaled Socket.io via **Redis pub/sub adapter**
- Clustered server mode for multi-core utilization
- Morgan + Winston structured logging with daily rotation

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React 19** | UI framework with 134 components |
| **Vite 7** | Lightning-fast dev server & bundler |
| **Tailwind CSS 4** | Utility-first styling with custom theme system |
| **Redux Toolkit** | Global state management |
| **Framer Motion** | Page transitions & micro-animations |
| **Socket.io Client** | Real-time auction updates |
| **Chart.js** | Dashboard analytics visualizations |
| **React Hook Form** | Performant form validation |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js + Express 5** | REST API server (103 endpoints) |
| **MongoDB Atlas + Mongoose** | Database with 9 normalized models |
| **Socket.io + Redis Adapter** | Real-time bidding engine |
| **Redis** | Caching layer & pub/sub |
| **Stripe** | Payment processing & webhooks |
| **Cloudinary** | Image upload & CDN |
| **JWT + Google OAuth** | Authentication |
| **Jest** | 101 test cases across 26 test files |
| **Swagger** | API documentation |
| **Docker** | Containerized deployment |

---

## 📊 Architecture

```
PubliShelf/
├── client/                    # React 19 + Vite frontend
│   ├── src/
│   │   ├── components/        # Shared UI components
│   │   ├── pages/
│   │   │   ├── admin/         # Admin dashboard & management
│   │   │   ├── auth/          # Login, signup, forgot password
│   │   │   ├── buyer/         # Buyer dashboard, cart, auctions
│   │   │   ├── manager/       # Manager dashboard & analytics
│   │   │   ├── public/        # Home, about, contact, FAQ
│   │   │   └── publisher/     # Publisher dashboard & inventory
│   │   ├── store/             # Redux store & slices
│   │   ├── services/          # API service layer
│   │   └── utils/             # Auth, axios, helpers
│   └── index.html
│
├── server/                    # Express 5 backend
│   ├── config/                # DB, Redis, Cloudinary, security
│   ├── controllers/           # Route handlers
│   ├── middleware/             # Auth, error handling, rate limiting
│   ├── models/                # 9 Mongoose schemas
│   ├── routes/                # 7 route modules (103 endpoints)
│   ├── services/              # Business logic & caching
│   ├── sockets/               # Real-time auction engine
│   ├── scripts/               # DB seed & migration scripts
│   ├── __tests__/             # Jest test suites
│   └── server.js              # Entry point
│
└── tests/                     # Integration & load tests
```

---

## ⚡ Quick Start

### Prerequisites
- **Node.js** v18+
- **MongoDB Atlas** account
- **Redis** instance (optional for local dev)
- **Cloudinary** account
- **Stripe** account

### 1. Clone & Install

```bash
git clone https://github.com/shrutisinghchauhan/PubliShelf.git
cd PubliShelf
```

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### 2. Configure Environment

Create `server/.env`:

```env
PORT=3000
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d

CLIENT_URL=http://localhost:5173
GOOGLE_CLIENT_ID=your_google_client_id

MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/PubliShelf
REDIS_URL=redis://...

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

STRIPE_SECRET_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret

USER_EMAIL=your_email@gmail.com
USER_APP_PASSWORD=your_app_password
```

### 3. Run

```bash
# Terminal 1 — Server
cd server
npm run dev          # → http://localhost:3000

# Terminal 2 — Client
cd client
npm run dev          # → http://localhost:5173
```

### 4. Explore

| URL | What |
|-----|------|
| `http://localhost:5173` | Frontend app |
| `http://localhost:3000/api-docs` | Swagger API docs |

---

## 🧪 Testing

```bash
# Server tests (101 test cases)
cd server
npm test

# Client tests
cd client
npm test
```

---

## 📈 By the Numbers

| Metric | Value |
|--------|-------|
| Backend codebase | **13,400+ lines** |
| Frontend components | **134 React components** |
| REST API endpoints | **103** |
| Data models | **9 normalized schemas** |
| Test cases | **101 Jest tests** |
| Role workflows | **4 (Buyer, Publisher, Manager, Admin)** |

---

## 🙋‍♀️ Author

**Shruti Chauhan** — IIITM Gwalior

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shruti-chauhan-b794bb258/)
[![Instagram](https://img.shields.io/badge/Instagram-Follow-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/_shrutiiiiii_0_/)

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

</div>
