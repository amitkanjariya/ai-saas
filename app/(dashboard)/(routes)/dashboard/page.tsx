import { UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
      <div>
        <p>DashBoard Page (protected)</p>
        <UserButton afterSignOutUrl="/"/>
      </div>
    );
  }
  