"use client";
import axios from "axios";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "@/app/hooks/useRegisterModal";

import Modal from "./Modals";
import Heading from "../Heading";

import { toast } from "react-hot-toast";

import useProfilePicModal from "@/app/hooks/useProfilePicModal";
import ImageUpload from "../inputs/imageUpload";
import { useRouter } from "next/navigation";
import useUpdateBody from "@/app/hooks/useBodyModal";
import Input from "../inputs/Input";
const BodyUpdateModal = () => {
  const router = useRouter();
  const bodyUpdateModal = useUpdateBody();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: { BodyUpdateModal: "" },
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
      .post("/api/updateBody", data)
      .then((res) => {
        router.refresh;
        bodyUpdateModal.onClose();
      })
      .catch((err) => {
        toast.error("wrong.");
      });
    setIsLoading(false);
  };
  const imageSrc = watch("imageSrc");
  const bodyContent = (
    <div>
      <Heading
        title="Update Profile"
        subtitle="Update Your Profile From Here"
      />
      <Input
        id="weight"
        label="Weight"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="number"
      />
      <br />
      <Input
        id="height"
        label="Height"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="number"
      />
      <br />
      <Input
        id="dob"
        label="Date Of Birth"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="date"
      />
      <br />
      <label htmlFor="gender">Gender</label>
      <select
        id="gender"
        className="bg-red-500"
        {...register("gender", { required: true })}
      >
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="transgender">Transgender</option>
        <option value="genderqueer">Genderqueer</option>
        <option value="genderfluid">Genderfluid</option>
        <option value="nonbinary">Non-binary</option>
        <option value="agender">Agender</option>
        <option value="bigender">Bigender</option>
        <option value="polygender">Polygender</option>
        <option value="androgynous">Androgynous</option>
        <option value="neutrois">Neutrois</option>
        <option value="androgyne">Androgyne</option>
        <option value="demigender">Demigender</option>
        <option value="genderquestioning">Gender Questioning</option>
        <option value="thirdgender">Third Gender</option>
        <option value="twospirit">Two-Spirit</option>
        <option value="genderless">Genderless</option>
        <option value="genderneutral">Gender Neutral</option>
        <option value="unicorn">Unicorn</option>
        <option value="mermaid">Mermaid</option>
        <option value="alien">Alien</option>
        <option value="vampire">Vampire</option>
        <option value="werewolf">Werewolf</option>
        <option value="fairy">Fairy</option>
        <option value="dragon">Dragon</option>
        <option value="centaur">Centaur</option>
        <option value="wizard">Wizard</option>
        <option value="witch">Witch</option>
        <option value="elf">Elf</option>
        <option value="dwarf">Dwarf</option>
        <option value="hobbit">Hobbit</option>
        <option value="orc">Orc</option>
        <option value="troll">Troll</option>
        <option value="ghoul">Ghoul</option>
        <option value="zombie">Zombie</option>
        <option value="ghost">Ghost</option>
        <option value="poltergeist">Poltergeist</option>
        <option value="vulcan">Vulcan</option>
        <option value="klingon">Klingon</option>
        <option value="jedi">Jedi</option>
        <option value="sith">Sith</option>
        <option value="droid">Droid</option>
        <option value="ewok">Ewok</option>
        <option value="wookie">Wookie</option>
        <option value="stormtrooper">Stormtrooper</option>
        <option value="timelord">Time Lord</option>
        <option value="dalek">Dalek</option>
        <option value="cyberman">Cyberman</option>
        <option value="weeble">Weeble</option>
        <option value="womble">Womble</option>
        <option value="smurf">Smurf</option>
        <option value="minion">Minion</option>
        <option value="ogre">Ogre</option>
        <option value="pixie">Pixie</option>
        <option value="gnome">Gnome</option>
        <option value="gremlin">Gremlin</option>
        <option value="mogwai">Mogwai</option>
        <option value="yeti">Yeti</option>
        <option value="bigfoot">Bigfoot</option>
        <option value="lochnessmonster">Loch Ness Monster</option>
        <option value="chupacabra">Chupacabra</option>
        <option value="sasquatch">Sasquatch</option>
        <option value="jackalope">Jackalope</option>
        <option value="kraken">Kraken</option>
        <option value="phoenix">Phoenix</option>
        <option value="griffin">Griffin</option>
        <option value="pegasus">Pegasus</option>
        <option value="minotaur">Minotaur</option>
        <option value="chimera">Chimera</option>
        <option value="sphinx">Sphinx</option>
        <option value="basilisk">Basilisk</option>
        <option value="medusa">Medusa</option>
        <option value="gorgon">Gorgon</option>
        <option value="harpy">Harpy</option>
        <option value="siren">Siren</option>
        <option value="nymph">Nymph</option>
        <option value="satyr">Satyr</option>
        <option value="centaur">Centaur</option>
        <option value="faun">Faun</option>
        <option value="merman">Merman</option>
        <option value="selkie">Selkie</option>
        <option value="kelpie">Kelpie</option>
        <option value="banshee">Banshee</option>
        <option value="leprechaun">Leprechaun</option>
        <option value="djinn">Djinn</option>
        <option value="genie">Genie</option>
        <option value="goblin">Goblin</option>
        <option value="hobgoblin">Hobgoblin</option>
        <option value="imp">Imp</option>
        <option value="sprite">Sprite</option>
        <option value="brownie">Brownie</option>
        <option value="boggart">Boggart</option>
        <option value="banshee">Banshee</option>
      </select>
      {errors.gender && <p>This field is required</p>}
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={bodyUpdateModal.isOpen}
      title="Update Profile"
      actionLabel="Continue"
      onClose={bodyUpdateModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      //   footer={footerContent}
    />
  );
};

export default BodyUpdateModal;
