// import './App.css'
// import { Accordion } from './component/accordian/Index'
// import ImageSlider from "./component/image-slider/App";
// import LoadMore from "./component/load-more/App";
// import RandomColorGenerator from "./component/random-color/App";
// import { StarRating } from "./component/star-rating/App";
import TreeView from "./component/tree-view/App";
import menus from "./component/tree-view/data";

function App() {
  return (
    <>
      {/* <Accordion/> */}

      {/* <RandomColorGenerator /> */}

      {/* <StarRating/> */}

      {/* <ImageSlider url={'http://picsum.photos/v2/list'} limit={10}/> */}

      {/* <LoadMore/> */}


      <TreeView menus={menus}/>



    </>

  );
}

export default App;
