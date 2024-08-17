import rating from '../../public/star-icon.png'
import Image from 'next/image'

const Rating = ({ratings}:{ratings:any}) => {
    ratings= JSON.parse(ratings)
  return (
    <div className='flex items-center'>
        {
            Array(4).fill(1).map(dummyItem=><Image key={dummyItem} src={rating} height={20} width={20 } alt=''></Image>)
        }
        <h4 className='text-[#007185] ml-2 font-medium'>{ratings.count}</h4>
    </div>
  )
}

export default Rating
