function ImagePoint({ label, imageURL }) {
  return (
    <div className="flex items-center my-5 ml-1 max-md:flex-col">
      <img src={imageURL} className="w-[60px] h-[60px]" />
      <p className="font-biriyani font-semibold text-2xl ml-3 max-md:my-4">
        {label}
      </p>
    </div>
  );
}

export default ImagePoint;
