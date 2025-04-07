import { Typography } from 'antd'
import { InputPassword, Form, Input, Button, FormItem } from '@/components/Ant'

export default function Signup() {
  return (
    <div>
      <Typography.Title>Signup</Typography.Title>
      <Typography.Paragraph>
        Already have an account?{' '}
        <Button type="link" href="/auth/signin">
          Sign In
        </Button>
      </Typography.Paragraph>
      <Form layout="vertical">
        <FormItem label="First Name" required>
          <Input type="text" placeholder="Enter first name" />
        </FormItem>
        <FormItem label="Last Name" required>
          <Input type="text" placeholder="Enter last name" />
        </FormItem>
        <FormItem label="Email" required>
          <Input type="email" placeholder="Enter email adress" />
        </FormItem>
        <FormItem label="Password" required>
          <InputPassword type="password" placeholder="Enter password" />
        </FormItem>
        <FormItem label="Confirm Password" required>
          <InputPassword type="password" placeholder="Enter password" />
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </FormItem>
      </Form>
    </div>
  )
}
