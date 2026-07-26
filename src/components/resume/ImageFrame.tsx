import Image from "next/image";

type ImageFrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
  imageClassName?: string;
  sizes: string;
  preload?: boolean;
  dark?: boolean;
};

export function ImageFrame({
  src,
  alt,
  width,
  height,
  caption,
  className = "",
  imageClassName = "",
  sizes,
  preload = false,
  dark = false,
}: ImageFrameProps) {
  return (
    <figure
      className={`overflow-hidden border ${
        dark
          ? "border-zinc-700 bg-zinc-900"
          : "border-zinc-300 bg-[#ebeae6]"
      } ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        preload={preload}
        className={`h-auto w-full object-contain ${imageClassName}`}
      />
      {caption ? (
        <figcaption
          className={`border-t px-4 py-3 text-xs leading-5 ${
            dark
              ? "border-zinc-700 text-zinc-400"
              : "border-zinc-300 text-zinc-500"
          }`}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
