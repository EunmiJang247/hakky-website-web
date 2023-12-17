import { useState } from 'react';

const SelectBox: React.FC = () => {
  const [optionOpen, setOptionOpen] = useState<boolean>(false);
  return (
    <div className="flex flex-col md:flex-1">
      <button
        className="flex justify-between bg-black p-5 w-80 border border-main-blue md:w-full"
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
          <p className="font1626700white">2022경기남부</p>
        </div>
        <img src="/drop-down.png" alt="" className="cursor-pointer" />
      </button>
      {optionOpen && (
        <>
          <button
            className="flex justify-between bg-main-blue p-5 w-80 border border-main-blue md:w-auto"
            type="button"
            onClick={() => {
              setOptionOpen(false);
            }}
          >
            <p className="font1420500white">2022경기남부</p>
          </button>
          <button
            className="flex justify-between bg-black p-5 w-80 border border-main-blue md:w-auto"
            type="button"
            onClick={() => {
              setOptionOpen(false);
            }}
          >
            <p className="font1420500gray">2022경기남부</p>
          </button>
          <button
            className="flex justify-between bg-black p-5 w-80 border border-main-blue md:w-auto"
            type="button"
            onClick={() => {
              setOptionOpen(false);
            }}
          >
            <p className="font1420500gray">2022경기남부</p>
          </button>
        </>
      )}
    </div>
  );
};

export default SelectBox;
