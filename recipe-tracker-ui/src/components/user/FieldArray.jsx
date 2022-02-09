import React from "react";
import { useFieldArray } from "react-hook-form";
import NestedArray from "./nestedFieldArray";

export default function Fields({
  control,
  register,
  setValue,
  getValues,
  type
}) {
  const { fields, append, remove, prepend } = useFieldArray({
    control,
    name: `${type}`
  });

  return (
    <>
      
        {fields.map((item, index) => {
          return (
            <div key={item.id}>
              {/* <input {...register(`test.${index}.name`)} /> */}

              <NestedArray
                type={type}
                nestIndex={index}
                {...{ control, register }}
              />
            </div>
          );
        })}
     
    </>
  );
}
