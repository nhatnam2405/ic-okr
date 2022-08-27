import './App.less'
import 'antd/dist/antd.css'
import Menu from './components/Menu'
import { Col, Row ,PageHeader} from 'antd'
function App() {
  return (
    <div className="App">
      <Row>
        <PageHeader
      className="site-page-header"
      onBack={() => null}
      title="Title"
      subTitle="This is a subtitle"
    />
      </Row>
      <Row>
        <Col span={18} >
          <Menu></Menu>
        </Col>
        <Col span={6}></Col>
      </Row>
    </div>
  )
}

export default App
