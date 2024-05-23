export type ModalButtonType = {
  label: string
  color: string
  className?: string
  type?: "button" | "submit" | "reset"
  onClick?: () => void
}
