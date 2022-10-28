import { useEffect, useState } from 'react'
import {
  Card,
  Table
} from 'antd'
import axios from 'axios'
import './CourseTable.css'

// label for each column
const columns = [
  {
    title: 'Course ID',
    dataIndex: 'courseId',
    key: 'courseId'
  },
  {
    title: 'Course Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Course Capacity',
    dataIndex: 'capacity',
    key: 'capacity'
  },
  {
    title: 'Course Year',
    dataIndex: 'year',
    key: 'year'
  },
  {
    title: 'Course Semester',
    dataIndex: 'semester',
    key: 'semester'
  }
]

function CourseTable(props) {
  const [courseList, setCourseList] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    _getCourse({ pageSize: 5, page: 1 })
  }, [])

  useEffect(() => {
    _getCourse({ pageSize: 5, page: 1, ...props.searchInfo })
  }, [props.searchInfo])

  const paginationChange = (page, pageSize) => {
    _getCourse({ page, pageSize, ...props.searchInfo })
  }

  const _getCourse = (data) => {
    getRequest('/course', data).then((result) => {
      setCourseList(result.data.rows)
      setTotal(result.data.count)
    })
  }

  const getRequest = (url, params) => {
    return new Promise((resolve) => {
      axios
        .get(`http://localhost:8000${url}`, {
          params
        })
        .then((res) => resolve(res.data))
    })
  }

  return (
    <div className='course_table'>
      <div className='content'>
        <Card className='table'>
          <Table
            dataSource={courseList}
            columns={columns}
            pagination={{
              total: total,
              onChange: paginationChange,
              defaultPageSize: 5
            }}
            rowKey='id'
          />
        </Card>
      </div>
    </div>
  )
}

export default CourseTable
