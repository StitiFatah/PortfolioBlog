import Link from "next/link";
import Image from "next/image";

interface TypeText {
  title: Element | string;
  body: string;
  stack: string[];
  link?: {
    href: string;
    name: string;
  };
}

interface TypeBlogCard extends TypeText {
  image: string;
  className?: string;
}

function Text({ title, body, link, stack }: TypeText) {
  return (
    <div className="flex flex-col justify-center h-full p-6 ">
      <div className="flex flex-col mb-6">
        <h2 className="text-2xl font-bold mb-4 text-purple-500">{title}</h2>
        <p className="text-gray-700 ">{body}</p>
      </div>

      <div className="mb-4">
        <div className="mb-4 font-semibold text-gray-500 text-xs">
          USED STACK:
        </div>
        <div className="flex  flex-wrap items-center ">
          {stack.map((elem, index) => (
            <div
              key={index}
              className="border shadow-md mx-2 px-2 py-1 rounded my-1 text-xs text-gray-500 "
            >
              {elem}
            </div>
          ))}
        </div>
      </div>
      {link && (
        <div className="flex flex-row justify-end">
          <Link href={link.href}>
            <a className="text-purple-500 font-semibold"> {link.name}</a>
          </Link>
        </div>
      )}
    </div>
  );
}

export default function BlogCard({
  image,
  title,
  body,
  link,
  stack,
  className,
}: TypeBlogCard) {
  const text_props = { title, body, link, stack };

  return (
    <div
      className={`flex flex-col md:flex-row border hover:shadow-lg ${
        className && className
      } 
      }`}
    >
      <div className="md:w-2/5" style={{ fontSize: 0 }}>
        <div className="photo h-full" />
      </div>
      <div className="md:w-3/5 ">
        <Text {...text_props} />
      </div>
      <style>
        {`
.photo{
     background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${image})

}
            
                  `}
      </style>
    </div>
  );
}
