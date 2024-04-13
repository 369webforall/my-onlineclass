docker run -e POSTGRES_PASSWORD=dbpassword -d -p 5432:5432 postgres

npx prisma generate 

npx prisma migrate dev

npx prisma db push

prisma generate && prisma migrate deploy && next build