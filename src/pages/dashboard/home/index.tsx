import { Flex, Typography } from 'antd'
import { HomeStyles } from './home.styles'
import ThemeSwitcher from '@/components/ThemeSwitcher'
import { Button } from '@/components/Ant'

export default function Home() {
  return (
    <HomeStyles>
      <Flex gap={24} align="center" vertical>
        <Typography.Title level={1}>React Boilerplate</Typography.Title>
        <Flex gap={32} wrap align="center" justify="center">
          <img src="/images/antd.avif" alt="ant design logo" width={150} height={150} />
          <img
            src="/images/styled-components.avif"
            alt="styled components logo"
            width={150}
            height={150}
          />
        </Flex>
        <Typography.Title level={2}>Ant Design + Styled Components</Typography.Title>
        <Typography.Text>
          Also checkout{' '}
          <Button type="link" href="/auth" color="blue">
            auth
          </Button>{' '}
          pages.
        </Typography.Text>
        <ThemeSwitcher />
      </Flex>
    </HomeStyles>
  )
}
