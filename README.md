# PROJXON Website
![Next.js](https://img.shields.io/badge/Next.js-React-blue)
[![React.js](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en)
![WordPress](https://img.shields.io/badge/WordPress-Headless%20CMS-red)
![TypeScript](https://img.shields.io/badge/TypeScript-Strongly%20Typed-blue)  
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com)

## Table of contents
- [Who This is For](#who-this-is-for)
- [About the Project](#-about-the-project)
- [Tech Stack](#%EF%B8%8F-tech-stack)
- [Routing Overview](#%EF%B8%8F-routing-overview)
- [Authentication](#-authentication)
- [Environment Variables](#-environment-variables)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Docker Support](#docker-support)
- [Deployment Notes](#-deployment-notes)
- [NGINX Setup](#-nginx-setup)
- [Custom WordPress Plugin](#-custom-wordpress-plugin)
- [Handover Notes](#-handover-notes)

## Who This is For

This project is intended for both:
- Developers at PROJXON maintaining or deploying the production site
- External developers who want to test or contribute locally

You can run the site locally with dummy `.env` values. Production deployment requires AWS access and WordPress integration.

## 🧠 About the Project

[![PROJXON Homepage](https://www.simeondavenport.com/_next/image?url=%2Fimages%2Fprojects%2Fprojxon.PNG&w=3840&q=75)](https://projxon.com)

This site is the digital platform for PROJXON, a business consulting firm. While the homepage communicates the company mission, the focus of this repository is on the **technical implementation** of the website.

The site is built using **Next.js** and **TypeScript**, with dynamic content pulled from a **WordPress backend** running on AWS Lightsail. We use **Incremental Static Regeneration (ISR)** for scalable blog/internship content, secure admin functionality with **JWT-based auth**, and host the frontend on **EC2 with NGINX + PM2**.

## ⚙️ Tech Stack

- **Next.js** with App Router (`app/`) and TypeScript
- **WordPress** as a headless CMS (REST API via Lightsail)
- **Incremental Static Regeneration (ISR)** for blog/internship pages
- **JWT-based Authentication** (hidden login route)
- **Client-Side Auth** for `/editor` and protected admin routes
- **PM2 + EC2** for production hosting
- **NGINX** for SSL termination and reverse proxy
- **Docker** + `docker-compose` for containerized builds

## 🗺️ Routing Overview

| Route                     | Type   | Revalidate | Expire |
|--------------------------|--------|------------|--------|
| `/`, `/about`, `/contact`| Static | -          | -      |
| `/login`, `/editor`      | Static | -          | -      |
| `/internships`           | ISR    | 5m         | 1y     |
| `/internships/[id]`      | SSG    | 5m         | 1y     |
| `/api/*`                 | API    | -          | -      |

> ISR + SSG ensure fast load times while allowing content to update via WordPress.

## 🔐 Authentication

Admin-only pages (`/editor`, client routes) require login via a hidden `/login` route using a JWT flow:

- Auth is powered by `WORDPRESS_JWT_URL`
- Tokens are stored in localStorage and verified client-side
- Protected UI elements are conditionally rendered based on auth state

## 🧲 Environment Variables

We use `.env` for both development and production. Update `NEXT_PUBLIC_API_URL` accordingly depending on environment:

- For development:
  ```env
  NEXT_PUBLIC_API_URL=http://localhost:3000
  ```
- For production:
  ```env
  NEXT_PUBLIC_API_URL=https://www.projxon.com
  ```

Other environment variables:

```env
# WordPress API
WORDPRESS_API_URL=https://blog.projxon.com/wp-json/wp/v2
WORDPRESS_CUSTOM_API_URL=https://blog.projxon.com/wp-json/projxon/v1
WORDPRESS_JWT_URL=https://blog.projxon.com/wp-json
WORDPRESS_API_USERNAME=admin
WORDPRESS_API_PASSWORD=********

# JWT
JWT_SECRET=********

# Email (OAuth2 for Gmail)
EMAIL_USER=communications@projxon.com
EMAIL_CLIENT_ID=********
EMAIL_CLIENT_SECRET=********
EMAIL_REFRESH_TOKEN=********
EMAIL_REDIRECT_URI=https://api.projxon.com/oauth2/callback
```

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

1. Have Git installed
2. Have Node.js installed

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/PROJXON/ProjxonNext.git
   cd ProjxonNext
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Create a .env file in the root with the above environment variables
4. Run the dev server:

   ```bash
   npm run dev
   ```

## Docker Support

This project includes built-in support for Docker and `docker-compose` to streamline local development and deployment. To run locally using Docker:

```bash
docker-compose up --build
```

- The app will be available at `http://localhost:3000`
- The container uses your existing `.env` file
- Uses multi-stage builds (`deps`, `builder`, `runner`) for optimized production deployment

> 💡 You can still run the app with `npm run dev` outside Docker if preferred.

## 🚀 Deployment Notes

1. SSH into EC2:

   ```bash
   ssh -i "Projxon_Next_2.pem" ec2-user@3.148.23.106
   ```

2. Pull the latest code:

   ```bash
   cd ProjxonNext
   git pull origin main
   npm install
   ```

3. Build:

   ```bash
   NODE_OPTIONS="--max-old-space-size=4096" npm run build
   ```

4. Restart:

   ```bash
   pm2 restart projxon-next
   ```

## 🌐 NGINX Setup

The production server uses NGINX as a reverse proxy and for SSL termination via Certbot.

- HTTP traffic (port 80) is automatically redirected to HTTPS
- HTTPS traffic is served via port 443
- SSL certificates are managed with Certbot
- Traffic is proxied to the Next.js app on port 3000

Key config highlights:

```nginx
server {
  listen 443 ssl;
  server_name projxon.com www.projxon.com;

  ssl_certificate /etc/letsencrypt/live/projxon.com/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/projxon.com/privkey.pem;

  location / {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

Certbot automatically renews certificates and handles `.well-known` challenges.

## 🔌 Custom WordPress Plugin

The `projxon-custom-api` plugin adds a custom REST API (`/wp-json/projxon/v1/clients`) for managing client testimonials.

**Plugin Files:**
- Source code: `wordpress-plugin/projxon-custom-api.php`
- Documentation: `wordpress-plugin/README.md`

**Production Location:**
```bash
/opt/bitnami/wordpress/wp-content/plugins/projxon-custom-api/
```

**Endpoints:**
| Method | Endpoint                   | Auth Required | Description                   |
|--------|----------------------------|---------------|-------------------------------|
| GET    | `/projxon/v1/clients`      | ❌            | Fetch all testimonials        |
| POST   | `/projxon/v1/clients`      | ✅ (admin)     | Add new testimonial w/ image  |
| DELETE | `/projxon/v1/clients/{id}` | ✅ (admin)     | Delete testimonial + image    |

**Functionality:**
- Downloads external image URLs and stores them in the WordPress media library
- Saves `name`, `quote`, `image`, and `title` to a custom `clients` table
- Deletes associated media attachments when a client is removed
- Handles upload and cleanup errors with full WordPress error reporting

## 🔄 Handover Notes

- Uses `app/` directory structure from Next.js 13+
- Uses `ISR` for dynamic content (internships, blog)
- API routes handle email, auth, content management
- Deployment through EC2 (Ubuntu) with `pm2`
- SSL + reverse proxy handled via NGINX
- Custom WordPress plugin handles dynamic testimonial APIs
- Protected routes hidden from non-auth users