import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");  // نگهداری دسته‌بندی انتخاب شده

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setProducts(result);
      });
  }, []);

  // فیلتر کردن محصولات بر اساس دسته‌بندی انتخاب شده
  const filteredProducts = category
    ? products.filter((item) => item.category === category)
    : products;

  return (
    <div className="flex flex-col items-center justify-center w-full flex-1 bg-gray-100 min-h-screen">
      
      <div className="mb-4">
        <label htmlFor="category" className="mr-2 text-gray-800">Filter by Category:</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border border-gray-400 rounded-md outline-none px-2 py-1 text-sm h-10 focus:border-green-400"
        >
          <option value="">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
        {filteredProducts?.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-md shadow-md p-4 transition-transform transform hover:scale-105"
          >
            <h1 className="text-lg font-semibold mb-2 ">{item.title}</h1>
            <p className="text-gray-800 font-bold mb-2">${item.price}</p>
            <img
              className="h-50 w-full object-cover mb-4 rounded-md"
              src={item.image}
              alt={item.title}
            />
            <span className="text-sm text-gray-500">
              Rating: {item?.rating?.rate}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;