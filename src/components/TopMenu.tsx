import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu() {
  return (
    <nav className="top-menu">
      <TopMenuItem title="Booking" href="/booking" />
      <Image src="/img/logo.png" alt="Venue Explorer logo" width={50} height={50} />
    </nav>
  );
}
