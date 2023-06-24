import { FC } from "react";

type CardProps = {
  children: React.ReactNode;
  reverse?: boolean;
  styled?: boolean;
};

const Card: FC<CardProps> = ({ children, reverse, styled }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "#000",
        margin: styled ? "90px 0 20px" : "20px 0 20px",
      }}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
  styled: false,
};

export default Card;
