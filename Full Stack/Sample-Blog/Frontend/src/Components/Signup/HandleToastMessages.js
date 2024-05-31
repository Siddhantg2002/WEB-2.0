import { showToast } from "@cred/neopop-web/lib/components";

const handleToastMessages = (
  errorMessage,
  setErrorMessage,
  isSubmitting,
  isValid,
  successMessage,
  setSuccessMessage
) => {
  if (errorMessage) {
    showToast(errorMessage, { type: "error", autoCloseTime: "2000" });
    setErrorMessage("");
  }
  if (isSubmitting && isValid) {
    showToast("Submitting...", { type: "warning", autoCloseTime: "3000" });
  }
  if (successMessage) {
    showToast(successMessage, { type: "success", autoCloseTime: "2000" });
    setSuccessMessage("");
  }
};

export { handleToastMessages };
