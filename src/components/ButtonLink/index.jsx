import { Container } from "./styles";

export function ButtonLink({ icon: Icon, children, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {children}
    </Container>
  );
}
