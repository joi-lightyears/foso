import Link from 'next/link';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
  // Handle page change
  const handlePageChange = (page: number): void => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Calculate page numbers to show
  const getPageNumbers = (): number[] => {
    const pageNumbers: number[] = [];
    
    // Always show first page
    pageNumbers.push(1);
    
    // Current page neighborhood
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      pageNumbers.push(i);
    }
    
    // Always show last page if there are more than 1 page
    if (totalPages > 1) {
      pageNumbers.push(totalPages);
    }
    
    // Remove duplicates and sort
    return [...new Set(pageNumbers)].sort((a, b) => a - b);
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-between w-full ">
      {/* Previous Page Button */}
      <Link 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          handlePageChange(currentPage - 1);
        }}
        className={`flex items-center text-gray-500 hover:text-blue-500 ${currentPage <= 1 ? 'pointer-events-none opacity-50' : ''}`}
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Trang trước
      </Link>

      {/* Page Numbers */}
      <div className="flex mx-4">
        {pageNumbers.map((page, index) => {
          // Add ellipsis if there are gaps in the sequence
          if (index > 0 && pageNumbers[index] - pageNumbers[index - 1] > 1) {
            return (
              <div key={`ellipsis-${index}`} className="flex items-center ">
                <span className="px-2 text-gray-400">...</span>
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-8 h-8 mx-1 flex items-center justify-center rounded ${
                    currentPage === page 
                      ? 'bg-green-100 text-green-800 font-medium' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              </div>
            );
          }
          
          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-8 h-8 mx-1 flex items-center justify-center rounded  ${
                currentPage === page 
                  ? 'bg-green-100 text-green-800 font-medium' 
                  : 'text-gray-600 hover:bg-gray-100 '
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Page Button */}
      <Link 
        href="#" 
        onClick={(e) => {
          e.preventDefault();
          handlePageChange(currentPage + 1);
        }}
        className={`flex items-center text-gray-500 hover:text-blue-500 ${currentPage >= totalPages ? 'pointer-events-none opacity-50' : ''}`}
      >
        Trang kế tiếp
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
};
export default Pagination;