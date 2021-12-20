import { render, screen } from "@testing-library/react";
import AcessibilityGuide from "../../pages/acessibility-guide/index";
import CardAcessibilidade from "../../components/Card/index";

describe("Página do Guia de Acessibilidade", () => {
test("deve mostrar a página do Guia de Acessibilidade", () => {
  render(<AcessibilityGuide />);

  const pageTitle = screen.getByText("Guia de Acessibilidade");
  expect(pageTitle).toBeInTheDocument();
})});