import * as bcrypt from 'bcrypt';

export async function checkPassword(password: string, hashedPassword: string): Promise<boolean> {
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        return match;
    } catch (error) {
        throw new Error('Error checking password: ' + error);
    }
}