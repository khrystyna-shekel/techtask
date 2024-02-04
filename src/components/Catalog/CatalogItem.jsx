const CatalogItem = ({ el }) => {
  return (
    <>
      <li key={el.id}>
        <img
          src={el?.img || el?.photolink}
          alt={el?.title}
          width={274}
          height={268}
        />
      </li>
    </>
  );
};

export default CatalogItem;
