import WelcomeNavbar from "../components/WelcomeNavbar";
import "./Welcome.css";
function Welcome(props) {
  return (
    <>
      <WelcomeNavbar theme={props.theme} onSwitch={props.onSwitch} />
      <div class="relative">
        <img
          style={{ height: "30rem" }}
          src={
            props.theme === "light"
              ? "./welcomelight.jpeg"
              : "./welcomedark.jpeg"
          }
          className="object-cover w-full"
          alt="Welcome screen"
        />
        <div className={"absolute bottom-0 left-5 font-link-" + props.theme}>
          Audio-X
        </div>
      </div>
      {/* Make a div divided into 4 columns equally spaced */}
      <div className="grid grid-cols-4">
        <div
          style={{
            backgroundColor: props.theme === "light" ? "#66A2DA" : "#1E142F",
            height: "20rem",
          }}
          className="col-span-1 p-4"
        >
          <h1
            className={
              props.theme === "light" ? "subheadings-light" : "subheadings-dark"
            }
          >
            Convert!
          </h1>
          <p
            className={
              props.theme === "light" ? "mycontent-light" : "mycontent-dark"
            }
          >
            Convert your important videos into mp3 audios. Our website supports
            mp4 ....... formats!
          </p>
        </div>
        <div
          style={{
            backgroundColor: props.theme === "light" ? "#3B84CB" : "#181025",
          }}
          className="col-span-1 p-4"
        >
          <h1
            className={
              props.theme === "light" ? "subheadings-light" : "subheadings-dark"
            }
          >
            Store!
          </h1>
          <p
            className={
              props.theme === "light" ? "mycontent-light" : "mycontent-dark"
            }
          >
            Store the converted audios in our cloud storage and access them
            anytime and anywhere you want!
          </p>
        </div>
        <div
          style={{
            backgroundColor: props.theme === "light" ? "#66A2DA" : "#1E142F",
          }}
          className="col-span-1 p-4"
        >
          <h1
            className={
              props.theme === "light" ? "subheadings-light" : "subheadings-dark"
            }
          >
            Add!
          </h1>
          <p
            className={
              props.theme === "light" ? "mycontent-light" : "mycontent-dark"
            }
          >
            Add comments at any timestamp you want in your audios so you don't
            miss them in future!
          </p>
        </div>
        <div
          style={{
            backgroundColor: props.theme === "light" ? "#8BB3DD" : "#2C1E38",
          }}
          className="col-span-1 p-4"
        >
          <h1
            className={
              props.theme === "light" ? "subheadings-light" : "subheadings-dark"
            }
          >
            Edit!
          </h1>
          <p
            className={
              props.theme === "light" ? "mycontent-light" : "mycontent-dark"
            }
          >
            Oh!, this comment was unnecessary in the previous audio that I made.
            No problem! Our application allows you to edit your previously
            stored audios too.
          </p>
        </div>
      </div>
    </>
  );
}
export default Welcome;
