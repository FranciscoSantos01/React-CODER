import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export const SkeletonCard = () => {
  return (
    <div className='center'>
      <div className="columns">
      <Skeleton count={4} width={450} height={50} />
      <Skeleton count={1} width={450} height={300} />
      </div>

    </div>
  )
}

export const ProductLoader = () => {
    return (
      <section className='products-container'>
        <div>
         <Skeleton height={250} width={250} />
         <Skeleton count={5} width={250} />
         </div>
         <div>
         <Skeleton height={250} width={250} />
          <Skeleton count={5} width={250} />
          </div>
          <div>
         <Skeleton height={250} width={250} />
          <Skeleton count={5} width={250} />
          </div>
      </section>
    )
  }