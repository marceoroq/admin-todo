const Star = () => (
  <svg
    className="w-5 h-5 text-yellow-300"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

export default function Rating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center mt-2.5 mb-5">
      {/* Stars */}

      {Array(rating)
        .fill(null)
        .map((_, index) => (
          <Star key={index} />
        ))}

      {/* Rating Number */}
      <span className="text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}
