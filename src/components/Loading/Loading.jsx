import ReactLoading from "react-loading";

import "./loading.css";

export default function Loading() {
  return (
    <div className="de-loading">
      <ReactLoading type="spinningBubbles" color="#FFEF61" height={100} width={100} />
    </div>
  );
}
