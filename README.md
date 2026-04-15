# 🎮 Practicum Backend Game System

This project is a backend assessment task focused on **Data Modeling**, **Business Logic**, and **Containerization**.

---

### 🛠️ Tech Stack
* **Runtime:** Node.js (TypeScript)
* **ORM:** Prisma 6
* **Database:** PostgreSQL
* **Containerization:** Docker & Docker Compose

---

### 📂 Project Structure

* **Data Modeling (Part A):**
  * Defined in `prisma/schema.prisma`.
  * Models: `User`, `Game`, and `GameParticipant`.
  * Uses Enums for `Status` and `Role`.

* **Business Logic (Part B):**
  * Implemented in `src/services/game.service.ts`.
  * Function `joinGame` handles validations for game status and user registration.

* **Execution (Main Script):** 
  * `src/main.ts` serves as the entry point.
  * Automatically connects to DB and runs the logic flow.

---

### 🚀 How to Run
The system is designed to run independently using Docker.

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/MiriamDevora8156/Practicum-Backend.git](https://github.com/MiriamDevora8156/Practicum-Backend.git)

2. **Start the environment:**
   ```bash
   docker-compose up --build

  3. **View Results:**
     Check the terminal logs for the success message:
     `Success: User joined game`
