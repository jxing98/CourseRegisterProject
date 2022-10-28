import CourseTable from './children/courseTable/CourseTable'
import CourseForm from './children/courseForm/CourseForm'
import './Home.css'
import { useState } from 'react'

function Home() {
  const [searchInfo, setSearchInfo] = useState({})

  const handlesearch = (search) => {
    setSearchInfo(search)
  }
  return (
    <div className='home'>
      <CourseForm handlesearch={handlesearch} />
      <CourseTable searchInfo={searchInfo} />
    </div>
  )
}

export default Home
