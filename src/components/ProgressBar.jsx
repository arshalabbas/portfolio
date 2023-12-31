import { useEffect } from "react";

const ProgressBar = ({ label, percentage }) => {
  useEffect(() => {
    const toFillItems = document.querySelectorAll(".fill-bar");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // entry.target.classList.toggle("filled-bar", entry.isIntersecting);
        if (entry.isIntersecting) entry.target.classList.add("filled-bar");
      });
    });

    toFillItems.forEach((el) => observer.observe(el));

    return () => toFillItems.forEach((el) => observer.unobserve(el));
  }, []);
  return (
    <div className="flex items-center">
      <div className="max-md:w-full lg:w-[70%] w-[75%] bg-gray-400 my-3 flex">
        <div style={{ width: `${percentage}%` }} className="">
          <div className="bg-white py-1 fill-bar">
            <p className="text-black ml-3 font-biriyani font-bold to-reveal from-l">
              {label}
            </p>
          </div>
        </div>
      </div>
      <p className="mx-2 font-biriyani">{percentage}%</p>
    </div>
  );
};

export default ProgressBar;
