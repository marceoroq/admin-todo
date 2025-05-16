This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Development

### Steps to run the application in dev mode locally.

1. Create and run the database with the following command:

```bash
docker compose up -d
```

2. Install project dependencies running:

```bash
npm i
```

3. Rename `.env.template` file to `.env`
4. Add the corresponding values to the environment variables.
5. Execute [SEED endpoint](localhost:3000/api/seed) to populate database with testing data.

After that, run the project:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Prisma Commands

```bash
# create initial configuration
npx prisma init

# perform a migration called 'dev'
npx prisma migrate --name dev

# create client to perform modifications in database
npx prisma generate
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
