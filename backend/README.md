# Backend

### Development

```
npm install
```

Setup development database
```
npx prisma migrate dev
```

View development database
```
npx prisma studio
```

Starting development server

```
npm run dev
```

### Environment variables (.env)

```
DATABASE_URL="postgresql://username:password@host:port/database?schema=public"
AUTH_SECRET="secret"
PORT=3000
```
