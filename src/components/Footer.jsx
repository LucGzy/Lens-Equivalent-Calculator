import React, { useState } from "react";
import Modal from "react-modal";

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
      <button className="m-2" onClick={() => openModal("Who am I")}>
        Who am I
      </button>
      <button className="m-2" onClick={() => openModal("Contact me")}>
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
            maxWidth: "600px",
            textAlign: "center",
          },
        }}
      >
        <h2 className="underline underline-offset-2 mb-4">{modalContent}</h2>
        {modalContent === "How does this work ?" && (
          <div>
            <p>
              For those of you who are interested here is how this works.
              <br />I gathered the ratios between the different sensor sizes
              (note that there are a tonne of different formats and that i used
              the most commonly found, you can find a more exhausitve list here{" "}
              <a
                href="https://en.wikipedia.org/wiki/File:SensorSizes.svg"
                className=" text-sky-700"
                target="_blank"
                rel="noreferrer"
              >
                https://en.wikipedia.org/wiki/File:SensorSizes.svg
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
              <br /> Full Frame = 1
              <br /> APS-C = 1.52 (most common)
              <br /> Micro 4/3 = 2
              <br /> 1" = 2.7
              <br /> Phone = 5.67 (most common)
              <br />
            </p>
            <p className="mt-4">
              It is then simply about converting the focal length and/or f-value
              using this ratio
            </p>
          </div>
        )}
        {modalContent === "Who am I" && (
          <p>Information about who you are goes here.</p>
        )}
        {modalContent === "Contact me" && (
          <p>Contact information and form go here.</p>
        )}

        <button
          onClick={closeModal}
          className="mt-4 bg-zinc-500 border-1 rounded-lg border w-fit self-center p-2"
        >
          Close Modal
        </button>
      </Modal>
    </footer>
  );
}
