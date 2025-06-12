'use server'; // garante que nunca será executado no client
import { ID, Query } from 'node-appwrite';
import { createAdminClient } from '../appwrite';
import { appwriteConfig } from '../appwrite/config';
import { parseStringify } from '../utils';

const getUserByEmail = async (email: string) => {
  const { databases } = await createAdminClient();

  const result = await databases.listDocuments(
    appwriteConfig.databaseId,
    appwriteConfig.usersCollectionsId,
    [Query.equal('email', email)],
  );

  return result.total > 0 ? result.documents[0] : null;
};

const handleError = (error: unknown, message: string) => {
  console.log(error, message);
  throw error;
};

const sendEmailOTP = async ({ email }: { email: string }) => {
  const { account } = await createAdminClient();

  try {
    const session = await account.createEmailToken(ID.unique(), email);

    return session.userId;
  } catch (error) {
    handleError(error, 'Failed to send EMAIL OTP');
  }
};

export const createAccount = async ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  const existeUser = await getUserByEmail(email);

  const accountId = await sendEmailOTP({ email });

  if (!accountId) throw new Error('Failed to send an OTP');

  if (!existeUser) {
    const { databases } = await createAdminClient();

    await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.usersCollectionsId,
      ID.unique(),
      {
        fullName,
        email,
        avatar:
          'https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png',
        accountId,
      },
    );
  }

  return parseStringify({ accountId }); // function de /lib/utils.ts
};
