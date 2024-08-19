export const Filter = (props) => {
  return (
    <>
      filter show with:
      <input
        type='text'
        onChange={props.searcher}
        placeholder='Filter'
        value={props.search} />

    </>
  );
};
