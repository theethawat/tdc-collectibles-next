"use client";
import { useState, useEffect } from "react";
import { Article, Image } from "@/model";
import ImageGallery from "react-image-gallery";
import _ from "lodash";

export default function Gallery({ article }: { article: Article }) {
  const [images, setImages] = useState<Image[]>([]);

  const fetchImages = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/image?article=${article._id}`,
        {
          next: { revalidate: 60 },
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
          },
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setImages(data.rows);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
    return () => {};
  }, [article]);

  return (
    <div className='p-4'>
      <ImageGallery
        items={_.map(images, (each: Image, index: number) => ({
          original: each?.url,
          thumbnail: each?.url,
          key: index,
        }))}
      />
    </div>
  );
}
