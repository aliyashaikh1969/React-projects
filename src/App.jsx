// import './App.css'
// import { Accordion } from './component/accordian/Index'
import ImageSlider from "./component/image-slider/App";
import RandomColorGenerator from "./component/random-color/App";
import { StarRating } from "./component/star-rating/App";

function App() {
  return (
    <>
      {/* <Accordion/> */}

      {/* <RandomColorGenerator /> */}

      {/* <StarRating/> */}

      <ImageSlider url={'http://picsum.photos/v2/list'} limit={3}/>


    </>

  );
}

export default App;
