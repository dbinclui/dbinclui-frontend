import './styles.css';

export default function App() {
  return (
    <div className="divisoes">
      <Card title="O que é acessibilidade?" />
      <Card title="Tipos de acessibilidade" />
      <Card title="Boas práticas para inclusão" />
      <Card title="Acessibilidade em eventos" />
      <Card title="Acessibilidade em matéria" />
      <Card title="Glossário" />
    </div>
  );
}

function Card(props: any) {
  return (
    <div className="card">
      <div className="cardBody">
        <h2 className="cardTitle">{props.title}</h2>
      </div>
    </div>
  );
}
