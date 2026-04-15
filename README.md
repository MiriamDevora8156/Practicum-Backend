# 🎮 Practicum Backend Game System

[cite_start]This project is a backend assessment task focused on **Data Modeling**, **Business Logic**, and **Containerization**.

---

### 🛠️ Tech Stack
* [cite_start]**Runtime:** Node.js (TypeScript)
* [cite_start]**ORM:** Prisma 6
* [cite_start]**Database:** PostgreSQL
* [cite_start]**Containerization:** Docker & Docker Compose

---

### 📂 Project Structure

* [cite_start]**Data Modeling (Part A):**
  * [cite_start]Defined in `prisma/schema.prisma`.
  * [cite_start]Models: `User`, `Game`, and `GameParticipant`.
  * [cite_start]Uses Enums for `Status` and `Role`.

* [cite_start]**Business Logic (Part B):**
  * [cite_start]Implemented in `src/services/game.service.ts`.
  * [cite_start]Function `joinGame` handles validations for game status and user registration.

* [cite_start]**Execution (Main Script):** 
  * [cite_start]`src/main.ts` serves as the entry point.
  * [cite_start]Automatically connects to DB and runs the logic flow.

---

### 🚀 How to Run
[cite_start]The system is designed to run independently using Docker.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/MiriamDevora8156/Practicum-Backend.git](https://github.com/MiriamDevora8156/Practicum-Backend.git)

2. **Start the environment:**
   ```bash
   docker-compose up --build

  3. **View Results:**
     Check the terminal logs for the success message:
     `Success: User joined game`
