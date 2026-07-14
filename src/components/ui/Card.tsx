import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface CardProps {
  title: string;
  href: string;
  image: string;
  tag?: string;
  date?: Date | string;
  excerpt?: string;
}

export function Card({ title, href, image, tag, date, excerpt }: CardProps) {
  return (
    <Link href={href} className="card block group">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        {tag && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-teal-600 mb-2">
            {tag}
          </span>
        )}
        <h3 className="font-display text-lg font-bold text-[#1E4FBF] leading-snug mb-2 line-clamp-2">
          {title}
        </h3>
        {date && (
          <p className="text-sm text-gray-500 mb-2">{formatDate(date)}</p>
        )}
        {excerpt && (
          <p className="text-sm text-gray-600 line-clamp-2">{excerpt}</p>
        )}
      </div>
    </Link>
  );
}
