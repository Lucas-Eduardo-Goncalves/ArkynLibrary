import { Select } from "arkyn_components";

export function View() {
  return (
    <>
      <h1>Arkyn</h1>

      <Select options={[{ label: "1", value: "1" }]} />

      <p>
        Arkyn é um conjunto de bibliotecas elaborado com o propósito específico
        de simplificar e padronizar a produção de websites no contexto do
        ambiente de <code>Remix</code>. Disponibilizamos uma ampla gama de
        componentes, hooks e utilidades SSR, seguindo os princípios essenciais
        da web. Nossa meta é evitar redundâncias ao aplicar o conceito de não
        recriar soluções já existentes.
      </p>
      <p>
        Para processuir dentro desse princípio, utilizamos a base: Variáveis
        CSS, O uso de caixas de entrada incontroladas, formulário nativo do
        navegador, entre outros.
      </p>
      <p>
        Todos os componentes podem ser facilmente importados pelo lado do
        servidor, eliminando a visualização de "pop-ups" de componentes pelo
        usuário. Assim, torna-se dispensável o uso do <code>ClientOnly</code>.
      </p>

      <h2>Instalação</h2>

      <p>
        Para a instalação e configuração, dividimos a instalação em pacotes, os
        quais são: <code>arkyn_components</code>
        {", "}
        <code>arkyn_tokens</code>
        {" e "}
        <code>arkyn_utils</code>.
      </p>

      <pre>npm install arkyn_components arkyn_tokens arkyn_utils</pre>

      <h2>Configuração</h2>

      <p>
        É necessário uma configuração para que os componentes sejam estilizados
        corretamentem, para os pacotes <code>utils</code> e <code>tokens</code>{" "}
        não é necessário nem uma configuração.
      </p>
    </>
  );
}
