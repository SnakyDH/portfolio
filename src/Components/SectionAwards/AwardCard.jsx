const AwardCard = ({ title, imgsArray, date, desc }, props) => {
  return (
    <div className="bg-slate-200 rounded-3xl p-5 shadow-md shadow-blue-900">
      <h3 className="text-xl font-bold text-center pb-5">{title}</h3>
      <p>{desc}</p>
      <div className="flex gap-5 justify-between">
        <p className="flex self-center pb-3 font-bold">{date}</p>
        <div className="flex lg:gap-5 justify-between">
          {imgsArray.map((img) => {
            return (
              <img
                className="w-20 h-20 rounded-full"
                src={img.iconLink}
                alt={img.iconAlt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export { AwardCard };
