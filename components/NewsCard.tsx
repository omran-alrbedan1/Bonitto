import type { ComponentProps } from 'react';
import { Link } from '@/i18n/routing';
import './NewsCard.css';

type NewsCardProps = {
  href: ComponentProps<typeof Link>['href'];
  image: string;
  alt: string;
  title: string;
  date: string;
  category: string;
  label: string;
};

export function NewsCard({ href, image, alt, title, date, category, label }: NewsCardProps) {
  const filename = image.split('/').pop();
  const imageSrc = filename && ['IMCAS_3.webp', 'hyaluronic-acid.webp', 'acne.webp'].includes(filename)
    ? `/images/news/${filename}`
    : image;

  return (
    <Link href={href} className="bonitto-news-card">
      <span className="bonitto-news-card-image">
        <img src={imageSrc} alt={alt} loading="lazy" />
        <span className="bonitto-news-card-strip"><span>{label}</span></span>
      </span>
      <span className="bonitto-news-card-meta">
        <span dir="ltr">{date}</span>
        <span>{category}</span>
      </span>
      <h3>{title}</h3>
    </Link>
  );
}
