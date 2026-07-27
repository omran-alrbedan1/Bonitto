import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getPageMetadata } from "@/lib/seo";
import { type Locale } from "@/lib/i18n";
import { Link } from "@/i18n/routing";
import Footer from "@/components/Footer";
import { events, getEventBySlug } from "@/constants/events";

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    return getPageMetadata({ locale, page: 'news', path: '/events/[slug]' });
  }

  return {
    ...(await getPageMetadata({ locale, page: 'news', path: `/events/${event.slug}` })),
    title: `${event.title} - Bonitto`,
    description: event.intro,
  };
}

export default async function EventDetailPage({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  const event = getEventBySlug(slug);
  const t = await getTranslations({ locale, namespace: 'news' });

  if (!event) notFound();

  return (
    <div id="blocks-wrapper" className="horizontal-scroll event-detail-scroll">
      <section className="block-wyswyg section-md event-detail-copy">
        <div className="container-fluid g-lg-0">
          <div className="wyswyg">
            <Link href="/events" className="event-back-link">
              {t('eventDetails.backToEvents')}
            </Link>
            <h1>{event.title}</h1>
            <p>
              <em>{event.date}</em>
            </p>
            <p>{event.intro}</p>
            {event.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="block-image section-md">
        <img className="block-image-value" src={event.image} alt={event.alt} />
      </section>

      {event.videos?.map((video) => (
        <section className="block-video section-md" key={video}>
          <video className="full-height" controls autoPlay muted playsInline loop>
            <source src={video} type="video/webm" />
            {t('eventDetails.videoFallback')}
          </video>
        </section>
      ))}

      {event.gallery?.map((image) => (
        <section className="block-image section-md" key={image.desktop}>
          <picture>
            <source media="(min-width:992px)" srcSet={image.desktop} />
            <img className="block-image-value" src={image.mobile} alt={image.alt} />
          </picture>
        </section>
      ))}

      <Footer />
    </div>
  );
}
