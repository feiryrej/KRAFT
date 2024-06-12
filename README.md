## REACT + EXPRESS + PRISMA (MYSQL)

### 1. Install Dependencies
- This is a monorepo project, so you need to install dependencies in both client and server folders.
- For client folder
```bash
    cd client
    npm install
```
- For server folder
```bash
    cd server
    npm install
```

### 2. Create .env file
- For server folder
- Create a .env file in server folder and add the following environment variables.
```json
DATABASE_URL="mysql://root:password@localhost:3306/kraft"
```

### 3. Start Development
- For client folder
```bash
    cd client
    npm run dev
```
- For server folder
```bash
    cd server
    npm run dev
```

or Run both from server folder
```bash
    cd server
    npm run:dev
```

### 4. Migrating Database Schema (Prisma)
- For server folder
```bash
    cd server
    npm run migrate -- <migration_name>
```

