import './Button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button