import { PrismaClient, GameStatus, ParticipantRole } from '@prisma/client';

export async function joinGame(prisma: PrismaClient, userId: number, gameId: number) {
    // 1. לוודא שהמשחק קיים ושהסטטוס שלו הוא Waiting
    const game = await prisma.game.findUnique({
        where: { id: gameId }
    });

    if (!game) {
        throw new Error("Game not found");
    }

    // שימוש ב-Enum מבטיח בטיחות לוגית
    if (game.status !== GameStatus.Waiting) {
        throw new Error("Cannot join: Game has already started or finished");
    }

    // 2. לוודא שהמשתמש עדיין לא רשום למשחק זה
    const existingParticipant = await prisma.gameParticipant.findUnique({
        where: {
            userId_gameId: { userId, gameId }
        }
    });

    if (existingParticipant) {
        throw new Error("User is already registered for this game"); 
    }

    // 3. לרשום את המשתמש בתפקיד Player
    return await prisma.gameParticipant.create({
        data: {
            userId,
            gameId,
            role: ParticipantRole.Player
        }
    });
}