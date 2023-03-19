import { NextApiRequest, NextApiResponse } from "next";
import Prisma from "@/utils/api/db";

const prisma = Prisma.getPrisma();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method != "POST") res.status(405).json({ error: "Invalid method" });

    const { email } = req.body;
    if (!email) {
      res.status(403).json({ error: "Bad request" });
      return;
    }
    //Get user cv data
    const user = await prisma.user.findFirst({
      where: {
        email: email?.toString(),
      },
      select: {
        userCVData: true,
      },
    });
    //Send the data
    res.status(200).json({ data: user?.userCVData });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
