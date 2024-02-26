import { Client, Account } from 'appwrite';

export const client = new Client();

client.setEndpoint('https://cloud.appwrite.io/v1').setProject('65d5e7bbd3ffdddeed0f');

export const account = new Account(client);

export { ID } from 'appwrite';
