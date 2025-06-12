# Integrar Appwrite ao projeto

## 1. npm Appwrite Node.js SDK

 - [Link do npm para baixar SDK](https://www.npmjs.com/package/node-appwrite)

### Install via npm
````
npm install node-appwrite --save
````

### arrumar package.json
 - colocar abaixo de dependencies: {}

````
"dependencies": {...}
"overrides": {"react": "$react", "react-dom": "$react-dom"},
````

## 2. Crie a pasta src/lib/appwrite
 - crie o arquivo em: src/lib/appwrite/config.ts
importar todos envirorments de _.env.local_

````
export const appwriteConfig = {
  endpointUrl: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!,
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT!,
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE!,
  usersCollectionsId: process.env.NEXT_PUBLIC_APPWRITE_USERS_COLLECTION!,
  filesCollectionsId: process.env.NEXT_PUBLIC_APPWRITE_FILES_COLLECTION!,
  bucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET!,
  secretKey: process.env.NEXT_APPWRITE_KEY!, // SERÁ DISPONIVEL APENAS NO SITE APPWRITE
};
````

## 3. Overview > Integrations > Api Keys

### Create a new API Key
 - Name: store-app
 - Select All campos > create
 - Copie Secret key e cole em > _.env.local_ NEXT_APPWRITE_SECRET=""