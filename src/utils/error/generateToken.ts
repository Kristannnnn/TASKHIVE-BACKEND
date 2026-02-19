import jwt from "jsonwebtoken";

export const generateToken = (userId: string) => {
  const expiresInSeconds = 60 * 60 * 24;
  const token = jwt.sign(
    {
      id: userId,
    },
    process.env.JWT_SECRET as string,

    {
      expiresIn: expiresInSeconds,
    },
  );
  return { token, expiresIn: expiresInSeconds };
};
