import { Container } from "./styles"

export function Textarea({ value, onChange, ...rest }) {
  return (
    <Container value={value} {...rest} onChange={onChange}></Container>
  )
}