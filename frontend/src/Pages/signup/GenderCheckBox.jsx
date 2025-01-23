export const GenderCheckBox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""}`}
        >
          <input
            type="checkbox"
            className="checkbox"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
          <span className="label-text">Male</span>
        </label>
      </div>

      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" : ""}`}
        >
          <input
            type="checkbox"
            className="checkbox"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
          <span className="label-text">Female</span>
        </label>
      </div>
    </div>
  );
};

