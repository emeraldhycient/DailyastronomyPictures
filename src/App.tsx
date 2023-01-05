import { useState, useEffect } from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import ImageCard from './components/home/ImageCard'
import Background from './components/layout/Background'
import { DailyastronomyPictures } from './services/api/api_manager/astroOfDDay'



type propsData = {
  url: string,
  title: string,
  explanation: string,
  copyright: string,
  date: string
}

function App() {

  const { } = useQuery(["astro"], DailyastronomyPictures)

  const [pictureOfDDay, setpictureOfDDay] = useState<propsData | undefined>(undefined)

  useEffect(() => {
    (async () => {
      try {
        const res = await DailyastronomyPictures();
        setpictureOfDDay(res.data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <Background>
      <ImageCard data={pictureOfDDay} />
    </Background>
  )
}

export default App
