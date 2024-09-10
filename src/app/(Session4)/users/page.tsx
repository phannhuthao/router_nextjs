"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page() {
    const [users, setUsers] = useState<any[]>();
    useEffect(() => {
        axios.get("http://localhost:3000/api/users")
        .then(res => {
            setUsers(res.data)
        })
    }, [])
  return (
    <div>
      <ul>
        {
            users?.map(user => (
                <li key={user.id}>{user.name} - {user.age}</li>
            ))
        }
      </ul>
    </div>
  )
}


// "use client";
// import axios from 'axios';
// import React, { useEffect, useState } from 'react'

// export default function page() {
//     const [product, setProducts] = useState<any[]>();
//     useEffect(() => {
//         axios.get("http://localhost:3000/apitwo/product")
//         .then(res => {
//           setProducts(res.data)
//         })
//     }, [])
//   return (
//     <div>
//       <ul>
//         {
//             product?.map(product => (
//                 <li key={product.id}>{product.product_name} - {product.price}</li>
//             ))
//         }
//       </ul>
//     </div>
//   )
// }
