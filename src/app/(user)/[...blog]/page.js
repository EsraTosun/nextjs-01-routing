import React from 'react'

export default function BlokSayfasi({params}) {
  console.log(params);
  
  return (
    <div>
        Blok Sayfasi : {params.blog}
    </div>
  )
}
