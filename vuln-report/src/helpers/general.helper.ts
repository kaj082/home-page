export const validateVulnerabilityForm = (form: {
  title: string;
  type: string;
  severity: string;
  description: string;
}) => {
  const errors = {
    title: "",
    type: "",
    severity: "",
    description: "",
  };

  if (!form.title.trim()) {
    errors.title = "Title is required";
  }

  if (!form.type.trim()) {
    errors.type = "Vulnerability type is required";
  }

  if (!form.severity.trim()) {
    errors.severity = "Please select a severity level";
  }

  if (!form.description.trim()) {
    errors.description = "Description cannot be empty";
  }

  return errors;
};
