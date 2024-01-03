import { useState } from 'react';

interface Props {
  currentYear: number;
  setCurrentYear: (value: number) => void;
}

const SelectBox: React.FC<Props> = ({ currentYear, setCurrentYear }) => {
  const [optionOpen, setOptionOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col md:flex-1 w-full relative">
      <button
        className="flex justify-between bg-black p-5 w-80 border border-main-blue md:w-full sm:p-3"
        type="button"
        onClick={() => {
          if (optionOpen === false) {
            setOptionOpen(true);
          } else {
            setOptionOpen(false);
          }
        }}
      >
        <div className="flex flex-col gap-1 items-start">
          <p className="font14700blue">리그</p>
          <p className="font1626700white">{currentYear}</p>
        </div>
        <img src="/drop-down.png" alt="" className="cursor-pointer" />
      </button>
      {optionOpen && (
        <div className="bottom-1 absolute top-[93px] sm:top-[76px] md:w-full">
          <button
            className="flex justify-between bg-black p-5 w-80 border border-main-blue md:w-[340px] sm:w-full"
            type="button"
            onClick={() => {
              setOptionOpen(false);
              setCurrentYear(2025);
            }}
          >
            <p className="font1420500white">2025</p>
          </button>
          <button
            className="flex justify-between bg-black p-5 w-80 border border-main-blue md:w-[340px] sm:w-full "
            type="button"
            onClick={() => {
              setOptionOpen(false);
              setCurrentYear(2024);
            }}
          >
            <p className="font1420500white">2024</p>
          </button>
          <button
            className="flex justify-between bg-black p-5 w-80 border border-main-blue md:w-[340px] sm:w-full"
            type="button"
            onClick={() => {
              setOptionOpen(false);
              setCurrentYear(2023);
            }}
          >
            <p className="font1420500white">2023</p>
          </button>
          <button
            className="flex justify-between bg-black p-5 w-80 border border-main-blue md:w-[340px] sm:w-full"
            type="button"
            onClick={() => {
              setOptionOpen(false);
              setCurrentYear(2022);
            }}
          >
            <p className="font1420500white">2022</p>
          </button>
          <button
            className="flex justify-between bg-black p-5 w-80 border border-main-blue md:w-[340px] sm:w-full"
            type="button"
            onClick={() => {
              setOptionOpen(false);
              setCurrentYear(2021);
            }}
          >
            <p className="font1420500gray">2021</p>
          </button>
          <button
            className="flex justify-between bg-black p-5 w-80 border border-main-blue md:w-[340px] sm:w-full"
            type="button"
            onClick={() => {
              setOptionOpen(false);
              setCurrentYear(2020);
            }}
          >
            <p className="font1420500gray">2020</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectBox;
