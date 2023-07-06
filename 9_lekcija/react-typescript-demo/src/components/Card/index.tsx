import { FC } from "react";

type CardType = {
  title: string;
  description: string;
};

const Card: FC<CardType> = ({ title, description }) => (
  <div>
    <h2>{title}</h2>
    <p>{description}</p>
    <p data-testid="additional-content">Additional content</p>
    {[1, 2, 3].map((item) => (
      <p key={item}>{item}</p>
    ))}
  </div>
);

export default Card;
