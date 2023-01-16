import { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { clearVideos } from '../store'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos'
import { HomePageVideos } from '../Types'
import Spiner from './Spiner'

const Home = () => {
  const dispatch = useAppDispatch()
  const videos = useAppSelector((state) => state.youtubeApp.videos)

  useEffect(() => {
    return () => {
      dispatch(clearVideos())
    }
  },[])

  useEffect(() => {
    dispatch(getHomePageVideos(false))
  }, [dispatch])
  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: '7.5vh' }}>
        <Navbar />
      </div>
      <div className="flex " style={{ height: '92.5vh' }}>
        <SideBar />

        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spiner />}
            height={900}
          >
            <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
              {videos.map((item: HomePageVideos) => (
                <Card data={item} key={item.videoId} />
              ))}
            </div>
          </InfiniteScroll>
        ) : (
          <Spiner />
        )}
      </div>
    </div>
  )
}

export default Home
