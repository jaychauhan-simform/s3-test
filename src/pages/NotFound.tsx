import { Button, Flex, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const navigate = useNavigate()
  return (
    <Flex align="center" justify="center" style={{ height: '100vh' }} vertical>
      <img src="/images/logo.svg" alt="logo" className="d-inline-block" width={200} />
      <Typography.Title level={1} className="mt-24">
        Nothing to see here!
      </Typography.Title>
      <Typography.Paragraph>
        <Button type="link" onClick={() => navigate('/')}>
          Go back to the home page
        </Button>
      </Typography.Paragraph>
    </Flex>
  )
}

export default NotFound
