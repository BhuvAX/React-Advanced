import { useEffect, useRef, useState } from "react";
import "./assets/styles.css";
import { parseLinkHeader } from "./parseLinkHeader";

const LIMIT = 10;

function App() {
  const [photos, setPhotos] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const lastImageRef = useRef(null);

  async function fetchPhotos(url, overwrite = false) {
    setLoading(true);
    try {
      await new Promise((res) => setTimeout(res, 2000));
      const res = await fetch(url);
      setNextUrl(parseLinkHeader(res.headers.get("Link")).next);
      const photos = await res.json();
      if (overwrite) {
        setPhotos(photos);
      } else {
        setPhotos((current) => {
          return [...current, ...photos];
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    fetchPhotos(
      `http://localhost:3000/photos-short-list?_page=1&_limit=${LIMIT}`,
      true
    );
  }, []);

  useEffect(() => {
    if (!loading) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (!nextUrl) return;
          fetchPhotos(nextUrl);
          observer.unobserve(lastImageRef.current);
        }
      });

      if (lastImageRef.current) {
        observer.observe(lastImageRef.current);
      }
      return () => {
        if (observer && lastImageRef.current) {
          observer.unobserve(lastImageRef.current);
        }
      };
    }
  }, [loading]);

  return (
    <div className="grid">
      {photos.map((photo, index) => {
        return (
          <img
            key={photo.id}
            src={photo.url}
            alt={photo.title}
            ref={index === photos.length - 1 ? lastImageRef : undefined}
          />
        );
      })}
      {loading &&
        Array.from({ length: LIMIT }, (_, index) => index).map((n) => (
          <div key={n} className="skeleton">
            Loading...
          </div>
        ))}
    </div>
  );
}

export default App;
