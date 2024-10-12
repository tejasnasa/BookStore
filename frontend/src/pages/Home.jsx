import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://tejas-bookstore-server.vercel.app/books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="h-screen">
      <div className="bg-[#003049]">
        <section className="w-9/12 mr-auto ml-auto flex justify-between">
          <h1 className="text-5xl pt-5 pb-5 shadows-into-light-regular text-[#fa1c2b]">
            Tejas BookStore
          </h1>
          <select className="bg-[#669bbc] h-10 rounded-lg text-xl mt-auto mb-auto pl-4 pr-4 pt-2 pb-2">
            <option
              className="bg-[#669bbc]"
              onClick={() => setShowType("table")}
            >
              Table
            </option>
            <option
              className="bg-[#669bbc]"
              onClick={() => setShowType("card")}
            >
              Cards
            </option>
          </select>
        </section>
      </div>
      <section className="w-9/12 mr-auto ml-auto">
        <div className="flex justify-between items-center"><div></div>
          <Link to="/books/create">
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
        {loading ? (
          <Spinner />
        ) : showType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <BooksCard books={books} />
        )}
      </section>
    </div>
  );
};

export default Home;
