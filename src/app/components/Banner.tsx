interface BannerProps {
  imagesrc: "home" | "about" | "contact";
}

export default function Banner({ imagesrc }: BannerProps) {
  let imageBg = "";

  switch (imagesrc) {
    case "home":
      imageBg = "bg-hero1";
      break;
    case "about":
      imageBg = "bg-hero2";
      break;
    case "contact":
      imageBg = "bg-hero3";
      break;
    default:
      imageBg = "bg-hero1";
      break;
  }

  return (
    <div
      className={`w-full border-2
                        h-[50vh] flex items-center
                        justify-center ${imageBg} bg-no-repeat bg-cover bg-center text-white`}
    >
      <h1 className="text-2xl font-bold bg-gray-900 p-10 bg-opacity-50">
        {" "}
        Welcome to HighEndPage by Marcelo
      </h1>
    </div>
  );
}
