import './Input.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="field">
      {label && <label className="field-label">{label}</label>}
      <input
        className={`input ${error ? 'input-error' : ''} ${className}`.trim()}
        {...props}
      />
      {error && <span className="field-error">{error}</span>}
    </div>
  )
}

export default Input