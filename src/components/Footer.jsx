import React, { useState } from "react";
import Modal from "react-modal";
import ContactForm from "./Form";

Modal.setAppElement("#root"); // Set the root element for accessibility

export default function Footer() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <footer className="mt-auto mb-2 text-white">
      <button
        className="m-2 underline underline-offset-2"
        onClick={() => openModal("How does this work ?")}
      >
        How does this work ?
      </button>
      <button
        className="m-2 underline underline-offset-2"
        onClick={() => openModal("Who am I ?")}
      >
        Who am I ?
      </button>
      <button
        className="m-2 underline underline-offset-2"
        onClick={() => openModal("Contact me")}
      >
        Contact me
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal Content"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            padding: "20px",
            border: "none",
            borderRadius: "5px",
            maxWidth: "800px",
            textAlign: "center",
          },
        }}
      >
        <h2 className="underline underline-offset-2 mb-4">{modalContent}</h2>
        {modalContent === "How does this work ?" && (
          <div>
            <p>
              For those of you who are interested here is how this works.
              <br />I gathered the ratios (crop factor) between the different
              sensor sizes (note that there are a tonne of different formats and
              that i used the most commonly found, you can find a more
              exhausitve list here{" "}
              <a
                href="https://en.wikipedia.org/wiki/Crop_factor#Common_crop_factors"
                className=" text-sky-700"
                target="_blank"
                rel="noreferrer"
              >
                https://en.wikipedia.org/wiki/Crop_factor#Common_crop_factors
              </a>{" "}
              and here{" "}
              <a
                href="https://https://en.wikipedia.org/wiki/Image_sensor_format.digicamdb.com/sensor-sizes/"
                className=" text-sky-700"
                target="_blank"
                rel="noreferrer"
              >
                https://https://en.wikipedia.org/wiki/Image_sensor_format.digicamdb.com/sensor-sizes/
              </a>{" "}
              ).
              <br /> I have been using the following ratios for the different
              sensor sizes :
            </p>
            <p className=" text-start pl-8">
              <br /> Medium format = 0.64 (Biggest sensor)
              <br /> Medium format 2 = 0.79 (Biggest sensor)
              <br /> Full Frame = 1
              <br /> APS-H = 1.3
              <br /> APS-C = 1.52 (most common)
              <br /> APS-C Canon = 1.6
              <br /> Micro 4/3 = 2
              <br /> 1" = 2.7 (usually drones)
              <br /> Phone = 5.67 (most common)
              <br />
            </p>
            <p className="mt-4">
              It is then simply about converting the focal length and/or f-value
              using this ratio
            </p>
          </div>
        )}
        {modalContent === "Who am I ?" && (
          <p>
            I'm a web developer, who also enjoy music and photography, you can
            check my different works on{" "}
            <a
              href="https://www.instagram.com/lucg.photography/"
              target="_blank"
              rel="noreferrer"
              className=" text-sky-700"
            >
              Instagram(photography)
            </a>
            ,{" "}
            <a
              href="https://yellow-square.fr/"
              target="_blank"
              rel="noreferrer"
              className=" text-sky-700"
            >
              Band Website(Music)
            </a>{" "}
            and my{" "}
            <a
              href="https://github.com/Likzy"
              target="_blank"
              rel="noreferrer"
              className=" text-sky-700"
            >
              Github(Code)
            </a>
          </p>
        )}
        {modalContent === "Contact me" && <ContactForm />}

        <button
          onClick={closeModal}
          className="mt-4 bg-zinc-500 border-1 rounded-lg border w-fit self-center p-2"
        >
          Close
        </button>
      </Modal>
    </footer>
  );
}
