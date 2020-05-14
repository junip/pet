import React from "react";

const TokenAlert = () => {
  return (
    <div
      className="text-center alert alert-warning align-self-center "
      role="alert"
    >
      Make sure to ADD A TOKEN to avoid hitting the rate limit
    </div>
  );
};

export default TokenAlert;
