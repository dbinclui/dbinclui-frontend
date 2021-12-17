import { render, screen } from "@testing-library/react";
import Card from "./index";
import AcessibilityGuide from "../../pages/acessibility-guide/index";
import CardAcessibilidade from "../../components/Card/index";

describe("Componente do Card", () => {
  test("deve mostrar um Card com texto", () => {
    render(<Card title={""} />);

    const cardTitle = screen.getByText("O que é acessibilidade?");
    expect(cardTitle).toBeInTheDocument();
  });

  test("deve mostrar a página do Guia de Acessibilidade", () => {
    render(<AcessibilityGuide />);

    const pageTitle = screen.getByText("Guia de Acessibilidade");
    expect(pageTitle).toBeInTheDocument();
  });

  test("deve mostrar um Card com texto", () => {
    expect(CardAcessibilidade).toBeTruthy();
  });
});

// describe("Página Guia de Acessibilidade", () => {
//   test("deve mostrar a página do Guia de Acessibilidade", () => {
//     render(<AcessibilityGuide />);

//     const pageTitle = screen.getByText("Guia de Acessibilidade");
//     expect(pageTitle).toBeInTheDocument();
//   });
// });

// describe("Função dos cards do Guia de Acessibilidade", () => {
//   test("deve mostrar um Card com texto", () => {
//     expect(CardAcessibilidade).toBeTruthy();
//   });
// });
