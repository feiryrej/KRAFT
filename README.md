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

### 2. Start Development
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

### 3. Migrating Database Schema (Prisma)
- For server folder
```bash
    cd server
    npm run migrate -- <migration_name>
```

