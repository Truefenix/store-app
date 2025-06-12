# Appwrite -> store-app

Criar projeto back-end do store-app

## Link >
 - [Appwrite - Documento](https://appwrite.io/docs)
 - [Appwrite - Inicio Next](https://appwrite.io/docs/quick-starts/nextjs)

## 1. Create Project >

 - Cria nome e Frankfurt.
 - Add Platform > **WEB**.
 - HostName Coloque > *

## 2. Add Web Platform
 - Guia do processo de instalação.

### Cria o .env.local e cole >
````
NEXT_PUBLIC_APPWRITE_PROJECT = ""
NEXT_PUBLIC_APPWRITE_ENDPOINT = ""
NEXT_PUBLIC_APPWRITE_DATABASE = ""
NEXT_PUBLIC_APPWRITE_USERS_COLLECTION = ""
NEXT_PUBLIC_APPWRITE_FILES_COLLECTION = ""
NEXT_PUBLIC_APPWRITE_BUCKET = ""
````
 - Go to Dashbord.

## 3. Create Database
 - Create new Database > name: general
 - Copie o id ao lado no name e cole no > .env.local do _NEXT_PUBLIC_APPWRITE_DATABASE_.

## 4. Create Colletions
 - Create new colletions > name: users
 - Copie o id ao lado no name e cole no > .env.local do _NEXT_PUBLIC_APPWRITE_USERS_COLLECTION_.

### Atributes > Create a new atributes > string - fullName
_fullName referente authFormShema do formulario de login_
 - keyName > fullName
 - size > 255
 - [*] Required > Create

### Atributes > Create a new atributes > Email - email
_email referente authFormShema do formulario de login_
 - keyName > fullName
 - [*] Required > Create

### Atributes > Create a new atributes > string - avatar
_avatar referente a um espantalho_
 - size > 1073741824
 - [*] Null

### Atributes > Create a new atributes > string - accountId
_accountId referente ao id dos users_
 - size > 255
 - [*] Required > Create

### Settings > Permissions

### Permissions
 - click em permissions > any
 - Role -> [*] Create [*] Read [*] Update [*] Delete > Update

## 5. Create a new Collection > files
 - new Collecion > name: files
 - Copie o id ao lado no name e cole no > .env.local do _NEXT_PUBLIC_APPWRITE_FILES_COLLECTION_.

### Atributes > Create a new atributes > string - name
 - keyName > name
 - size > 255
 - [*] Required > Create

### Atributes > Create a new atributes > string - url
 - keyName > url
 - [*] Required > Create

### Atributes > Create a new atributes > Enum - type
 - keyName > type
 - Elements > document image video audio other 
 - [*] Required > Create

### Atributes > Create a new atributes > string - bucketField
 - keyName > bucketField
 - size > 255
 - [*] Required > Create

### Atributes > Create a new atributes > string - accountId
 - keyName > accountId
 - size > 255
 - [*] Required > Create

### Atributes > Create a new atributes > RelatioShip - two-way relatioship
 - Related collection > users
 - Attribute key > owner
 - Relation > Many to One
 - On deleting a document > SET NULL - set document id in all related documents

### Atributes > Create a new atributes > string - extension
 - keyName > extension
 - size > 255
 - [*] Null > Create

### Atributes > Create a new atributes > Integer - size
 - keyName > size > Create

### Atributes > Create a new atributes > string - users
 - keyName > users
 - size > 1073741824
 - [*] Array > Create

### Settings > Permissions

### Permissions
 - click em permissions > any
 - Role -> [*] Create [*] Read [*] Update [*] Delete > Update

## 6. Storage

### Create a new Bucket
 - name: file_storage > create
 - Copie o id ao lado no name e cole no > .env.local do _NEXT_PUBLIC_APPWRITE_BUCKET_.