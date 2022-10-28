import { useState } from 'react'
import { Table } from 'antd'

import './CourseTable.css'

// label for each column
const columns = [
  {
    title: 'Course Id',
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

  // dummy data
  const [courseList] = useState([
    {
      name: 'Formal Language Theory',
      capacity: '20',
      year: '2020',
      semester: 'fall',
      courseId: '501'
    },
    {
      name: 'Logic in Computer Science',
      capacity: '30',
      year: '2020',
      semester: 'spring',
      courseId: '513'
    },
    {
      name: 'Combinatorics',
      capacity: '0',
      year: '2021',
      semester: 'fall',
      courseId: '514'
    },
    {
      name: 'Algorithms for Data Science',
      capacity: '20',
      year: '2021',
      semester: 'spring',
      courseId: '518'
    },
    {
      name: 'Quantum Information Systems',
      capacity: '30',
      year: '2021',
      semester: 'spring',
      courseId: '590'
    },
  ])

  return (
    <div className="course_table">
      <div className="table">
        <Table dataSource={courseList} columns={columns} rowKey="id" />;
      </div>
    </div>
  )
}

export default CourseTable
