import { NextApiRequest, NextApiResponse } from "next";
import Prisma from "@/utils/api/db";

const prisma = Prisma.getPrisma();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") res.status(405).json({ error: "Invalid method" });
  try {
    // Instead of user email we will send jwt token later
    const { email } = req.query;
    const { data } = req.body;

    if (!email) {
      res.status(403).json({ error: "Bad request" });
      return;
    }
    const user = await prisma.user.update({
      where: {
        email: email?.toString(),
      },
      data: {
        userCVData: {
          upsert: {
            create: {
              data: data,
            },
            update: {
              data: data,
            },
          },
        },
      },
      select: { email: true, userCVData: true },
    });
    console.log(user);

    res.status(200).json({ email: user.email, data: user.userCVData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
}
