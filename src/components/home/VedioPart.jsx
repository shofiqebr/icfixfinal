const VedioPart = () => {
  return (
    <div className="player-wrapper md:w-[100%] w-[80%] mx-auto md:h-[700px] h-[300px] my-10">
      <iframe
        width="100% "
        height="100%"
        src="https://www.youtube.com/embed/cBYGR8CGDd0?si=BoZYE8-TPuOzUhkK"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
    </div>
  );
};

export default VedioPart;
