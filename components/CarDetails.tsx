"use client";
import { CarProps } from "@/types";
import React from "react";
import Image from "next/image";
import { Fragment } from "react";
import { Dialog, Transition, TransitionChild,DialogPanel } from "@headlessui/react";

interface CarDetailsProps {
	isOpen: boolean;
	closeModel: () => void;
	car: CarProps;
}
const CarDetails = ({ isOpen, closeModel, car }: CarDetailsProps) => {
	return (
		<>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModel}>
					<TransitionChild
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25"/>
					</TransitionChild>
					
          <div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
						<TransitionChild
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
              <DialogPanel transition className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white'>
                <button 
                type="button"
                onClick={closeModel}>
                  <Image
                    src='/close.svg'
                    alt='close'
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </button>
              </DialogPanel>
						</TransitionChild>
            </div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default CarDetails;
