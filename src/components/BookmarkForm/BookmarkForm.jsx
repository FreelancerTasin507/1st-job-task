import { useLoaderData } from "react-router-dom";

const BookmarkForm = () => {
  const bookmarkedData = useLoaderData();
  console.log(bookmarkedData);
  const { name, premiered, genres, status, image } = bookmarkedData;

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const UserName = e.target.name.value;
    const email = e.target.email.value;
    const ticketAmount = e.target.ticketAmount.value;
    const moiveName = name
    const formData = { UserName, email, ticketAmount ,moiveName};

   // Retrieve existing form data array from local storage
   const existingFormData = JSON.parse(localStorage.getItem("form-data")) || [];

   // Add the new form data to the array
   existingFormData.push(formData);

   // Save the updated form data array to local storage
   localStorage.setItem("form-data", JSON.stringify(existingFormData));

    from.reset();

    console.log(name, email, ticketAmount);
  };

  return (
    <div className="mt-20">
      <div className=" lg:mx-20 rounded overflow-hidden shadow-2xl md:flex items-center gap-10 mt-10 p-5">
        <img className="lg:w-[40%] md:w-[40%] w-full lg:h-[90vh]" src={image?.medium} alt={name} />
        <div className="lg:w-[50%]">
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-2">Movie Name : {name}</div>
            <hr className="border-2 border-black w-[70%] mb-4" />
            <div className="text-sm mb-4 flex gap-6 font-bold">
              <p className="text-gray-600">Premiered: {premiered}</p>
              <p className="text-gray-600">Genres: {genres.join(", ")}</p>
              <p className="text-gray-600">Status: {status}</p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="lg:max-w-md mx-auto shadow-2xl p-10"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="ticketAmount"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Movie Name
                </label>
                <input
                  type="text"
                  id="movieName"
                  value={name}
                  name="movieName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your Ticker Amount"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="ticketAmount"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Ticket Amount
                </label>
                <input
                  type="number"
                  id="ticketAmount"
                  name="ticketAmount"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your Ticker Amount"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button type="submit" className="btn btn-primary">
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookmarkForm;
