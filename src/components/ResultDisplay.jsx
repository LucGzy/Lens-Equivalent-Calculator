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
      case "mediumformat":
        return 0.64;
      case "fullframe":
        return 1;
      case "APSC":
        return 1.52;
      case "micro43":
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
  const isBigger = destinationSensorInt > originSensorInt;

  return (
    <div>
      {equivalentBokehValue && !isBigger && (
        <p className="mb-4 mt-4">
          For an equivalent Bokeh on {destinationSensorSize} coming from a{" "}
          {focalLength}mm {fvalue} lens on a {originSensorSize} you have to use
          the same lens and crop in the image. Contrary to popular belief, using
          a lens on a different sensor does not change the bokeh it really just
          changes the focal length. This is a common confusion because we tend
          to compare at equivalent effective focal length (i.e a 30mm f1.8 on an
          APSC compared with a 45mm f1.8 on a Full frame) in which case there is
          indeed a difference and the 45mm f1.8 will have a more noticeable
          bokeh.
        </p>
      )}
      {equivalentBokehValue && isBigger && (
        <p className="mb-4 mt-4">
          For an equivalent Bokeh on {destinationSensorSize} coming from a{" "}
          {focalLength}mm {fvalue} lens on a {originSensorSize} you have to use
          a {Math.round((originSensorInt / destinationSensorInt) * focalLength)}
          mm lens with an f value of{" "}
          {((originSensorInt / destinationSensorInt) * fvalue).toFixed(1)}
        </p>
      )}
      {equivalentFocalLengthValue && (
        <p>
          For an equivalent Focal Length on {destinationSensorSize} coming from
          a {focalLength}mm lens on a {originSensorSize} you have to use a{" "}
          {Math.round((destinationSensorInt / originSensorInt) * focalLength)}
          mm lens
        </p>
      )}
    </div>
  );
}
