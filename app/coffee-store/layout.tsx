import "../../styles/globals.css";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSens = IBM_Plex_Sans({
  weight: ['400'],
  subsets: ['latin']
});

export const metadata = {
  title: 'BeanSpot - Coffee store name',
  description: 'BeanSpot - Coffee store finder near you',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ibmPlexSens.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
