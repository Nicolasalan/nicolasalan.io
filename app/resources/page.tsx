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
  <li className="flex items-center gap-4 transition-opacity">
    <a
      className="relative aspect-square h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden rounded-xl bg-tertiary shadow"
      href={link}
      target="_blank"
    >
      <Image
        src={image}
        alt={title}
        className="h-full w-full object-cover object-center"
        fill
      />
    </a>
    <div className="flex grow items-center justify-between gap-2">
      <div className="space-y-1">
        <h3 className="line-clamp-2 font-medium leading-tight text-primary">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm leading-tight text-secondary">
          {description}
        </p>
      </div>
      <div>
        <a
          className="ml-auto h-fit rounded-full bg-secondary px-4 py-1 text-sm"
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
        <div className="flex animate-in flex-col gap-8">
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
            Conteúdo que consumo e me ajuda a entender determinado conteúdo além
            de ser muito bem produzido.
          </p>
        </div>

        {categories.map((category, index) => (
          <section
            className="flex animate-in flex-col gap-8"
            key={index}
            style={{ "--index": 3 } as React.CSSProperties}
          >
            <h2 className="text-secondary">{category}</h2>
            <ul className="animated-list grid gap-x-6 gap-y-8 md:grid-cols-2">
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
    description: "Robot Learning Researcher",
    link: "http://www.imgeorgiev.com",
    sponsored: false,
  },
  {
    name: "Lil’Log",
    category: "Blogs",
    image:
      "https://zkahgfoymdwxmhuxqhub.supabase.co/storage/v1/object/public/notes/resources/peach.jpg",
    description: "practical AI safety and alignment at OpenAI",
    link: "https://lilianweng.github.io/",
    sponsored: false,
  },
  {
    name: "Neuralnet.ai",
    category: "Blogs",
    image:
      "https://cdn-dkold.nitrocdn.com/riZKeTFNhKAvSpsGEhUKHRQLkCvaPSzb/assets/images/optimized/rev-9ccaf6a/www.neuralnet.ai/wp-content/uploads/2021/12/banner-cropped-768x338.jpg",
    description: "Your Home For Artificial Intelligence Education",
    link: "https://www.neuralnet.ai/",
    sponsored: false,
  },
  {
    name: "Dataiku",
    category: "Blogs",
    image:
      "https://www.dataiku.com/wp-content/uploads/2023/01/Property-1Teal.svg",
    description: "Your Home For Artificial Intelligence Education",
    link: "https://blog.dataiku.com/",
    sponsored: false,
  },
];
