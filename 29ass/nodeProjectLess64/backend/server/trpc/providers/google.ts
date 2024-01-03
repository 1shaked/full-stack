import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client(process?.env?.GOOGLE_CLIENT_ID);

async function verifyGoogleToken(token: string) {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    return payload; // This includes user's Google profile information
}


async function loginUser(token: string) {

    const user =  await  verifyGoogleToken(token);
    if (user?.aud) {
        // create  a new user 
    }
    else {
        
    }

}