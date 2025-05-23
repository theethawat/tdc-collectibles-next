import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Menu, Footer } from "@/components";
import { Category, CategoryResponse } from "@/model";
import "react-image-gallery/styles/css/image-gallery.css";

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_TITLE,
  description: process.env.NEXT_PUBLIC_DESCRIPTION,
  icons: {
    icon: "/tdcgci.png",
    shortcut: "/tdcgci.png",
    apple: "/tdcgci.png",
  },
  creator: "Theethawat Savastham",
  publisher: "Theethawat Savastham",
  applicationName: process.env.NEXT_PUBLIC_TITLE,
  openGraph: {
    images: [
      {
        url: "/tdcgc.png",
        width: 600,
        height: 300,
      },
    ],
    siteName: process.env.NEXT_PUBLIC_TITLE,
    type: "website",
    locale: "th-TH",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/category?place=${process.env.NEXT_PUBLIC_PLACE_ID}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );

  let categories: Category[] = [];
  if (data.ok) {
    console.log("Data fetched successfully");
    const categoryResponse: CategoryResponse = await data.json();
    categories = categoryResponse.rows || [];
  }

  if (!data.ok) {
    console.log("Error fetching data");
    const error = await data.json();
    console.log(error);
  }
  return (
    <html lang='en'>
      <body className={` antialiased`}>
        <Navbar categories={categories} />
        <div className='mx-2 md:mx-10 py-2 min-h-screen'>
          <div className='flex flex-wrap w-full'>
            <div className='hidden md:block md:w-1/5'>
              <Menu menuList={categories} />
            </div>
            <div className='w-full md:w-4/5 px-4'>{children}</div>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
