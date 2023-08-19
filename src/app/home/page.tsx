import Banner from "../components/Banner";
import Post from "../components/Post";
import { postsData } from "../../postsData";

export default function App() {
  return (
    <div className="bg-screen">
      <Banner imagesrc="home" />
      <div className="grid grid-cols-3 gap-4 p-8">
        {postsData.map((e, index) => {
          console.log("Current index:", index);
          return <Post content={e} index={index} />;
        })}
      </div>
    </div>
  );
}
