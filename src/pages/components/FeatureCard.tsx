import Image from "next/image";
interface featurecardInterface {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export const FeatureCard: React.FC<featurecardInterface> = ({
  title,
  description,
  image,
  className,
}) => {
  return (
    <div className={`flex flex-col ${className || ""}`}>
      <h4 className="text-4xl">{title}</h4>
      <Image className="p-5" src={image} alt={title} width="768" height="512" />
      <span>{description}</span>
    </div>
  );
};
