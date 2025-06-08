import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FormState {
  title: string;
  type: string;
  severity: string;
  affected: string;
  description: string;
  updateField: (
    field: keyof Omit<FormState, "updateField" | "reset">,
    value: string
  ) => void;
  reset: () => void;
}

export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      title: "",
      type: "",
      severity: "",
      affected: "",
      description: "",
      updateField: (field, value) =>
        set((state) => ({ ...state, [field]: value })),
      reset: () =>
        set({
          title: "",
          type: "",
          severity: "",
          affected: "",
          description: "",
        }),
    }),
    {
      name: "vuln-form-storage",
    }
  )
);
