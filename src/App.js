import React from "react";
import Header from "./components/Header/Header";
import Post from "./components/Post/Post";
import Data from "./Data";
// import DarkMode from "./components/DarkMode/DarkMode";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Posts $ sidemenu container */}
        <div
          style={{ width: "60%", display: "flex", justifyContent: "center" }}
        >
          {/* Posts container */}
          <div style={{ width: "80%" }}>
            {Data.map((post) => {
              return (
                <Post
                  key={post.id}
                  MainTitle={post.MainTitle}
                  title={post.title}
                />
              );
            })}

            {/* <Post /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// import React from "react";

// function App() {
//   const person = {
//     name: "Ahmed",
//     age: 22,
//     email: "yahooo@gmail.com",
//   };
//   return (
//     <div>
//       <h1
//         style={{
//           backgroundColor: "blue",
//           padding: "20px",
//           boxShadow: "0px 20px 10px gray",
//           margin: "20px",
//         }}
//       >
//         {person.name}
//       </h1>
//       <h2 className={"bg active"}>{person.age}</h2>
//       <h3 className={person.email == "yahoo@gmail.com" ? "bg" : "bb"}>
//         {person.email}
//       </h3>
//     </div>
//   );
// }

// export default App;
