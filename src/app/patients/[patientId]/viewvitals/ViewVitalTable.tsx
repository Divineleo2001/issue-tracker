import React from "react";
import { Vitals } from "@prisma/client";

interface ViewVitalTableProps {
  vitals: Vitals;
}

const ViewVitalTable: React.FC<ViewVitalTableProps> = ({ vitals }) => {
  return (
    <div className="">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3 p-5">
        <h2 className="text-xl font-bold mb-2">Vitals</h2>
        <p>
          <strong>Time Taken:</strong>{" "}
          {new Date(vitals.createdAt).toLocaleString()}
        </p>
        <p>
          <strong>Level Of Consciousness:</strong> {vitals.LoC}
        </p>
        <p>
          <strong>Airway Status:</strong> {vitals.airwayStatus}
        </p>
        <p>
          <strong>Breathing Rate:</strong> {vitals.breathingRate}
        </p>
        <p>
          <strong>Breathing Status:</strong> {vitals.breathingStatus}
        </p>
        <p>
          <strong>Pulse Rate:</strong> {vitals.pulseRate}
        </p>
        <p>
          <strong>Pulse Rate Quality:</strong> {vitals.pulseRateQuality}
        </p>
        <p>
          <strong>Systolic Blood Pressure:</strong>{" "}
          {vitals.systolicBloodPressure}
        </p>
        <p>
          <strong>Diastolic Blood Pressure:</strong>{" "}
          {vitals.diastolicBloodPressure}
        </p>
        <p>
          <strong>SpO2:</strong> {vitals.spo2}
        </p>
        <p>
          <strong>Temperature:</strong> {vitals.temperature}
        </p>
      </div>
    </div>
  );
};

export default ViewVitalTable;
