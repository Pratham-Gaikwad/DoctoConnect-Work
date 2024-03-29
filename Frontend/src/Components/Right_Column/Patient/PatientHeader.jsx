import React, { useState } from "react";
import "./PatientHeader.css";
import Searchbar from "../NavSearch/SearchBar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";

function PatientHeader() {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });

  const patient_data = [
    {
      date: "18/04/2022",
      patient_id: "201",
      patient_name: "Avinash Padale",
      age: "22",
      patient_gender: "Male",
      patient_phone_no: "9823754323",
      patient_email: "avinashpadale@gmail.com",
      treatment: "Eye Infection",
      dr_name: "Dev Thakur",
    },
    {
      date: "07/05/2022",
      patient_id: "202",
      patient_name: "Smith Agrawal",
      age: "25",
      patient_gender: "Female",
      patient_phone_no: "7566347903",
      patient_email: "smithagrawal@gmail.com",
      treatment: "Migrain",
      dr_name: "Rutuj Shah",
    },
    {
      date: "01/06/2022",
      patient_id: "203",
      patient_name: "Rashmika Ingle",
      age: "32",
      patient_gender: "Female",
      patient_phone_no: "9765433545",
      patient_email: "rashmikaingle@gmail.com",
      treatment: "PCOD",
      dr_name: "Riya Sharma",
    },
    {
      date: "23/07/2022",
      patient_id: "204",
      patient_name: "Arjun Sawant",
      age: "14",
      patient_gender: "Male",
      patient_phone_no: "6443676901",
      patient_email: "arjunsawant@gmail.com",
      treatment: "Pneumonia",
      dr_name: "Preeti Deshmukh",
    },
    {
      date: "19/08/2022",
      patient_id: "205",
      patient_name: "Rahul Dhore",
      age: "60",
      patient_gender: "Male",
      patient_phone_no: "7576708924",
      patient_email: "rahuldhore@gmail.com",
      treatment: "Root canal",
      dr_name: "Naman Gupta",
    },
    {
      date: "02/09/2022",
      patient_id: "206",
      patient_name: "Priya Desai",
      age: "46",
      patient_gender: "Female",
      patient_phone_no: "9766324335",
      patient_email: "priyadesai@gmail.com",
      treatment: "PCOD",
      dr_name: "Riya Sharma",
    },
    {
      date: "15/10/2022",
      patient_id: "207",
      patient_name: "Pranali Jadhav",
      age: "38",
      patient_gender: "Female",
      patient_phone_no: "9765435320",
      patient_email: "pranalijadhav@gmail.com",
      treatment: "Brain Tumor",
      dr_name: "Shaurya Jadhav",
    },
    {
      date: "30/11/2022",
      patient_id: "208",
      patient_name: "Soham Patil",
      age: "72",
      patient_gender: "Male",
      patient_phone_no: "7656535674",
      patient_email: "sohampatil@gmail.com",
      treatment: "Cataract",
      dr_name: "Dev Thakur",
    },
    {
      date: "09/12/2022",
      patient_id: "209",
      patient_name: "Rohit Mokashi",
      age: "22",
      patient_gender: "Male",
      patient_phone_no: "8345066789",
      patient_email: "rohitmokashi@gmail.com",
      treatment: "Dengue",
      dr_name: "Pratiksha Patil",
    },
    {
      date: "26/01/2023",
      patient_id: "210",
      patient_name: "Anushka Hire",
      age: "16",
      patient_gender: "Female",
      patient_phone_no: "6465780202",
      patient_email: "anushkahire@gmail.com",
      treatment: "Acne Problem",
      dr_name: "Eknath Pawar",
    },
  ];

  return (
    <>
      <div className="navbar-patient">
          <h2>Patient</h2>
      </div>

      <div className="patient-navbar2">
        <InputText
          className="searchinputbar"
          placeholder="Search.."
          onInput={(e) =>
            setFilters({
              global: {
                value: e.target.value,
                matchMode: FilterMatchMode.CONTAINS,
              },
            })
          }
        />
      </div>

      <div className="patient-table">
        <DataTable
          value={patient_data}
          filters={filters}
          paginator
          rows={5}
          totalRecords={patient_data.length}
        >
          <Column field="date" header="Date" />
          <Column field="patient_id" header="Patient Id" />
          <Column field="patient_name" header="Patient Name" />
          <Column field="patient_gender" header="Gender" />
          <Column field="age" header="Age" />
          <Column field="patient_phone_no" header="Phone Number" />
          <Column field="patient_email" header="Email ID" />
          <Column field="treatment" header="Treatment" />
          <Column field="dr_name" header="Doctor Name" />
        </DataTable>
      </div>
    </>
  );
}

export default PatientHeader;
