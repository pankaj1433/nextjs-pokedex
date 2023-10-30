'use client';

import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: "search/getSearchData"});
  }, []);

  return (
    <div>Hello from pokedex</div>
  );
}

export default Index;
