import React from 'react'

export default function page({params}: {
    params: {
        blogid: string
    }
}) {
  return (
    <div>
        <p>Bạn đang blog với đường dẫn: {params.blogid}</p>
    </div>
  )
}
