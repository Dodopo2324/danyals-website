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
          ? "border-[#23364a] bg-[#07111f]"
          : "border-[#cbd2da] bg-[#f0ece4]"
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
              ? "border-[#23364a] text-[#a7b0be]"
              : "border-[#cbd2da] text-[#667085]"
          }`}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
