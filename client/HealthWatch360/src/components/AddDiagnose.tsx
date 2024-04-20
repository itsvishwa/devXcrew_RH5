import DoctorForm from "./DoctorForm";

function AddDiagnose() {
  return (
    <div>
      <DoctorForm
        isLoading={true}
        isInvalid={false}
        isVerified={false}
        name={"Vishwa Sandaruwan"}
        age={"24"}
      />
    </div>
  );
}

export default AddDiagnose;
