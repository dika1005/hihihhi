type DetailProductPageProps = { params: { slug: string[] } };

export default function DetailProductPage(props: DetailProductPageProps) {
  const { params } = props;

  return (
    <div>
      <h1>detail product page</h1>
      {params.slug && (
        <>
          <p>Category : {params.slug[0]}</p>
          <p>Gender: {params.slug[1]}</p>
          <p>Ukuran: {params.slug[2]}</p>
          <p>Id: {params.slug[3]}</p>
        </>
      )}
    </div>
  );
}
