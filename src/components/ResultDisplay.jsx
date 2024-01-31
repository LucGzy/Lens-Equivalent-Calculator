import React from "react";

export default function ResultDisplay({
  equivalentFocalLengthValue,
  equivalentBokehValue,
  originSensorSize,
  destinationSensorSize,
  focalLength,
  fvalue,
}) {
  const getSensorInt = (sensorSize) => {
    switch (sensorSize) {
      case "mediumformat1":
        return 0.64;
      case "mediumformat2":
        return 0.79;
      case "fullframe":
        return 1;
      case "APSH":
        return 1.3;
      case "APSC":
        return 1.52;
      case "APS-C Canon":
        return 1.6;
      case "micro4/3":
        return 2;
      case '1"':
        return 2.7;
      case "phone":
        return 5.62;
      default:
        return 0;
    }
  };
  const originSensorInt = getSensorInt(originSensorSize);
  const destinationSensorInt = getSensorInt(destinationSensorSize);
  const isBigger = destinationSensorInt < originSensorInt;

  return (
    <div className="text-center w-[70%] bg-white border rounded-2xl p-4 mt-4">
      {equivalentBokehValue && isBigger && (
        <p className="">
          If you need/want to change lens to have the same focal (without
          needing to crop in) but still the same Bokeh{" "}
          <b>
            you would actually need a{" "}
            {Math.round((originSensorInt / destinationSensorInt) * focalLength)}
            mm lens with a tighter aperture of f
            {((originSensorInt / destinationSensorInt) * fvalue).toFixed(1)}
          </b>
          . <b>BUT</b> For an equivalent Bokeh on {destinationSensorSize} coming
          from a {focalLength}mm f{fvalue} lens on a {originSensorSize} you can
          also just use the same lens and crop in the image. Contrary to popular
          belief, using a lens on a different sensor does not change the bokeh
          it really just changes the focal length. This is a common confusion
          because we tend to compare at equivalent effective focal length (i.e a
          30mm f1.8 on an APSC compared with a 45mm f1.8 on a Full frame) in
          which case there is indeed a difference and the 45mm f1.8 will have a
          more noticeable bokeh.
        </p>
      )}
      {equivalentBokehValue && equivalentFocalLengthValue && (
        <p className="">
          For an equivalent Bokeh and focal length on {destinationSensorSize}{" "}
          coming from a {focalLength}mm f{fvalue} lens on a {originSensorSize}{" "}
          you have to{" "}
          <b>
            use a{" "}
            {Math.round((originSensorInt / destinationSensorInt) * focalLength)}
            mm lens with an f value of{" "}
            {((originSensorInt / destinationSensorInt) * fvalue).toFixed(1)}
          </b>
          .
        </p>
      )}

      {equivalentFocalLengthValue && !equivalentBokehValue && (
        <p>
          For an equivalent Focal Length on {destinationSensorSize} coming from
          a {focalLength}mm lens on a {originSensorSize} you have to use a{" "}
          {Math.round((originSensorInt / destinationSensorInt) * focalLength)}
          mm lens.
        </p>
      )}
    </div>
  );
}
