import whychooseImg from "../../assets/whychoose.png";

const WhycChoose = () => {
  return (
    <div className="pb-10 px-3 md:pt-32 lg:pt-0 pt-[650px]">
      <h1 className="md:text-4xl text-3xl text-center py-10">
        Why Choose <span className="text-[#f96331]">ICFIX ?</span>
      </h1>

      <div className="flex justify-center md:flex-row flex-col items-center md:gap-10 lg:gap-0">
        <div>
          <div>
            <h1 className="text-[#f96331] text-3xl mt-5">Free Diagnostic</h1>
            <p className="my-5">
              Only we are providing you with a free diagnostic <br />
              check-up on your Apple devices where all of the <br /> software and hardware issues will be checked by
              <br /> our expert technicians.
            </p>
          </div>
          <div>
            <h1 className="text-[#f96331] text-3xl mt-10">Free Diagnostic</h1>
            <p className="my-5">
              Only we are providing you with a free diagnostic <br />
              check-up on your Apple devices where all of the <br /> software and hardware issues will be checked by
              <br /> our expert technicians.
            </p>
          </div>
          <div>
            <h1 className="text-[#f96331] text-3xl mt-10">Free Diagnostic</h1>
            <p className="my-5">
              Only we are providing you with a free diagnostic <br />
              check-up on your Apple devices where all of the <br /> software and hardware issues will be checked by
              <br /> our expert technicians.
            </p>
          </div>
        </div>
        <div className="lg:block hidden">
          <img className="h-[500px]" src={whychooseImg} alt="" />
        </div>

        <div>
          <div className="text-right">
            <h1 className="text-[#f96331] text-3xl lg:mt-5">Free Diagnostic</h1>
            <p className="my-5">
              Only we are providing you with a free diagnostic <br />
              check-up on your Apple devices where all of the <br /> software and hardware issues will be checked by
              <br /> our expert technicians.
            </p>
          </div>
          <div className="text-right">
            <h1 className="text-[#f96331] text-3xl mt-5">Free Diagnostic</h1>
            <p className="my-5">
              Only we are providing you with a free diagnostic <br />
              check-up on your Apple devices where all of the <br /> software and hardware issues will be checked by
              <br /> our expert technicians.
            </p>
          </div>
          <div className="text-right">
            <h1 className="text-[#f96331] text-3xl mt-5">Free Diagnostic</h1>
            <p className="my-5">
              Only we are providing you with a free diagnostic <br />
              check-up on your Apple devices where all of the <br /> software and hardware issues will be checked by
              <br /> our expert technicians.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhycChoose;
