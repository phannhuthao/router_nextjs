// import React from 'react'

// export default function page() {
//     return (
//         <div>
//             <form method='get'>
//                 <input name='name' type='text' placeholder='Tìm kiếm theo tên'></input>
//                 <input name='category' type='text' placeholder='Tìm kiếm theo danh mục'></input>
//                 <button type='submit' style={{ backgroundColor: 'black', color: 'white', border: '1px soild black', borderRadius: '6px' }}>Tìm kiếm</button>
//             </form>
//         </div>
//     )
// }

// BT4
'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

export default function Page() {
    const searchParams = useSearchParams();

    const name = searchParams.get('name') || '';
    const category = searchParams.get('category') || '';

    return (
        <div>
            <form method='get'>
                <input name='name' type='text' placeholder='Tìm kiếm theo tên'></input>
                <input name='category' type='text' placeholder='Tìm kiếm theo danh mục'></input>
                <button type='submit' style={{ backgroundColor: 'black', color: 'white', border: '1px solid black', borderRadius: '6px' }}>Tìm kiếm</button>
            </form>
            <div>
                <h3>Kết quả tìm kiếm:</h3>
                <p><strong>Tên:</strong> {name}</p>
                <p><strong>Danh mục:</strong> {category}</p>
            </div>
        </div>
    );
}

