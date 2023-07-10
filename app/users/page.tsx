
import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata = {
  title: "Users"
}

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers()
  const users = await usersData
  console.log(users)
  
  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      {users.map( user => {
        return (
          <li key = {user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
            <br/>
          </li>
        )
      })}
    </section>
  )
  return content
}

