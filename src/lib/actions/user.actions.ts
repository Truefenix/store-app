// fluxo para cria a conta
// 1. user entra fullName e email
// 2. check se o usuario já existe usando o email
// 3. retorna OTP (one the password) para o email's do user
// 4. isso será mandando um secret key para criar a session
// 5. Cria um novo documento de user se é um nobo user
// 6. Retorna o user's accountId que será usada para completar o login
// 7. Verifica OTP e authentication para login

'use server'; // garante que nunca será executado no client

const createAccount = async ({fullName, email,}: {fullName: string; email: string;} => {

})