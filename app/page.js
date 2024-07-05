import "./globals.css";

export default function Home() {
  return (
    <>
      {" "}
      <h1
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
          color: "blue",
          fontSize: "5vw",
        }}
      >
        Welcome to Movie List App
      </h1>
      <p
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
          fontSize: "2.5vw",
        }}
      >
        Choose categories to view list of movies
      </p>
    </>
  );
}
