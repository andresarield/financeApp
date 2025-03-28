// frontend/src/components/Pagination.tsx
import { useState } from 'react';

const Pagination = ({ onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
        Anterior
      </button>
      <span>{currentPage}</span>
      <button onClick={() => setCurrentPage(currentPage + 1)}>
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;