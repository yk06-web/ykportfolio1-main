import { useEffect } from "react";

type Meta = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterImage?: string;
};

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

export function useDocumentHead(meta: Meta) {
  useEffect(() => {
    if (meta.title) document.title = meta.title;
    if (meta.description) setMeta("name", "description", meta.description);
    if (meta.ogTitle) setMeta("property", "og:title", meta.ogTitle);
    if (meta.ogDescription) setMeta("property", "og:description", meta.ogDescription);
    if (meta.ogImage) {
      setMeta("property", "og:image", meta.ogImage);
      setMeta("name", "twitter:image", meta.twitterImage || meta.ogImage);
    }
  }, [
    meta.title,
    meta.description,
    meta.ogTitle,
    meta.ogDescription,
    meta.ogImage,
    meta.twitterImage,
  ]);
}
