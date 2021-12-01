import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src="https://dghost.archeroe.xyz/content/images/size/w2000/2021/11/arch_mountain.png"
        alt="Mountain"
        width={500}
        height={500}
      />
      <p>Welcome to my homepage!</p>
    </>
  );
}
