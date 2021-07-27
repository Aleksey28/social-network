const Contacts = ( { contacts } ) => {
  const contactsList = Object.keys( contacts ).map( key => (
    <li key={ key }>{ key }: { contacts[key] }</li>
  ) );

  return (
    <ul>
      { contactsList }
    </ul>
  );
};

export default Contacts;
