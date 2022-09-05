
function ErrorMessage({children}){
  return (
    <div tabIndex="0"
      style={{
        width: "80%",
        padding: 10,
        marginBottom: 10,
        borderRadius: 4,
        backgroundColor: "orangered",
        textAlign: "center",
        color: "white",
        textTransform: "capitalize",
      }}
    >
      {children}
    </div>
  );
}

export {ErrorMessage};