/* import StudentsPicker from '../components/StudentsPicker';
import StudentsTable from '../components/StudentsTable';
import { fetchStudentData, fetchSchoolData, fetchLegalguardianData } from '../utils';
import { useState } from 'react';


const studentsDataComponent = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [schoolsData, setSchoolsData] = useState([]);
  const [legalguardiansData, setLegalguardiansData] = useState([]);


  const onStudentsPick = async (studentIds) => {
    for (const studentId of studentIds) {
      const studentData = await fetchStudentData(studentId);
      setStudentsData([...studentsData, studentData]);
      for (const student of studentData) {
          const { schoolId, legalguardianId } = student;
          const schoolData = await fetchSchoolData(schoolId);
          setSchoolsData([...schoolsData, schoolData]);
          const legalguardianData = await fetchLegalguardianData(legalguardianId);
          setLegalguardiansData([...legalguardiansData, legalguardianData]);
      }
    }
  };


  return (
    <>
      <StudentsPicker onPickHandler={onStudentsPick} />
      <StudentsTable
        studentsData={studentsData}
        schoolsData={schoolsData}
        LegalguardiansData={legalguardiansData}
      />
    </>
  );
};


export default studentsDataComponent; */

/*

    **CHANGES**

    - First we change the name of the component to follow the React nomenclature (first letter in uppercase)
    - Then we replace the for by the map, so that the code is more friendly
    - We then use Promises .all() to make sure the data is resolved before calling 'setSchoolsData()' and 'setLegalguardiansData()' for better optimization.
    - Then we use "(prevLegal) => [...prevLegal, legalguardianData]" instead of the normal spread operator, because when we are working with asynchronous calls, with this way we make sure that it is updated with the latest version of the state, since with the spread operator we could be using old state

    Here below I leave the improved version
*/

import { useState } from "react";
import StudentsPicker from "../components/StudentsPicker";
import StudentsTable from "../components/StudentsTable";
import {
  fetchStudentData,
  fetchSchoolData,
  fetchLegalguardianData,
} from "../utils";

const StudentsDataComponent = () => {
  const [studentsData, setStudentsData] = useState([]);
  const [schoolsData, setSchoolsData] = useState([]);
  const [legalguardiansData, setLegalguardiansData] = useState([]);

  const onStudentsPick = async (studentIds) => {
    const data = studentIds.map(async (studentId) => {
      const studentData = await fetchStudentData(studentId);
      setStudentsData((prevStudents) => [...prevStudents, studentData]);
      const { schoolId, legalguardianId } = studentData[0];
      const schoolData = await fetchSchoolData(schoolId);
      setSchoolsData((prevSchools) => [...prevSchools, schoolData]);
      const legalguardianData = await fetchLegalguardianData(legalguardianId);
      setLegalguardiansData((prevLegal) => [...prevLegal, legalguardianData]);
    });
    await Promise.all(data);
  };

  return (
    <>
      <StudentsPicker onPickHandler={onStudentsPick} />
      <StudentsTable
        studentsData={studentsData}
        schoolsData={schoolsData}
        LegalguardiansData={legalguardiansData}
      />
    </>
  );
};

export default StudentsDataComponent;
