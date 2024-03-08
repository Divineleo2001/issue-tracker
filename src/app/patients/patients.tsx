
import React from "react";

import { PatientView } from "./_components/patient-view";


interface PatientData {
  id: number;
  regId: string;
  name: string;
  gender: string;
  age: number;
  user: {
    id: number;
    login: string | null; // Assuming login can be optional
    createdBy: string | null;
    createdDate: string | null;
    lastModifiedBy: string | null;
    lastModifiedDate: string | null;
  };
  createdBy: string;
  createdDate: string;
  login: string;
  lastModifiedBy: string;
  lastModifiedDate: string;
}

const PatientsPage = ({ patients }: { patients: PatientData[] }) => {
  // const {data } = useQuery({
  //     queryKey : ["patients"],
  //     queryFn :
  // })

  // console.log(patients);

  return (
    <div className="overflow-x-auto">
      <h1 className="text-4xl font-semibold text-center">Patients</h1>

      <div className="flex-col max-w-md mx-auto md:max-w-none sm:grid sm:grid-cols-2 lg:max-w-7xl lg:mx-auto lg:grid-cols-3 px-5 gap-5">
        {patients.map((patient: PatientData) => (
          <div key={patient.id}>
            <PatientView
              name={patient.name}
              age={patient.age}
              gender={patient.gender}
              regId={patient.regId}
              id={patient.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientsPage;
