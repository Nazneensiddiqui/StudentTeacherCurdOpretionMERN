

const Categories = () => {
    const categories = [
      { name: "Academic", color: "bg-blue-400" },
      { name: "Early Career", color: "bg-orange-400" },
      { name: "Edutainment", color: "bg-green-400" },
      { name: "Print Rich", color: "bg-pink-400" },
      { name: "Maker", color: "bg-gray-500" },
      { name: "Info Hub", color: "bg-purple-400" },
    ];
  
    return (
      <div className="flex justify-center gap-4 flex-wrap my-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${cat.color} p-4 rounded-full w-20 h-20 text-white`}
          >
            {cat.name}
          </div>
        ))}
      </div>
    );
  };
export default Categories  