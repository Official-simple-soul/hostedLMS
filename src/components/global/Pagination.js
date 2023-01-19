export default function Pagination({
  postsPerPage,
  paginateFront,
  paginateBack,
  currentPage,
  totalPosts,
  paginate,
}) {
  const pageNumbers = [];
  const maxNumber = Math.ceil(totalPosts / postsPerPage);
  for (let i = 1; i <= maxNumber; i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="py-3">
      {maxNumber > 1 && (
        <div>
          <nav
            className="relative z-0 flex gap-x-4 text-[#585858]"
            aria-label="Pagination"
          >
            {currentPage == 1 ? (
              <p></p>
            ) : (
              <a
                onClick={() => {
                  paginateBack();
                }}
                href="#"
                className="relative inline-flex items-center text-xs font-medium"
              >
                <span>Prev</span>
              </a>
            )}
            <ul className="flex pl-0 rounded list-none">
              <li className="gap-x-4 flex items-center">
                {pageNumbers.map((number) => (
                  <a
                    key={number}
                    onClick={() => {
                      paginate(number);
                    }}
                    href="#"
                    className={
                      currentPage === number
                        ? "bg-[#0D6EFD] text-white relative inline-flex items-center px-3 py-2 text-xs font-medium rounded"
                        : "items-center text-xs"
                    }
                  >
                    {number}
                  </a>
                ))}
              </li>
            </ul>
            {currentPage < maxNumber && (
              <a
                onClick={() => {
                  paginateFront();
                }}
                href="#"
                className="relative inline-flex items-center text-xs"
              >
                <span>Next</span>
              </a>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
