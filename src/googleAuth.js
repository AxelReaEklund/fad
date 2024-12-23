import { gapi } from 'gapi-script';

const CLIENT_ID = '101596337911276677635.apps.googleusercontent.com';
const API_KEY = '31e2c774be6730c791508ea206129af6c7151a92';
const SCOPES = 'https://www.googleapis.com/auth/drive.readonly';

export const initGoogleAuth = () => {
    return gapi.load('client:auth2', () =>
        gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            scope: SCOPES,
        })
    );
};

export const signIn = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    return authInstance.signIn();
};

export const signOut = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    return authInstance.signOut();
};

export const isSignedIn = () => {
    const authInstance = gapi.auth2.getAuthInstance();
    return authInstance.isSignedIn.get();
};
