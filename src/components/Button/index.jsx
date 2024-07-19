import { Container } from "./styles";

export function Button({ icon: Icon, children, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon size={25} />}
      {children}
    </Container>
  );
}
