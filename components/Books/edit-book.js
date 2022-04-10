import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import axios from "axios";
import variables from "../../util/variables";

export default function EditBook(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publication, setPublication] = useState("");
  const [genre, setGenre] = useState("");
  const [type, setType] = useState("");
  const [status, setStatus] = useState("");
  const [availability, setAvailability] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState();

  const fileChangeHandler = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    if (props.editMode) {
      console.log("Edit Mode");
    } else {
      const newBook = {
        title,
        author,
        publication,
        genre,
        type,
        status: "Not Read",
        availability: "Available",
        year,
        image,
      };
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      let fd = new FormData();
      fd.append("title", title);
      fd.append("author", author);
      fd.append("publication", publication);
      fd.append("genre", genre);
      fd.append("type", type);
      fd.append("status", "Not Read");
      fd.append("availability", "Available");
      fd.append("year", year);
      fd.append("image", image);

      const result = await axios.post(
        `${variables.apiRoute}/books`,
        fd,
        config
      );

      // const result = await axios({
      //   method: "post",
      //   url: "http://localhost:6500/books",
      //   data: newBook,
      //   headers: { "Content-Type": "multipart/form-data" },
      // });
      console.log(`Result ${result}`);
      console.log(newBook);
    }
  };

  return (
    <>
      <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none m-5 p-5 ">
        <div className=" relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="   rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="min-h-48 border border-gray-300 rounded-lg">
              <form
                onSubmit={handleFormSubmission}
                className="bg-white  rounded px-8 pt-6 pb-8 mb-4"
              >
                <div className="flex justify-between items-center py-5">
                  <p className="text-3xl customFont  text-gray-700 ">
                    Add Book
                  </p>
                  <IoClose
                    className="cursor-pointer"
                    onClick={() => {
                      props.setShowModal(false);
                    }}
                  />
                </div>
                <div className="mb-4">
                  <label className="customFont text-gray-700 " htmlFor="title">
                    Title
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline customFont"
                    id="title"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label className="customFont text-gray-700 " htmlFor="author">
                    Author
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline customFont"
                    id="author"
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) => {
                      setAuthor(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="customFont text-gray-700 "
                    htmlFor="publication"
                  >
                    Publication
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline customFont"
                    id="publication"
                    type="text"
                    placeholder="Publication"
                    value={publication}
                    onChange={(e) => {
                      setPublication(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label className="customFont text-gray-700 " htmlFor="genre">
                    Genre
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline customFont"
                    id="genre"
                    type="text"
                    placeholder="Genre"
                    value={genre}
                    onChange={(e) => {
                      setGenre(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label className="customFont text-gray-700 " htmlFor="type">
                    Type
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline customFont"
                    id="type"
                    type="text"
                    placeholder="Type"
                    value={type}
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  />
                </div>

                {/* <div className="mb-4">
                  <label className="customFont text-gray-700 " htmlFor="status">
                    Status
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline customFont"
                    id="status"
                    type="text"
                    placeholder="Status"
                    value={status}
                    onChange={(e) => {
                      setStatus(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label className="customFont text-gray-700 " htmlFor="status">
                    Availability
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline customFont"
                    id="availability"
                    type="text"
                    placeholder="Availability"
                    value={availability}
                    onChange={(e) => {
                      setAvailability(e.target.value);
                    }}
                  />
                </div> */}

                <div className="mb-4">
                  <label className="customFont text-gray-700 " htmlFor="year">
                    Year
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline customFont"
                    id="year"
                    type="text"
                    placeholder="Year"
                    value={year}
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                  />
                </div>

                <div className="mb-4">
                  <label className="customFont text-gray-700 " htmlFor="year">
                    Image
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline customFont"
                    id="image"
                    type="file"
                    placeholder="image"
                    onChange={fileChangeHandler}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className={`px-6 py-2 bg-cyan-400 hover:bg-cyan-300 transition-all duration-500 rounded-xl hover:scale-105 text-white customFont `}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
            {/*footer*/}
          </div>
        </div>
      </div>
    </>
  );
}
