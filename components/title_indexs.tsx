import React from "react";

export default function TitleIndexs() {
  const [titleList, setTitleList] = React.useState([]);

  React.useEffect(() => {
    const h2s: HTMLHeadingElement[] = [...document.querySelectorAll("h2")];
    let i = 0;

    for (let header of h2s) {
      titleList.push(header.innerText);
      setTitleList([...titleList]);
      header.id = i.toString();
      i += 1;
    }
  }, []);

  return (
    <div className="p-2 border border-gray-500">
      <div className="flex flex-col">
        {titleList.map((elem, index) => (
          <a key={index} className="my-2" href={`#${index.toString()}`}>
            {elem}
          </a>
        ))}
      </div>
    </div>
  );
}
