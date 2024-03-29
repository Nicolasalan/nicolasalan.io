import Image, { StaticImageData } from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recursos | Nicolas Alan",
  description:
    "Conteúdos e recursos que utilizo para estudar e para meu trabalho :)",
};

interface ItemProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  link: string;
  sponsored?: boolean;
}

const Item = ({ title, description, image, link, sponsored }: ItemProps) => (
  <li className="flex gap-4 items-center transition-opacity">
    <a
      className="relative rounded-xl overflow-hidden bg-tertiary aspect-square w-[4rem] min-w-[4rem] h-[4rem] shadow"
      href={link}
      target="_blank"
    >
      <Image
        src={image}
        alt={title}
        className="object-center object-cover w-full h-full"
        fill
      />
    </a>
    <div className="grow flex justify-between gap-2 items-center">
      <div className="space-y-1">
        <h3 className="text-primary line-clamp-2 leading-tight font-medium">
          {title}
        </h3>
        <p className="text-secondary line-clamp-3 leading-tight text-sm">
          {description}
        </p>
      </div>
      <div>
        <a
          className="ml-auto text-sm rounded-full px-4 py-1 bg-secondary h-fit"
          href={link}
          target="_blank"
        >
          Ver
        </a>
        {sponsored && (
          <p className="mt-1 text-center text-xs text-tertiary">Sponsored</p>
        )}
      </div>
    </div>
  </li>
);

export default function Resource() {
  const categories = resource.reduce((acc, item) => {
    if (!acc.includes(item.category)) {
      acc.push(item.category);
    }
    return acc;
  }, [] as string[]);

  categories.sort();

  return (
    <>
      <div className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-8 animate-in">
          <div>
            <h1 className="animate-in text-3xl font-bold tracking-tight">
            Recursos
            </h1>
            <p
              className="animate-in text-secondary"
              style={{ "--index": 1 } as React.CSSProperties}
            >
             Minha biblioteca.
            </p>
          </div>
          <p
            className="max-w-lg animate-in"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            Conteúdo que consumo e me ajuda a entender
            determinado conteúdo além de ser muito bem produzido.
          </p>
        </div>

        {categories.map((category, index) => (
          <section
            className="flex flex-col gap-8 animate-in"
            key={index}
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <h2 className="text-secondary">{category}</h2>
            <ul className="grid md:grid-cols-2 gap-x-6 gap-y-8 animated-list">
              {resource.map((item, index) => {
                if (item.category === category) {
                  return (
                    <Item
                      key={index}
                      title={item.name}
                      description={item.description}
                      image={item.image}
                      link={item.link}
                      sponsored={item.sponsored}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}


const resource = [
  {
    name: "Ignat Georgiev",
    category: "Blogs",
    image: "https://www.imgeorgiev.com/assets/img/avatar-icon.jpeg",
    description:
      "Robot Learning Researcher",
    link: "http://www.imgeorgiev.com",
    sponsored: false,
  },
  {
     name: "OpenVoice",
     category: "Projects",
     image: "https://avatars.githubusercontent.com/u/127754094?s=200&v=4",
     description:
       "Instant voice cloning by MyShell",
     link: "https://github.com/myshell-ai/OpenVoice",
     sponsored: false,
   },
];

