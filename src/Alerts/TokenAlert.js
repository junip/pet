import React from "react";

const TokenAlert = () => {
  return (
    <div
      className="text-center alert alert-warning align-self-center animated flash delay-4s"
      role="alert"
    >
      Create your own API Token to avoid hitting the rate limit
    </div>
  );
};

export default TokenAlert;
