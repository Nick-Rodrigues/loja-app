export default function ProdutoSlug({params}) {
    return (
      <div>
          <h1>Produto Slug</h1>
          <p>Valor do parametro pasado na URL : {params.slug}</p>
      </div>
    )
  }
  