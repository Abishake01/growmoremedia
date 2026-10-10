export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  quotePrefix: string;
  linkLabel?: string;
  linkHref?: string;
  quoteSuffix?: string;
  wrapInQuotes?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "parthiban",
    name: "Parthiban",
    role: "Shop Owner",
    rating: 5,
    quotePrefix:
      "Congrats brother, you done a great job — it's very useful for my shop management.",
    wrapInQuotes: true,
  },
  {
    id: "ram",
    name: "Ram",
    role: "Client",
    rating: 5,
    quotePrefix: "Super da thambi — nalla iruku, romba nalla iruku da, thanks da!",
    wrapInQuotes: true,
  },
  {
    id: "rajan",
    name: "Rajan",
    role: "EMS Client",
    rating: 5,
    quotePrefix: '"The UI looks great — very polished." (Project: ',
    linkLabel: "EMS — Employment Management",
    linkHref: "https://ems-nine-ebon.vercel.app/",
    quoteSuffix: ") — project later dropped when the client became unreachable.",
    wrapInQuotes: false,
  },
];
