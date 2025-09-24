const productDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params; // Getting the product id

  return (
    <div>
      <h1>This is the product page for product:</h1>
      <p>{productId}</p>
    </div>
  );
};

export default productDetails;
