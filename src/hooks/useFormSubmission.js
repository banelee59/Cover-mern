import { useState } from "react";
import axiosInstance from "../config/axios";

const useFormSubmission = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // write the hook for the comparison formhere

  const submitFuneralParlor = async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axiosInstance.post(
        "/register-funeral-parlour",
        formData
      );

      setSuccess(true);
      return {
        success: true,
        data: response.data,
        message: "Registration successful!",
      };
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || "Registration failed. Please try again.";
      setError(errorMessage);
      throw {
        success: false,
        error: errorMessage,
      };
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setError(null);
    setSuccess(false);
    setLoading(false);
  };

  return {
    submitFuneralParlor,
    loading,
    error,
    success,
    resetForm,
  };
};

export default useFormSubmission;
