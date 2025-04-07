import { Outlet } from 'react-router-dom'
import { AuthStyles } from './auth.styles'

export default function Auth() {
  return (
    <AuthStyles>
      <div className="content">
          <Outlet />
      </div>
    </AuthStyles>
  )
}
