"use server";

import { Client, Account } from 'node-appwrite';
import { cookies } from 'next/headers';

export async function createAdminClient() {
  console.log(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT, process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID)
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? '')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? '')
    .setKey(process.env.NEXT_APPWRITE_API_KEY ?? '');

  return {
    get account() {
      return new Account(client);
    }
  }
}

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? '')
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? '');

  const session = cookies().get('appwrite-session');

  if (!session || !session.value) {
    throw new Error("No session");
  }

  client.setSession(session.value);

  return {
    get account() {
      return new Account(client);
    }
  }
}

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();

    return await account.get();
  } catch (error) {
    return null;
  }
}
