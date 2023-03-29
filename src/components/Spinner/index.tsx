import SyncLoader from "react-spinners/ClipLoader";

const Spinner = () => {

  return (
    <div className="sweet-loading">
      <SyncLoader size={150} color="#3324a3" />
    </div>
  );
};

export default Spinner;
