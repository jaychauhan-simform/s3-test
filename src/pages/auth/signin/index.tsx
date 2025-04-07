import { Typography } from "antd";
import { Input, FormItem, Form, InputPassword, Button } from "@/components/Ant";
import { Divider } from "@/components/Ant/Divider";

export default function Signin() {
  return (
    <>
      <Typography.Title level={2}>Sign In</Typography.Title>
      <Divider/>  
      <Form layout="vertical">
        <FormItem label="Email"  >
          <Input placeholder="Email" />
        </FormItem>
        <FormItem label="Password"  >
          <InputPassword placeholder="Password" />
        </FormItem>
        <FormItem>
          <Button size='large' type="primary" htmlType="submit" block>
          Continue →
          </Button>
        </FormItem>
      </Form>
      <Divider/>
      <Typography.Paragraph>
      Interested in signing up?{' '}
        <Button type="link" href="/contact-us">
        Contact us.
        </Button>
      </Typography.Paragraph>
      </>
  );
}
