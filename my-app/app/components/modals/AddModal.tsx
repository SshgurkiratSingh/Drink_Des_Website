"use client";

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { categories } from "../Categories/Categories";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

import Modal from "./Modals";

import useAddModal from "@/app/hooks/useAddModal";
enum STEPS {
  CATEGORY = 0,
  TITLEANDDESCRIPTION = 1,
  IMAGE1 = 2,
  IMAGE2 = 3,
  AVAILIBILITYANDCALORIES = 4,
  COUNTERANDPRICE = 5,
  SUBDES = 6,
}
const AddModal = () => {
  const router = useRouter();
  const AddModal = useAddModal();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.CATEGORY);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });
  const onNext = () => {
    setStep((v) => v + 1);
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.SUBDES) {
      return onNext();
    }

    setIsLoading(true);

    axios
      .post("/api/listing", data)
      .then(() => {
        toast.success("Listing created!");
        router.refresh();
        reset();
        setStep(STEPS.CATEGORY);
        AddModal.onClose();
      })
      .catch(() => {
        toast.error("Something went wrong.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onToggle = useCallback(() => {
    AddModal.onClose();
  }, [AddModal]);

  const bodyContent = <div className="flex flex-col gap-4"></div>;

  const footerContent = <div></div>;

  return (
    <Modal
      disabled={isLoading}
      isOpen={true}
      title="Add "
      actionLabel="Continue"
      onClose={AddModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default AddModal;
