"use client";
import { SearchManufacturerProps } from "@/types";
import React, { useState, Fragment } from "react";
import {
    Combobox,
    Transition,
    ComboboxButton,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
} from "@headlessui/react";
import { manufacturers } from "@/constants";
import Image from "next/image";

const SearchManufacturer = ({
    manufacturer,
    setManufacturer,
}: SearchManufacturerProps) => {
    const [query, setQuery] = useState("");
    const filteredManufacturers =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) =>
                item
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase().replace(/\s+/g, ""))
            );
    return (
        <div className="search-manufacturer">
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative w-full">
                    <ComboboxButton className="absolute top-[14px]">
                        <Image
                            src="/car-logo.svg"
                            alt="car logo"
                            width={20}
                            height={20}
                            className="ml-4"
                        />
                    </ComboboxButton>
                    <ComboboxInput
                        className="search-manufacturer__input"
                        placeholder="Volkswagen"
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Transition
                        as={Fragment}
                        leave="transition duration-200 ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery("")}
                    >
                        <ComboboxOptions>
                            {filteredManufacturers.length === 0 && query !== "" ? (
                                <ComboboxOption
                                    value={query}
                                    className="search-manufacturer__option"
                                >
                                    No option named "{query}" found.
                                </ComboboxOption>
                            ) : (
                                filteredManufacturers.map((item) => (
                                    <ComboboxOption key={item} value={item}>
                                        {({ selected}) => (
                                            <div
                                                className={`relative search-manufacturer__option flex gap-2 
                                                ${selected ? "bg-primary-blue text-white" : "text-gray-900"}
                                                hover:bg-primary-blue hover:text-white`}
                                            >
                                                {selected}
                                                {item}
                                            </div>
                                        )}
                                    </ComboboxOption>
                                ))
                            )}
                        </ComboboxOptions>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};

export default SearchManufacturer;
