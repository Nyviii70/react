import { Fragment } from "react";
import FirstNav from "./FirstNav";
import SecondNav from "./SecondNav";
import NewCarousel from "./NewCarousel";
// import Carroussel from "./Carroussel";
import NewArticles from "./NewArticles";

export default function App() {
  return (
    <Fragment>
      <FirstNav />
      <SecondNav />
      <NewCarousel />
      {/* <Carroussel /> */}
      <NewArticles />
    </Fragment>
  )
}