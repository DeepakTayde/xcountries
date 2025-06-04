function CountryCard({name, flag, abbr}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid grey",
        borderRadius: "5px",
        gap: "5px",
        textAlign:"center",
        height:"200px",
        width:"200px",
        paddingTop:"5px"
      }}
    >
      <img src={flag} alt={`flag of ${abbr}`} style={{height:"100px", width:"100px"}}/>
      <h2>{name}</h2>
    </div>
  );
}

export default CountryCard;