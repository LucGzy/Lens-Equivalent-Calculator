import { useState } from "react";
import ResultDisplay from "./ResultDisplay";

export default function Calculator() {
  const [focalLength, setFocalLength] = useState("");
  const [fValue, setFValue] = useState("");
  const [originSensorSize, setOriginSensorSize] = useState("");
  const [destinationSensorSize, setDestinationSensorSize] = useState("");
  const [equivalentFocalLength, setEquivalentFocalLength] = useState(false);
  const [equivalentBokeh, setEquivalentBokeh] = useState(false);
  const [calculated, setCalculated] = useState(false);

  const calculate = (e) => {
    e.preventDefault();
    if (!focalLength || isNaN(Number(focalLength))) {
      alert("Please enter a valid focal length.");
      return;
    }

    if (!fValue || isNaN(Number(fValue))) {
      alert("Please enter a valid f value.");
      return;
    }

    if (!originSensorSize || !destinationSensorSize) {
      alert("Please select both origin and destination sensor sizes.");
      return;
    }

    if (!(equivalentFocalLength || equivalentBokeh)) {
      alert("Please check at least one checkbox for calculation.");
      return;
    }

    setCalculated(true);
  };

  return (
    <div className="w-fit flex flex-col items-center justify-center ">
      <form className="flex flex-row text-white" onSubmit={calculate}>
        <div className="flex flex-col">
          <label htmlFor="focallength" className=" mb-2">
            Your focal length :
          </label>
          <input
            id="focallength"
            type="text"
            className="text-black w-[70%]"
            value={focalLength}
            onChange={(e) => setFocalLength(e.target.value)}
          />
          <label htmlFor="fvalue" className=" mb-2 mt-2">
            Your f value :
          </label>
          <input
            id="fvalue"
            type="text"
            className="text-black mb-2 w-[70%]"
            value={fValue}
            onChange={(e) => setFValue(e.target.value)}
          />
        </div>
        <div id="originsensordiv">
          <label
            htmlFor="originsensorsize"
            className=" underline underline-offset-2"
          >
            Your sensor size :
          </label>
          <div>
            <input
              id="mediumformat1_origin"
              name="originsensorsize"
              type="radio"
              className="m-2"
              checked={originSensorSize === "mediumformat1"}
              onChange={() => setOriginSensorSize("mediumformat1")}
            />
            <label htmlFor="mediumformat1_origin">
              Medium Format (x0.64, Hasselblad, Leaf, Phase One)
            </label>
          </div>
          <div>
            <input
              id="mediumformat2_origin"
              name="originsensorsize"
              type="radio"
              className="m-2"
              checked={originSensorSize === "mediumformat2"}
              onChange={() => setOriginSensorSize("mediumformat2")}
            />
            <label htmlFor="mediumformat2_origin">
              Medium Format (x0.79, Hasselblad, Leaf, Phase One, Pentax 645D,
              Fujifilm GFX)
            </label>
          </div>
          <div>
            <input
              id="fullframe_origin"
              name="originsensorsize"
              type="radio"
              className="m-2"
              checked={originSensorSize === "fullframe"}
              onChange={() => setOriginSensorSize("fullframe")}
            />
            <label htmlFor="fullframe_origin">Full Frame</label>
          </div>
          <div>
            <input
              id="APSH_origin"
              name="originsensorsize"
              type="radio"
              className="m-2"
              checked={originSensorSize === "APSH"}
              onChange={() => setOriginSensorSize("APSH")}
            />
            <label htmlFor="APSH_origin">APS-H (Canon and Leica M8)</label>
          </div>

          <div>
            <input
              id="APSC_origin"
              name="originsensorsize"
              type="radio"
              className="m-2"
              checked={originSensorSize === "APSC"}
              onChange={() => setOriginSensorSize("APSC")}
            />
            <label htmlFor="APSC_origin">
              APS-C (every brand except canon)
            </label>
          </div>
          <div>
            <input
              id="APSCC_origin"
              name="originsensorsize"
              type="radio"
              className="m-2"
              checked={originSensorSize === "APS-C Canon"}
              onChange={() => setOriginSensorSize("APS-C Canon")}
            />
            <label htmlFor="APSCC_origin">APS-C (Canon)</label>
          </div>
          <div>
            <input
              id="micro43_origin"
              name="originsensorsize"
              type="radio"
              className="m-2"
              checked={originSensorSize === "micro4/3"}
              onChange={() => setOriginSensorSize("micro4/3")}
            />
            <label htmlFor="micro43_origin">Micro 4/3</label>
          </div>
          <div>
            <input
              id='1"_origin'
              name="originsensorsize"
              type="radio"
              className="m-2"
              checked={originSensorSize === '1"'}
              onChange={() => setOriginSensorSize('1"')}
            />
            <label htmlFor='1"_origin'>1"</label>
          </div>
          <div>
            <input
              id="phone_origin"
              name="originsensorsize"
              type="radio"
              className="m-2"
              checked={originSensorSize === "phone"}
              onChange={() => setOriginSensorSize("phone")}
            />
            <label htmlFor="phone_origin">Phone</label>
          </div>
        </div>
        {/********************************************************************************************************************************************/}
        <div id="destinationsensordiv">
          <label
            htmlFor="destinationsensorsize"
            className=" underline underline-offset-2"
          >
            Destination sensor size :
          </label>
          <div>
            <input
              id="mediumformat1_destination"
              name="destinationsensorsize"
              type="radio"
              className="m-2"
              checked={destinationSensorSize === "mediumformat1"}
              onChange={() => setDestinationSensorSize("mediumformat1")}
            />
            <label htmlFor="mediumformat1_destination">
              Medium Format (x0.64, Hasselblad, Leaf, Phase One)
            </label>
          </div>
          <div>
            <input
              id="mediumformat2_destination"
              name="destinationsensorsize"
              type="radio"
              className="m-2"
              checked={destinationSensorSize === "mediumformat2"}
              onChange={() => setDestinationSensorSize("mediumformat2")}
            />
            <label htmlFor="mediumformat2_destination">
              Medium Format (x0.79, Hasselblad, Leaf, Phase One, Pentax 645D,
              Fujifilm GFX)
            </label>
          </div>
          <div>
            <input
              id="fullframe_destination"
              name="destinationsensorsize"
              type="radio"
              className="m-2"
              checked={destinationSensorSize === "fullframe"}
              onChange={() => setDestinationSensorSize("fullframe")}
            />
            <label htmlFor="fullframe_destination">Full Frame</label>
          </div>
          <div>
            <input
              id="APSH_destination"
              name="destinationsensorsize"
              type="radio"
              className="m-2"
              checked={destinationSensorSize === "APSH"}
              onChange={() => setDestinationSensorSize("APSH")}
            />
            <label htmlFor="APSH_destination">APS-H (Canon and Leica M8)</label>
          </div>

          <div>
            <input
              id="APSC_destination"
              name="destinationsensorsize"
              type="radio"
              className="m-2"
              checked={destinationSensorSize === "APSC"}
              onChange={() => setDestinationSensorSize("APSC")}
            />
            <label htmlFor="APSC_destination">
              APS-C (every brand except Canon)
            </label>
          </div>
          <div>
            <input
              id="APSCC_destination"
              name="destinationsensorsize"
              type="radio"
              className="m-2"
              checked={destinationSensorSize === "APS-C Canon"}
              onChange={() => setDestinationSensorSize("APS-C Canon")}
            />
            <label htmlFor="APSCC_destination">APS-C (Canon)</label>
          </div>
          <div>
            <input
              id="micro43_destination"
              name="destinationsensorsize"
              type="radio"
              className="m-2"
              checked={destinationSensorSize === "micro4/3"}
              onChange={() => setDestinationSensorSize("micro4/3")}
            />
            <label htmlFor="micro43_destination">Micro 4/3</label>
          </div>
          <div>
            <input
              id='1"_destination'
              name="destinationsensorsize"
              type="radio"
              className="m-2"
              checked={destinationSensorSize === '1"'}
              onChange={() => setDestinationSensorSize('1"')}
            />
            <label htmlFor='1"_destination'>1"</label>
          </div>
          <div>
            <input
              id="phone_destination"
              name="destinationsensorsize"
              type="radio"
              className="m-2"
              checked={destinationSensorSize === "phone"}
              onChange={() => setDestinationSensorSize("phone")}
            />
            <label htmlFor="phone_destination">Phone</label>
          </div>
        </div>
        <div className="pt-6">
          <div className="flex flex-col">
            <div>
              <input
                id="equivalentfocal"
                type="checkbox"
                className="m-2"
                checked={equivalentFocalLength}
                onChange={() =>
                  setEquivalentFocalLength(!equivalentFocalLength)
                }
              />
              <label htmlFor="equivalentfocal">Equivalent Focal Length</label>
            </div>
          </div>
          <div>
            <input
              id="equivalentbokeh"
              type="checkbox"
              className="m-2"
              checked={equivalentBokeh}
              onChange={() => setEquivalentBokeh(!equivalentBokeh)}
            />
            <label htmlFor="equivalentbokeh">Equivalent Bokeh (DoF)</label>
          </div>
          <button
            type="submit"
            className="bg-zinc-500 border-1 rounded-lg border w-fit self-center p-2  mt-48"
          >
            Find Equivalent
          </button>
        </div>
      </form>
      {calculated && (
        <ResultDisplay
          equivalentFocalLengthValue={equivalentFocalLength}
          equivalentBokehValue={equivalentBokeh}
          originSensorSize={originSensorSize}
          destinationSensorSize={destinationSensorSize}
          focalLength={focalLength}
          fvalue={fValue}
        />
      )}
    </div>
  );
}
