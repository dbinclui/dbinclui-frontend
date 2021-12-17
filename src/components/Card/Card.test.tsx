import { render, screen } from "@testing-library/react";
import Card from "./index";

describe("Componente do Card", () => {
  test("deve mostrar um Card com texto", () => {
    render(<Card title={""} />);

    const cardTitle = screen.getByText("O que é acessibilidade?");
    expect(cardTitle).toBeInTheDocument();
  });
});
