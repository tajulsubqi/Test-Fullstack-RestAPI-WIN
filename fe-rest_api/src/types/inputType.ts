export type InputType = {
  type: string
  label: string
  name?: string
  placeholder?: string
  onClick?: () => void
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  value?: any
  className?: string
}
