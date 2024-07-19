import { Container, EmptyStar, Star } from "./styles";

const starsRepresentation = [1, 2, 3, 4, 5];

export function Rate({ userRate, starSize }) {
  return (
    <Container>
      {starsRepresentation.map((starNumber) => {
        if (starNumber <= userRate) {
          return <Star size={starSize} key={starNumber} />;
        }

        return <EmptyStar size={starSize} key={starNumber} />;
      })}
    </Container>
  );
}
