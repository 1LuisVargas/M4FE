const notFound = () => {
  return (
    <div className="flex justify-center items-center">
      <h1 className="h1">
        Opps, looks like you tried to reach a page that doesn&apos;t exist.{" "}
        <br />
        404
      </h1>
    </div>
  );
};

export default notFound;
