import postgres from "postgres";
import { genSalt, hash, compare } from "bcrypt-ts";
import { toast } from "react-toastify";

const sql = postgres({
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
});

export async function generatePassword(password) {
  const salt = await genSalt(10);

  return await hash(password, salt);
}

export default async function checkLogin({ rollno, password }) {
  const { passwordHash } =
    await sql`SELECT password FROM pace_users WHERE rollno=${rollno}`;

  if (passwordHash == null) {
    toast.error("No user found!");
    return false;
  }

  return await compare(passwordHash, password);
}
