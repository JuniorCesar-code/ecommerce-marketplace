# E-Commerce Marketplace

A full-stack E-Commerce Marketplace developed collaboratively by two developers.

## Tech Stack

### Backend
- Java 21
- Spring Boot
- Spring Web
- Spring Security
- Spring Data JPA
- Hibernate
- Flyway
- PostgreSQL
- Maven

### Frontend
- React
- TypeScript
- Vite
- ESLint

### Infrastructure
- Docker
- Docker Compose
- Git & GitHub

## Project Structure

```text
ecommerce-marketplace/
├── backend/
├── frontend/
├── .env.example
├── .gitignore
├── docker-compose.yml
└── README.md
```

## Prerequisites

Install:

- Java 21
- Node.js
- npm
- Docker Desktop
- Git

## 1. Clone the Repository

```bash
git clone https://github.com/JuniorCesar-code/ecommerce-marketplace.git
cd ecommerce-marketplace
```

## 2. Configure Environment Variables

Create a local `.env` file in the project root based on `.env.example`.

Example:

```env
POSTGRES_DB=marketplace_db
POSTGRES_USER=marketplace_user
POSTGRES_PASSWORD=your_local_password
```

Do not commit `.env`.

For the Spring Boot backend, set the database password in PowerShell:

```powershell
$env:DB_PASSWORD="your_local_password"
```

## 3. Start PostgreSQL

From the project root:

```bash
docker compose up -d
```

Check the container:

```bash
docker compose ps
```

## 4. Start the Backend

```powershell
cd backend
$env:DB_PASSWORD="your_local_password"
.\mvnw.cmd spring-boot:run
```

Backend:

```text
http://localhost:8080
```

Health check:

```text
http://localhost:8080/health
```

Expected response:

```json
{"status":"UP"}
```

## 5. Start the Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend:

```text
http://localhost:5173
```

The application should display:

```text
Backend Status
UP
```

This confirms that the frontend can communicate with the backend.

## Git Workflow

Do not develop directly on `main`.

Start from an updated `main`:

```bash
git switch main
git pull origin main
git switch -c feature/<ticket-name>
```

After completing the ticket:

```bash
git add .
git commit -m "type: description"
git push -u origin feature/<ticket-name>
```

Then create a Pull Request on GitHub.

The other developer reviews the Pull Request before it is merged into `main`.

## Current Status

Sprint 0 — Repository & Shared Foundation