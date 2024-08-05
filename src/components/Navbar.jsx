import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchResult } from "../features/userSlice";

const Navbar = () => {

  const [searchData, setSearchData] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    // console.log("searchData",searchData);
    dispatch(searchResult(searchData))
  }, [searchData])
  

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand">
              User Box
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/create"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Create
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    ALL Post
                  </Link>
                </li>
              </ul>
              <form className="d-flex w-50">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e)=> setSearchData(e.target.value)}
                />
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
