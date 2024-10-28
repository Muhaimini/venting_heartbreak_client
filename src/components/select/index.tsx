"use client";

import React from "react";
import { Select as TailwidnSelect, Option } from "@material-tailwind/react";

interface SelectProps {
  data: Array<{ label: string; value: string }>;
  placeholder?: string;
  label?: string;
  value?: string;
  onChange(props?: string): void;
}

const Select = ({
  data,
  value,
  placeholder = "Select",
  label = "Select",
  onChange,
}: SelectProps) => {
  return (
    <TailwidnSelect
      value={value}
      label={label}
      onChange={(value) => onChange(value)}
      onPointerEnterCapture={() => null}
      onPointerLeaveCapture={() => null}
      placeholder={placeholder}
      color="teal"
    >
      {data.map((dataValue, idx) => (
        <Option value={dataValue.value} key={idx}>
          {dataValue.label}
        </Option>
      ))}
    </TailwidnSelect>
  );
};

export default Select;
