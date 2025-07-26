import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
async function createuser() {
  await client.user.create({
    data: {
      username: "Sanskar",
      password: "123654",
      age: 21,
    },
  });
}
createuser();
