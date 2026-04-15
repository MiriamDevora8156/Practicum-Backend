import { PrismaClient, GameStatus } from '@prisma/client';
import { joinGame } from './services/game.service.js';

// פשוט ונקי - הוא ימשוך את ה-DATABASE_URL אוטומטית מה-env
const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.$connect();
        console.log("🚀 Connected to database successfully (Prisma 6)!");

        // יצירת נתוני דמי לבדיקה
        const user = await prisma.user.create({
            data: {
                email: `test_${Date.now()}@example.com`,
                name: "Test User"
            }
        });

        const game = await prisma.game.create({
            data: { status: GameStatus.Waiting }
        });

        console.log(`Created: User ${user.id}, Game ${game.id}`);

        // הרצת הפונקציה שלך
        const result = await joinGame(prisma, user.id, game.id);
        console.log("✅ Success:", result);

    } catch (e) {
        console.error("❌ Error:", e);
    } finally {
        await prisma.$disconnect();
    }
}

main();