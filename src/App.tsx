import { useState, useEffect } from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import ImageCard from './components/home/ImageCard'
import Background from './components/layout/Background'
import { DailyastronomyPictures } from './services/api/api_manager/astroOfDDay'



// type propsData = {
//   url: string,
//   title: string,
//   explanation: string,
//   copyright: string,
//   date: string
// }

function App() {

  const { data, isLoading, isError, error } = useQuery(["astro"], DailyastronomyPictures)

  // console.log(data?.data)

  // const [pictureOfDDay, setpictureOfDDay] = useState<propsData | undefined>(undefined)

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await DailyastronomyPictures();
  //       setpictureOfDDay(res.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })()
  // }, [])

  // if (isError) {
  //   return <span>Error: {error?.message}</span>
  // }


  return (
    <Background>
      {
        isLoading ? <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> :
          <ImageCard data={data?.data} />
      }
    </Background>
  )
}

export default App
