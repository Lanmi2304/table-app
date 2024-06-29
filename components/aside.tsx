import { type User } from "@/hooks/use-fetch-peoples";

export default function Aside({ host }: { host: User | undefined }) {
  if (!host) return;
  const { nickname } = host;

  return (
    <>
      <h1>{nickname}</h1>
    </>
  );
}
