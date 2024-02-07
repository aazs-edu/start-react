import React from 'react'
import notfound from '../../assets/imgs/404.png'

export default function NoPage() {
  return (
    <section className="d-flex justify-content-center align-items-center py-5">
        <div>NoPage 404</div>
        <img src={notfound} alt="" />
    </section>

  )
}
