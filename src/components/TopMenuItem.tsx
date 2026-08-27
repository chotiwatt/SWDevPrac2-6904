import Link from "next/link";

type TopMenuItemProps = {
  title: string;
  href: string;
};

export default function TopMenuItem({ title, href }: TopMenuItemProps) {
  return <Link className="menu-item" href={href}>{title}</Link>;
}
