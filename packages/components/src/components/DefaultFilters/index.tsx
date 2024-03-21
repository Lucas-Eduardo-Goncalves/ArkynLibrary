import { useLocation } from "@remix-run/react";

type paramsArray = [key: string, value: string][];

export function DefaultFilters() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const paramsArray: paramsArray = [];

  searchParams.forEach((value, key) => {
    paramsArray.push([key, value]);
  });

  return (
    <>
      {paramsArray.map(([key, value]) => (
        <input type="hidden" name={key} value={value} />
      ))}
    </>
  );
}
