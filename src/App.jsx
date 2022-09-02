import { Fragment } from "react";
import FirstNav from "./FirstNav";
import SecondNav from "./SecondNav";
import Carroussel from "./Carroussel";
// import Articles from "./Articles";
import NewArticles from "./NewArticles";

export default function App() {
  return (
    <Fragment>
      <FirstNav />
      <SecondNav />
      <Carroussel />
      <NewArticles />
      {/* <Articles /> */}
    </Fragment>
  )
}