import React, { useState, useEffect, useRef } from "react";
import GridItem from "./GridItem";
import pf from "../Api.js";
import Loader from "../Loader/Loader.js";

const Grid = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  const [pets, updatePets] = useState([]);
  // refs
  const pageRef = useRef(totalPage);
  const loadingRef = useRef(loading);
  const currentPageRef = useRef(currentPage);

  useEffect(() => {
    getPets();
    window.addEventListener("scroll", handleScroll);
  }, []);

  /**
   *  Event handling with functional components in react
   *  https://medium.com/@rossbulat/react-using-refs-with-the-useref-hook-884ed25b5c29
   *
   */

  // update the total page and reference
  const updateTotalPage = data => {
    pageRef.current = data;
    setTotalPage(data);
  };

  // Update loading state
  const updateLoading = data => {
    loadingRef.current = data;
    setLoading(data);
  };

  const updateCurrentPage = data => {
    currentPageRef.current = data;
    setCurrentPage(data);
  };

  /**
   * concat vs push to update the state using the hooks in react
   * https://medium.com/@rossbulat/react-using-refs-with-the-useref-hook-884ed25b5c29
   */

  const getPets = () => {
    // TODO - need to handle the input from the UI.
    let searchTerm = {
      type: "dog",
      breed: "akita",
      page: currentPageRef.current
    };
    pf.animal.search(searchTerm).then(response => {
      let petsData = response.data;
      updatePets(pets => [...pets, petsData.animals].flat());
      updateTotalPage(petsData.pagination.total_pages);
      updateLoading(false);
    });
  };

  // implementation of the infinite scroll function
  // fetch more pets untill the last page
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 300 &&
      !loadingRef.current &&
      !(currentPageRef.current >= pageRef.current)
    ) {
      updateLoading(true);
      console.log("--CALLED-", !loadingRef.current);
      let nextPage = currentPageRef.current + 1;
      updateCurrentPage(nextPage);
      getPets();
      console.log("--CALLED-", !loadingRef.current);
    }
  };

  let loader;
  if (!pets.length || loading) {
    loader = (
      <div className="spinner">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className="container animals-grid">
        <div className="grid-boxes">
          {pets.length > 0 &&
            pets.map((animal, i) => {
              return <GridItem cindex={i} animal={animal} key={animal.id} />;
            })}
        </div>
      </div>
      {loader}
    </>
  );
};

export default Grid;
