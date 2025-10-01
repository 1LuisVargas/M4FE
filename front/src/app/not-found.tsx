const notFound = () => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-3xl m-4 text-center">
        Opps, looks like you tried to reach a page that doesn&apos;t exist.{" "}
        <br />
        404
      </h1>
    </div>
  );
};

export default notFound;
