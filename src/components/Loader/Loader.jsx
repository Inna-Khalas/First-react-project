import { MutatingDots } from "react-loader-spinner";
import "./Loader.css";
function Loader() {
  return (
    <div className="LoaderContainer">
      <MutatingDots width="100" color="blue" secondaryColor="blue" />
    </div>
  );
}

export default Loader;
