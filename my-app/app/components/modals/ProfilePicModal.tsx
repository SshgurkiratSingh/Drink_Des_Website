"use client";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import { data } from "autoprefixer";
import Modal from "./Modals";
import Heading from "../Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import Button from "../NavBar/Button";
import { SignatureKind } from "typescript";
import { signIn } from "next-auth/react";
import useLoginModal from "@/app/hooks/useLoginModal";
import useProfilePicModal from "@/app/hooks/useProfilePicModal";
import ImageUpload from "../inputs/imageUpload";
const ProfilePicModal = () => {
  const ProfilePicModal = useProfilePicModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: { ProfilePicModal: "" },
  });
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("/api/updatePic", data)
      .then((res) => {
        ProfilePicModal.onClose();
      })
      .catch((err) => {
        toast.error("wrong.");
      });
    setIsLoading(false);
  };
  const imageSrc = watch("imageSrc");
  const bodyContent = (
    <div>
      <ImageUpload
        value={imageSrc}
        onChange={(value) => setCustomValue("imageSrc2", value)}
      />
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={ProfilePicModal.isOpen}
      title="Update Profile"
      actionLabel="Continue"
      onClose={ProfilePicModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      //   footer={footerContent}
    />
  );
};

export default ProfilePicModal;
