import React, { useEffect, useState } from "react";
import { fetchPosts } from "../components/PostsData";

function ProfilePage() {
  const [userInfo, setUserInfo] = useState({});
  const [products, setProducts] = useState([]);
  const [services, setServices] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch data from API
      const posts = await fetchPosts();

      // Extract user info from the first post
      const { name, residence, phoneNumber, bio } = posts[0]; // Assuming the user info is in the first post

      // Set user info
      setUserInfo({ name, residence, phoneNumber, bio });

      // Filter posts by type
      const productPosts = posts.filter((post) => post.type === "product");
      const servicePosts = posts.filter((post) => post.type === "service");
      const eventPosts = posts.filter((post) => post.type === "event");

      // Set products, services, and events
      setProducts(productPosts);
      setServices(servicePosts);
      setEvents(eventPosts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ml-20">
      <div className="w-full ml-80 mr-40 bg-white rounded-lg shadow-lg mb-8 p-8">
        {/* Underline above Personal Info */}
        <div className="border-b-2 border-green-500 mb-4 py-8"></div>
        {/* Personal Info */}
        <div className="flex items-center justify-center mb-4 py-4">
          <img
            src={userInfo.imageUrl} // Assuming there's an imageUrl in the user info
            alt="Profile picture"
            className="rounded-md shadow-md  w-60 h-60 mr-4 p-2"
          />
          <div>
            <h2 className="text-xl font-semibold mb-1">
              Name: {userInfo.name}
            </h2>
            <p className="mb-1 text-green-600">
              Phone Number: {userInfo.phoneNumber}
            </p>
            <p className="text-gray-400">Bio: {userInfo.bio}</p>
            <p className="mb-1 text-lg">Residence: {userInfo.residence}</p>
          </div>
        </div>
        {/* Divider Line */}
        <div className="border-b-2 border-green-500 mb-4 p-8"></div>
        {/* Posts */}
        <div className="posts">
          <h1 className="text-5xl text-green-600 mb-8 p-4">Posts</h1>
          <div className="flex justify-between">
            <CategoryCard
              title="Products"
              onClick={() => setSelectedCategory("products")}
              selected={selectedCategory === "products"}
            />
            <CategoryCard
              title="Services"
              onClick={() => setSelectedCategory("services")}
              selected={selectedCategory === "services"}
            />
            <CategoryCard
              title="Events"
              onClick={() => setSelectedCategory("events")}
              selected={selectedCategory === "events"}
            />
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {selectedCategory === "products" &&
              products.map((product) => (
                <PostItem key={product.id} item={product} />
              ))}
            {selectedCategory === "services" &&
              services.map((service) => (
                <PostItem key={service.id} item={service} />
              ))}
            {selectedCategory === "events" &&
              events.map((event) => <PostItem key={event.id} item={event} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

const CategoryCard = ({ title, onClick, selected }) => (
  <div
    className={`cursor-pointer ${
      selected ? "border-gray-300" : ""
    } hover:border-green-500 hover:bg-gray-50`}
    onClick={onClick}
    style={{ margin: "auto" }} // Added margin auto
  >
    <p className="text-lg font-semibold">{title}</p>
  </div>
);

const PostItem = ({ item }) => (
  <div className="bg-white rounded-md shadow-md overflow-hidden">
    <img
      src={item.imageUrl} // Assuming there's an imageUrl in the item data
      alt={item.name}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
      <p className="text-gray-600">Rating: {item.rating}</p>
      <p className="text-gray-600">Date: {item.date}</p>
    </div>
  </div>
);

export default ProfilePage;
