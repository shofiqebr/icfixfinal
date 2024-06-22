import {Link} from "react-router-dom";

const Card = (props) => {
  return (
    <div className="flex justify-center items-center ">
      <div className="lg:flex grid md:grid-cols-4 grid-cols-2 gap-3 justify-center items-center ">
        {props.grpData.map((group, index) => (
          <Link to={`/category/${index}`} key={index}>
            <div className="md:w-40 hover:-translate-y-3 duration-500 rounded-md border-slate-100 border-2 h-48 md:my-12 my-5 shadow-xl flex flex-col justify-between p-2 items-center ">
              <div className="w-24 cardBackground">
                <img className="p-3" src={`https://erp.icfix.com.bd${group.image}`} alt="" />
              </div>
              <div className="font-bold text-lg text-center">{group.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
