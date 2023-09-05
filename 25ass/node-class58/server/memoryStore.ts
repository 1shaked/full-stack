import { PrismaClient } from '@prisma/client';
import { SessionData, Store } from 'express-session';

class PrismaSessionStore extends Store {
    private prisma: PrismaClient;

    constructor(prisma: PrismaClient) {
        super();
        this.prisma = prisma;
    }

    async get(sid: string, callback: (err: any, session?: SessionData | null) => void): Promise<void> {
        try {
            const session = await this.prisma.session.findUnique({
                where: { sessionToken: sid },
            });
            callback(null, session ? JSON.parse(session.data) : null);
        } catch (err) {
            callback(err);
        }
    }

    async set(sid: string, session: SessionData, callback?: (err?: any) => void): Promise<void> {
        try {
            await this.prisma.session.upsert({
                where: { sessionToken: sid },
                update: { data: JSON.stringify(session), updateAt: new Date() },
                create: { sessionToken: sid, data: JSON.stringify(session), createdAt: new Date(), updateAt: new Date() },
            });
            if (callback) callback();
        } catch (err) {
            if (callback) callback(err);
        }
    }

    async destroy(sid: string, callback?: (err?: any) => void): Promise<void> {
        try {
            await this.prisma.session.delete({ where: { sessionToken: sid } });
            if (callback) callback();
        } catch (err) {
            if (callback) callback(err);
        }
    }

    // ... You can also implement other methods as needed like `all`, `clear`, etc.
}

export default PrismaSessionStore;
