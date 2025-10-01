const productDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const { productId } = await params; // Getting the product id

  return (
    <div>
      <h1 className="text-3xl">This is the product page for product:</h1>
      <p className="text-2xl">{productId}</p>
    </div>
  );
};

export default productDetails;
