import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Test on custom hook useForm", () => {
  const initialValue = {
    name: "Mengano",
  };
  test("should return values ", () => {
    const { result } = renderHook(() => useForm(initialValue));

    expect(result.current).toEqual({
      name: initialValue.name,
      email: initialValue.email,
      formState: initialValue,
      onInputChange: expect.any(Function),
      onFormReset: expect.any(Function),
    });
  });

  test("Input should change the value", () => {
    const newValue = "Fulano";

    const { result } = renderHook(() => useForm(initialValue));
    const { onInputChange } = result.current;

    act(() => {
      onInputChange({
        target: { name: "name", value: newValue },
      });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test("Input should reset the value", () => {
    const newValue = "Fulano";

    const { result } = renderHook(() => useForm(initialValue));
    const { onInputChange, onFormReset } = result.current;

    act(() => {
      onInputChange({
        target: { name: "name", value: newValue },
      });
      onFormReset();
    });

    expect(result.current.name).toBe(initialValue.name);
    expect(result.current.formState.name).toBe(initialValue.name);
  });
});
