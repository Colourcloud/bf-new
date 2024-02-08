import Image from "next/image";
import Link from "next/link";
import Button from "../common/Button";
import next from "next";

interface BlogCardProps {
  title: string;
  subtitle: string;
  btnLabel: string;
  href: string;
  thumbnail: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, subtitle, thumbnail, btnLabel, href }) => (
  <Link href={href}>
  <div className="flex flex-col gap-4 items-start">
      {/* Add content inside the Link tag if needed */}
    <div className="overflow-hidden w-full border border-[#222] rounded-md"><Image src={thumbnail} width='600' height='400' alt='' className="blog-image object-cover max-h-[300px] min-h-[300px] h-full w-full" /></div>
    <div className="text-white text-lg font-medium">{title}</div>
    <div className="">{subtitle}</div>
  </div>
  </Link>
);

export default BlogCard;

