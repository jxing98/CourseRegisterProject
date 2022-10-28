import { useEffect, useState } from 'react'
import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  message,
  Row,
  Select
} from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import axios from 'axios'

const { Option } = Select

// frontend layout for antd parameters
const layout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 18
  }
}

// validate message for antd parameters
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!'
  },
  number: {
    range: '${label} must be between ${min} and ${max}'
  }
}

function CourseForm(props) {
  const [form] = Form.useForm()
  const [selectCourseList, setSelectCourseList] = useState([])
  const [courseInfo, setCourseInfo] = useState({})
  const [searchInfo, setSearchInfo] = useState({})

  useEffect(() => {
    _getAllCourse({ pageSize: 1000, page: 1 })
  }, [])

  const handleReset = () => {
    form.resetFields()
    props.handlesearch({})
    _getAllCourse({ pageSize: 1000, page: 1 })
  }

  const onYearChange = (date, dateString) => {
    setSearchInfo({
      ...searchInfo,
      year: dateString
    })
    handleSearchAndGetCourse({ ...searchInfo, year: dateString })
  }

  const onSemesterChange = (value) => {
    setSearchInfo({
      ...searchInfo,
      semester: value
    })
    handleSearchAndGetCourse({ ...searchInfo, semester: value })
  }

  const handleSearchAndGetCourse = (searchInfo) => {
      
    // Delete this string when the searchInfo is empty
    for (var key in searchInfo) {
      if (!searchInfo[key]) {
        delete searchInfo[key]
      }
    }
    props.handlesearch(searchInfo)

    // When re-selecting year and semester, set course blank
    form.setFieldValue('course', '')
    _getAllCourse(searchInfo)
  }

  const onCourseChange = (value) => {
    setCourseInfo({
      ...courseInfo,
      course: value
    })
  }

  const onCommentInput = (value) => {
    setCourseInfo({
      ...courseInfo,
      comment: value.target.value
    })
  }

  const onFinish = (values) => {

    // Extract the selected course object
    const course = selectCourseList.filter(
      (item) => item.id === courseInfo.course
    )[0]
    if (course.capacity >= 0) {
      _addMyCourse({
        comment: courseInfo.comment || '',
        courseId: courseInfo.course,
        name: values.name,
        email: values.email
      })
    } else {
      message.error('Sorry, the class is full, and you are in waitlist')
    }
  }

  const _getAllCourse = (data) => {
    getRequest('/course', data).then((result) => {
      setSelectCourseList(result.data.rows)
    })
  }

  const _addMyCourse = (data) => {
    postRequest('/course', data).then((result) => {
      if (result.code === 200) {
        message.success(
          'Successfully registered a new user and successfully enrolled a course'
        )
        handleReset()
      } else {
        message.error(result.message)
      }
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

  const postRequest = (url, data) => {
    return new Promise((resolve) => {
      axios.post(`http://localhost:8000${url}`, data).then((res) => resolve(res.data))
    })
  }
  
  return (
    <div className='course_form'>
      <Card className='course'>
        <Form
          {...layout}
          form={form}
          name='nest-messages'
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Row>
            <Col span={8}>
              <Form.Item name='name' label='Name' rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name='email'
                label='Email'
                rules={[{ required: true, type: 'email' }]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Form.Item name='year' label='Year'>
                <DatePicker
                  onChange={onYearChange}
                  picker='year'
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name='semester' label='Semester'>
                <Select
                  placeholder='Select a semester'
                  onChange={onSemesterChange}
                  allowClear
                >
                  <Option value='fall'>fall</Option>
                  <Option value='spring'>spring</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name='course'
                label='Course'
                rules={[{ required: true }]}
              >
                <Select
                  placeholder='Select a course'
                  onChange={onCourseChange}
                  allowClear
                  value={courseInfo.course}
                >
                  {selectCourseList.length &&
                    selectCourseList.map((item) => (
                      <Option value={item.id} key={item.id}>
                        {item.name}({item.courseId})
                      </Option>
                    ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label='Comment'>
                <TextArea rows={4} onInput={onCommentInput} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={8} offset={18}>
              <Form.Item>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button onClick={handleReset}>Reset</Button>
                  <Button
                    type='primary'
                    htmlType='submit'
                    style={{ marginLeft: '10px' }}
                  >
                    Submit
                  </Button>
                </div>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  )
}

export default CourseForm
