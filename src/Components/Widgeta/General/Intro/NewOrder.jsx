const NewOrder = () => {
  return (
    <div className="new-order">
      <div>
        <div className="progress sm-progress-bar">
          <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={{ width: "80%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;