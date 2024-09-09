// import React from 'react';

// export default function Post() {
//   return (
//     <div>
//       <form method='get'>
//         <input type='text' name='search' />
//         <button type='submit'>Tìm kiếm</button>
//       </form>
//     </div>
//   );
// }


// BT2
'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function Post() {
  const searchParams = useSearchParams();


  const name = searchParams.get('search') || ''; 

  return (
    <div>
      <h1><strong>Search Value: </strong>{name}</h1>
      <form method='get'>
        <input type='text' name='search' placeholder='Tìm kiếm...'/>
        <button type='submit'>Tìm kiếm</button>
      </form>
    </div>
  );
}
