export interface InputProps {
  type: string
  label: string
  name?: string
  placeholder?: string
  onClick?: () => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: string | number
  className?: string
}
