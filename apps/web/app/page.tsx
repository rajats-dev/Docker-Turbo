import { prisma } from "db/client";

export default async function Home() {
  const users = await prisma.user.findMany();

  return <>{JSON.stringify(users)}</>;
}

export const dynamic = "force-dynamic";
