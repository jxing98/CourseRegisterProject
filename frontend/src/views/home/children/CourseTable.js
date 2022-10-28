import { useState } from 'react'
import {
    Button,
    Card,
    Col,
    DatePicker,
    Form,
    Input,
    Row,
    Select,
    Table
  } from 'antd'
import './CourseTable.css'
import TextArea from 'antd/lib/input/TextArea'

const { Option } = Select

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

// frontend layout for antd parameters
const layout = {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 20
    }
}

// validate message for antd parameters
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
}

function CourseTable(props) {

  // submit function
  const onFinish = (values) => {
    }

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

  // antd table and form
  return (
    <div className="course_table">
      <Card className="course">
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Row>
            <Col span={8}>
              <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item name="year" label="Year">
                <DatePicker
                  picker="year"
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="semester" label="Semester">
                <Select
                  placeholder="Select a option and change input text above"
                  allowClear
                >
                  <Option value="fall">fall</Option>
                  <Option value="spring">spring</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="course"
                label="Course"
                rules={[{ required: true }]}
              >
                <Select
                  placeholder="Select a course"
                  allowClear
                >
                  {courseList.length &&
                    courseList.map((item) => (
                      <Option value={item.id}>{item.name}</Option>
                    ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="Comment">
                <TextArea rows={4} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8} offset={18}>
              <Form.Item>
                <Button >Cancel</Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginLeft: '10px' }}
                >
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      <div className="content">
        <div className="table">
          <Table
            dataSource={courseList}
            columns={columns}
            rowKey="id"
          />
          ;
        </div>
      </div>
    </div>
  )
}

export default CourseTable
