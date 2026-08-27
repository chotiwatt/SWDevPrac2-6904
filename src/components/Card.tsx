import Image from "next/image";

type CardProps = {
  imgSrc: string;
  venueName: string;
};

export default function Card({ imgSrc, venueName }: CardProps) {
  return (
    <div className="venue-card">
      <Image src={imgSrc} alt={venueName} width={500} height={300} />
      <p>{venueName}</p>
    </div>
  );
}
