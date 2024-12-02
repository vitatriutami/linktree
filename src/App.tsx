function App() {
  const links = [
    {
      color: "bg-red-300",
      text: "Follow ig",
      link: "https://github.com",
    },
    {
      color: "bg-red-300",
      text: "Follow ig",
      link: "https://github.com",
    },
  ];

  return (
    <div className="w-full h-screen bg-yellow-300 flex items-center justify-center">
      <div className="max-w-2xl mx-auto flex flex-col gap-5">
        {/* image */}
        <div className="text-center p-3">
          <h1 className="text-4xl font-bold">Vita Tri Utami</h1>
          <p className="text-lg mt-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste,
            ducimus!
          </p>
        </div>
        <div className="flex flex-col gap-10">
          {links.map(({ text, color, link }, index) => {
            return (
              <a href={link} key={index} target="_blank">
                <div
                  className={`w-80 sm:w-96 mx-auto ${color} text-center text-xl font-bold py-3 border-2 border-black shadow-custom hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all`}
                >
                  {text}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
