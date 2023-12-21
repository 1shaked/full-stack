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
            console.log({sid, session});
            // debugger;
            
            // this.prisma.session.create({
            //     data: { 
            //         userId: 1,
            //         sid: "your_session_id",        // Add this field
            //         expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
            //         sessionToken: sid,
            //         data: JSON.stringify(session),
            //         createdAt: new Date(), 
            //         updateAt: new Date(),
                    
            //     }
            // })
            await this.prisma.session.update({
                where: { sessionToken: sid },
                data: { data: JSON.stringify(session), updateAt: new Date() },
                // create: { 
                    // expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
                    
                    // sessionToken: sid,
                    // data: JSON.stringify(session),
                    // createdAt: new Date(), 
                    // updateAt: new Date(),
                //     sessionToken: "your_session_token",
                //     data: "your_session_data",
                //     createdAt: new Date(),
                //     updateAt: new Date(),
                //     sid: "your_session_id",        // Add this field
                //     expiresAt: new Date("2023-12-31"), // Add this field

                // },
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
