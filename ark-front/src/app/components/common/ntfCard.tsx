
interface NftCardProps {
  imageUrl: string;
  name: string;
  price: number;
  priceUnit: string;
  width?: number;
  className?: string;
}

const Card = ({
  imageUrl,
  name,
  price,
  priceUnit,
  width = 208,
  className
}: NftCardProps) => {
  const imageIsVideo = imageUrl.includes('.mp4');

  return (
    <div className={`
        group
        border border-primaryDark
        cursor-pointer
        bg-dark
        rounded-2xl
        overflow-hidden
        shadow-[0_4px_11px_0_rgba(28,47,85,0.05)]
        transition-border duration-300
        hover:border-secondary hover:shadow-[0_0px_0px_1px_rgba(248,84,92,1)]
        min-w-[208px]
        w-full sm:w-[208px]
        p-3
        ${className}
      `}
    >
      {
        imageIsVideo && (
          <video
            src={imageUrl}
            className="w-full object-cover rounded-lg"
            autoPlay
            loop
            muted
          />
        )
      }
      {
        !imageIsVideo && (
          <img src={imageUrl} alt={name} className="w-full object-cover rounded-lg" />
        )
      }
      <div className="mt-5">
        <h5 className="text-light text-xl leading-tight font-medium mb-1">{name}</h5>
        <p className="text-light text-base mb-4">{price} {priceUnit}</p>
        <button className="
          w-full h-[48px]
        bg-secondary text-darker
          py-2 px-4
          rounded-lg
          font-bold
          opacity-0 group-hover:opacity-100 transition
          duration-300
        ">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Card;